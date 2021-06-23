import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, Headline, Caption, TouchableRipple } from 'react-native-paper';
import Colors from '../../utils/Colors';
import moment from 'moment';

const noImageAvailable = 'https://www.bengi.nl/wp-content/uploads/2014/10/no-image-available1.png'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const NewsCard = (props) => {
    const { title, description, image, source, published_at, navigation } = props
    return (
        <Card style={styles.cardContainer}>
            {/* <Card.Title title={title} subtitle="Card Subtitle" left={LeftContent} /> */}
            <TouchableRipple
                onPress={() => navigation.navigate('Article', { title, ...props })}
                rippleColor={Colors.black_opacity}
            >
                <>
                    <Card.Content>
                        <Headline style={styles.title} numberOfLines={2}>{title}</Headline>
                        {description ? <Paragraph numberOfLines={3}>{description}</Paragraph> : <React.Fragment />}
                        <View style={styles.sourceAndDate}>
                            <Caption >{moment(published_at).format("DD.MM.YYYY")}</Caption>
                            <Caption numberOfLines={1} style={styles.sourceText}>{source}</Caption>
                        </View>
                    </Card.Content>
                    <Card.Cover source={{ uri: image || noImageAvailable }} style={styles.image} />
                </>
            </TouchableRipple>
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
    )
};

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
        paddingTop: 8,
        paddingBottom: 3
    },
    sourceAndDate: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingVertical: 4,
    },
    sourceText: {
        width: '50%'
    },
    image: {
        height: 150,
    },
});

export default NewsCard