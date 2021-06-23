import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View } from "react-native";
import Api from '../../utils/Api';
import { Loader, NewsCard, NoResults } from '../../components';
import { LANGUAGES } from '../../utils/Enums';
import Colors from '../../utils/Colors';


export default class NewsByCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: null
        };
    }


    async componentDidMount() {
        try {
            const { route } = this.props
            const { category } = route.params
            const news = await Api.GetNews({ categories: category, languages: LANGUAGES.ENGLISH })
            console.log("NewsCategories -> componentDidMount -> news", news)
            if (news.error) {
                throw new Error(news.error.message)
            }
            this.setState({ news: news.data })
        } catch (error) {
            console.log("NewsByCategory -> componentDidMount -> error", error)
            this.setState({ news: [] })
        }
    }

    renderNewsCardItem = ({ item, index }) => (<NewsCard {...item} {...this.props} />)

    render() {
        const { news } = this.state
        return (
            <>
                {news ? news.length ?
                    <FlatList
                        style={styles.cardsContainer}
                        data={news}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.renderNewsCardItem} />
                    :
                    <NoResults />
                    : <Loader color={'#FFF'} />
                }
            </>
        )
    }
}

const styles = StyleSheet.create({
    cardsContainer: {
        backgroundColor: Colors.off_white,
        paddingTop: 16,
    },
});