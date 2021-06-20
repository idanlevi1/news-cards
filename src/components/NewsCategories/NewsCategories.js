import React, { Component } from 'react'
import { StyleSheet, FlatList } from "react-native";
import { NewsCard } from '..';
import newsCategoriesListUS from '../../data/news_categories_us.json';


export default class NewsCategories extends Component {

    renderCardItem = ({ item, index }) => (<NewsCard {...item} />)

    render() {
        const { imgUrl, title = '' } = this.props
        const image = { uri: imgUrl || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" };
        return (
            <FlatList
                data={newsCategoriesListUS}
                keyExtractor={(item, index) => item.title}
                renderItem={this.renderCardItem} />
        )
    }
}
