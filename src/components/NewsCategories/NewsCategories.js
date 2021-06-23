import React, { Component } from 'react'
import { FlatList } from "react-native";
import { NewsCategoryCard } from '..';
import newsCategoriesListUS from '../../data/news_categories_us.json';


export default class NewsCategories extends Component {

    renderCategoryItem = ({ item, index }) => (<NewsCategoryCard {...item} {...this.props} />)

    render() {
        return (
            <FlatList
                data={newsCategoriesListUS}
                keyExtractor={(item, index) => item.category}
                renderItem={this.renderCategoryItem} />
        )
    }
}
