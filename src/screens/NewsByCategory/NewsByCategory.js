import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View, Dimensions, Platform, TouchableOpacity } from "react-native";
import Api from '../../utils/Api';
import { Loader, NewsCard, NoResults } from '../../components';
import { LANGUAGES, SORT_NEWS, NEWS_PICKER_TYPE } from '../../utils/Enums';
import Colors from '../../utils/Colors';
import Modal from 'react-native-modal';
import { Button } from 'react-native-paper';
import { NewsCountriesData, NewsSortTypesData } from '../../data';

export default class NewsByCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            isLoading: true,
            error: false,
            isModalVisible: false,
            country: NewsCountriesData[0],
            sortType: NewsSortTypesData[0],
        };
    }

    componentDidMount() {
        this.getNewsByCategory();
    }

    async getNewsByCategory() {
        try {
            const { route } = this.props;
            const { category } = route.params;
            const { country, sortType } = this.state;
            const news = await Api.GetNews({ categories: category, languages: country.language, countries: country.symbol, sort: sortType.type });
            console.log("Categories -> componentDidMount -> news", news);
            if (news.error) {
                throw new Error(news.error.message);
            }
            this.setState({ news: news.data, isLoading: false, error: false });
        }
        catch (error) {
            console.log("NewsByCategory -> componentDidMount -> error", error);
            this.setState({ news: [], isLoading: false, error: error.toString() });
        }
    }

    selectPicker = (item) => {
        const pickerType = this.state.isModalVisible // if true - is type of picker
        switch (pickerType) {
            case NEWS_PICKER_TYPE.COUNTRIES:
                this.setState({ country: item, isModalVisible: false, isLoading: true }, this.getNewsByCategory)
                break;
            case NEWS_PICKER_TYPE.SORT:
                this.setState({ sortType: item, isModalVisible: false, isLoading: true }, this.getNewsByCategory)
                break;
            default:
                break;
        }
    }

    renderNewsCardItem = ({ item, index }) => (<NewsCard {...item} {...this.props} />)

    renderOption = ({ item, index }) => {
        const { isModalVisible, country, sortType } = this.state
        const stateItem = isModalVisible == NEWS_PICKER_TYPE.COUNTRIES ? country : sortType
        return (
            <TouchableOpacity style={styles.optionContainer} onPress={() => this.selectPicker(item)}>
                <Text style={styles.optionIcon}>{item.icon}</Text>
                <Text style={[styles.optionText, { fontWeight: item.id == stateItem.id ? '400' : '200' }]}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        const { news, isLoading, isModalVisible, country, sortType, error } = this.state
        return (
            <>
                <View style={styles.pickersLine}>
                    <TouchableOpacity style={styles.pickerButton} onPress={() => this.setState({ isModalVisible: NEWS_PICKER_TYPE.COUNTRIES })}>
                        <Text style={styles.pickerText}>{`${country.icon} ${country.name}`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pickerButton} onPress={() => this.setState({ isModalVisible: NEWS_PICKER_TYPE.SORT })}>
                        <Text style={styles.pickerText}>{`${sortType.icon} ${sortType.name}`}</Text>
                    </TouchableOpacity>
                </View>

                {!isLoading ? news.length ?
                    <FlatList
                        style={styles.cardsContainer}
                        data={news}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.renderNewsCardItem} />
                    :
                    <NoResults text={error || null} />
                    : <Loader />
                }

                <Modal
                    isVisible={isModalVisible}
                    onSwipeComplete={() => this.setState({ isModalVisible: false })}
                    swipeDirection="left"
                >
                    <View style={styles.modalHolder}>
                        <TouchableOpacity
                            style={styles.modalCloseButton}
                            onPress={() => this.setState({ isModalVisible: false })}>
                            <Text style={styles.modalCloseIcon}>𝖷</Text>
                        </TouchableOpacity>
                        <View style={styles.modalHolderHeader}>
                            <Text style={styles.modalHeaderTitle}>{isModalVisible == NEWS_PICKER_TYPE.COUNTRIES ? 'Select country news' : 'Select sort type'}</Text>
                        </View>
                        <FlatList
                            style={styles.filtersListHolder}
                            data={isModalVisible == NEWS_PICKER_TYPE.COUNTRIES ? NewsCountriesData : NewsSortTypesData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={this.renderOption} />
                    </View>
                </Modal>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
    },
    cardsContainer: {
        paddingTop: 16,
    },
    pickersLine: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    pickerButton: {
        flex: 0.42,
        borderColor: Colors.black_opacity,
        backgroundColor: Colors.off_white,
        borderWidth: 1,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderRadius: 4,
        paddingVertical: 5,
    },
    pickerText: {
        fontSize: 18,
        textAlign: 'center'
    },
    modalHolder: {
        backgroundColor: Colors.off_white,
        borderRadius: 5,
        overflow: 'hidden',
        paddingTop: 10
    },
    modalHolderHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.grey_green,
        paddingVertical: 15,
    },
    modalHeaderTitle: {
        fontWeight: '500',
        color: Colors.black,
        fontSize: 24,
        lineHeight: 26,
    },
    modalCloseButton: {
        position: 'absolute',
        alignItems: 'center',
        borderRadius: 4,
        top: 10,
        left: 0,
        width: 42,
        height: 42,
        backgroundColor: Colors.off_white,
        zIndex: 9
    },
    modalCloseIcon: {
        color: Colors.grey_green,
        fontSize: 24
    },
    filtersListHolder: {
        flex: 0,
        backgroundColor: Colors.off_white
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 46,
        paddingHorizontal: 8,
        backgroundColor: Colors.off_white,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grey_green,
    },
    optionIcon: {
        color: Colors.black,
        fontSize: 34,
        paddingHorizontal: 10,
    },
    optionText: {
        color: Colors.black,
        fontSize: 22,
    },
});