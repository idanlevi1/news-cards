import React from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { NewsCategoryCard, Login } from '../../components';
import { NewsCategoriesData } from '../../data';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';
import { useDispatch, useSelector } from 'react-redux';
import { isUserConnectedSelector } from '../../store/userStore/userStore.selectors';
import { loginModalVisible } from '../../store/userStore/userStore.actions';


const Categories = (props) => {
    console.log("Categories -> props", props)
    const dispatch = useDispatch();
    const isUserConnected = useSelector(isUserConnectedSelector);
    console.log("Categories -> isUserConnected", isUserConnected)
    const onNavigateToFavorites = () => {
        if (isUserConnected) {
            props.navigation.navigate('Favorites')
        } else {
            dispatch(loginModalVisible(true))
        }
    }

    const renderCategoryItem = ({ item, index }) => (<NewsCategoryCard {...item} {...props} />)

    return (
        <>
            <View style={styles.toolBarLine}>
                <TouchableOpacity style={styles.toolBarButton} onPress={onNavigateToFavorites}>
                    <Text style={styles.toolBarText}>{`Your favorites list ❤️`}{isUserConnected}</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={NewsCategoriesData}
                keyExtractor={(item, index) => item.category}
                renderItem={renderCategoryItem} />

            <Login message={'To save an article to favorites you need to login'} />

        </>
    )
}

const styles = StyleSheet.create({
    toolBarLine: {
        backgroundColor: Colors.dark_pink,
        paddingTop: 10,
        paddingBottom: 8,
        borderBottomWidth: .3,
        borderBottomColor: Colors.grey_green,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    toolBarButton: {
        borderColor: Colors.black_opacity,
        backgroundColor: Colors.off_white,
        borderWidth: 1,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderRadius: 4,
        padding: 5,
    },
    toolBarText: {
        fontSize: 16,
        fontFamily: Fonts.KBWriterThin,
        textAlign: 'center'
    },
});

export default Categories