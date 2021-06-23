import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Api from '../../utils/Api';
import { Avatar, Button, Card, Title, Paragraph, Subheading, Caption, TouchableRipple } from 'react-native-paper';
import Colors from '../../utils/Colors';
import moment from 'moment';


export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: null
        };
    }

    render() {
        const { route } = this.props
        const { title, description, image, source, category, published_at, author } = route.params
        console.log("Article -> render -> route.params", route.params)
        return (
            <View style={styles.cardContainer}>
                <ScrollView style={styles.container}>
                    <Card.Content>
                        <Title style={styles.title} >{title}</Title>
                        <Caption tyle={styles.sourceText}>{source}</Caption>
                        <Caption tyle={styles.sourceText}>{category}</Caption>
                        {author ? <Caption>{author}</Caption> : <React.Fragment />}
                        <Caption >{moment(published_at).format("DD.MM.YYYY")}</Caption>
                        {image ? <Card.Cover source={{ uri: image }} style={styles.image} /> : <React.Fragment />}
                        {description ? <Subheading>{description}</Subheading> : <React.Fragment />}

                    </Card.Content>
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </ScrollView>
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