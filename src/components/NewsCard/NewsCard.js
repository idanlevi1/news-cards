import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Card, Title, TouchableRipple, Avatar } from 'react-native-paper';

export default class NewsCard extends Component {


    render() {
        const { title, image } = this.props
        return (
            <TouchableRipple
                onPress={() => console.log('Pressed')}
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
                            <Title>{title}</Title>
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