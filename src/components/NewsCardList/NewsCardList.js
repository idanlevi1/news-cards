import React from 'react'
import { FlatList, StyleSheet } from "react-native";
import { NewsCard } from '..';

const NewsCardList = (props) => {

    const renderNewsCardItem = ({ item, index }) => (<NewsCard article={item} {...props} />)

    return (
        <FlatList
            style={styles.cardsContainer}
            data={props.news}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderNewsCardItem} />
    )
};

const styles = StyleSheet.create({
    cardsContainer: {
        paddingTop: 16,
    }
});

export default NewsCardList