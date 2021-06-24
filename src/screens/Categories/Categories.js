import React, { Component } from 'react'
import { FlatList } from "react-native";
import { NewsCategoryCard } from '../../components';
import { NewsCategoriesData } from '../../data';


export default class Categories extends Component {

    renderCategoryItem = ({ item, index }) => (<NewsCategoryCard {...item} {...this.props} />)

    render() {
        return (
            <FlatList
                data={NewsCategoriesData}
                keyExtractor={(item, index) => item.category}
                renderItem={this.renderCategoryItem} />
        )
    }
}
