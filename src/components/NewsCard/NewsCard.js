import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Card, Title, TouchableRipple, Avatar } from 'react-native-paper';

export default class NewsCard extends Component {


    render() {
        const { category, image, navigation } = this.props
        return (
            <TouchableRipple
                onPress={() => navigation.navigate('NewsByCategory', { category })}
                rippleColor="rgba(0, 0, 0, .32)"
            >
                <Card>
                    <Card.Content>
                        <View style={styles.cardView}>
                            <Avatar.Image
                                size={45}
                                style={styles.avatar}
                                source={{ uri: image || 'https://cdn4.iconfinder.com/data/icons/basics-set-2/100/Question-512.png' }}
                            />
                            <Title>{category}</Title>
                        </View>
                    </Card.Content>
                </Card>
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