import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const NewsCard = ({title,description}) => (
    <Card>
        {/* <Card.Title title={title} subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
            <Title>{title}</Title>
            <Paragraph>{description}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
        </Card.Actions>
    </Card>
);

const styles = StyleSheet.create({
    cardView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        marginHorizontal: 10,
    },
});

export default NewsCard