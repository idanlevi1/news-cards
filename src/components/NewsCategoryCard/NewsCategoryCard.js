import React, { Component } from 'react'
import { StyleSheet, View, Image } from "react-native";
import { Card, Title, TouchableRipple } from 'react-native-paper';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';

export default class NewsCategoryCard extends Component {


    render() {
        const { category, image, navigation } = this.props
        return (
            <TouchableRipple
                onPress={() => navigation.navigate('NewsByCategory', { category })}
                rippleColor={Colors.black_opacity}
            >
                <Card>
                    <Card.Content style={styles.cardContent}>
                        <View style={styles.cardView}>
                            <Image
                                resizeMode={'cover'}
                                size={45}
                                style={styles.avatar}
                                source={{ uri: image || 'https://cdn4.iconfinder.com/data/icons/basics-set-2/100/Question-512.png' }}
                            />
                            <Title style={styles.text}>{category}</Title>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableRipple>
        )
    }
}

const styles = StyleSheet.create({
    cardContent: {
        borderBottomWidth: .5,
        borderBottomColor: Colors.grey_green,
    },
    cardView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 35,
        marginHorizontal: 10,
        width: 56,
        height: 56,
    },
    text: {
        color: Colors.black,
        fontSize: 20,
        paddingLeft: 5,
        fontFamily: Fonts.KBWriter
    }
});