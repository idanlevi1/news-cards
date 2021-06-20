import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text } from "react-native";

export default class Header extends Component {

    render() {
        const { imgUrl, title = '' } = this.props
        const image = { uri: imgUrl || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" };
        return (
            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.text}>{title}</Text>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        height: 200
    },
    text: {
        color: "white",
        fontSize: 52,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    }
});