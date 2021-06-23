import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, Headline, Caption } from 'react-native-paper';
import Colors from '../../utils/Colors';
import moment from 'moment';

const noImageAvailable = 'https://www.bengi.nl/wp-content/uploads/2014/10/no-image-available1.png'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const NewsCard = ({ title, description, image, source, published_at }) => (
    <Card style={styles.cardContainer}>
        {/* <Card.Title title={title} subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
            <Headline style={styles.title} numberOfLines={2}>{title}</Headline>
            <Paragraph numberOfLines={3} >{description}</Paragraph>
            <View  style={styles.sourceAndDate}>
            <Caption>{moment(published_at).format("DD.MM.YYYY")}</Caption>
            <Caption>{source}</Caption>
            </View>
        </Card.Content>
        <Card.Cover source={{ uri: image || noImageAvailable }} style={styles.image} />
        <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
        </Card.Actions>
    </Card>
);

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: Colors.light_green,
        alignSelf: 'center',
        borderRadius: 8,
        marginBottom: 16,
        width: '90%'
    },
    title: {
        fontSize: 23,
        lineHeight: 26,
        paddingBottom: 3
    },
    sourceAndDate: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    image: {
        height: 150,
    },
});

export default NewsCard