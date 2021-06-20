import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Card, Title, TouchableRipple, Avatar } from 'react-native-paper';

export default class NewsByCategory extends Component {


    render() {
        const { route, navigation } = this.props
        const {category} = route.params
        return (
            <TouchableRipple
                onPress={() => console.log('Pressed')}
                rippleColor="rgba(0, 0, 0, .32)"
            >
               <Text>{category}</Text>
            </TouchableRipple>
        )
    }
}

const styles = StyleSheet.create({
    cardView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        marginHorizontal: 10,
    },
});