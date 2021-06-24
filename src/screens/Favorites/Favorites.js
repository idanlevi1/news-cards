import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Api from '../../utils/Api';
import { Avatar, Button, Card, Title, Paragraph, Subheading, Caption, TouchableRipple } from 'react-native-paper';
import Colors from '../../utils/Colors';


export default class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: null
        };
    }

    render() {
        const { route } = this.props
        console.log("Favorites -> render -> route.params", route)
        return (
            <View style={styles.cardContainer}>
                <Text>FFF</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.off_white,
        padding: 12

    },
    cardContainer: {
        flex: 1,
    },
    title: {
        fontSize: 23,
        lineHeight: 26,
        paddingTop: 14,
        paddingBottom: 3
    },
    sourceAndDate: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingVertical: 4,
    },
    image: {
        marginVertical: 20,
    }
});