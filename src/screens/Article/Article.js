import React from 'react'
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Title, Subheading, Caption } from 'react-native-paper';
import Colors from '../../utils/Colors';
import moment from 'moment';
import { FavoriteIcon, Login } from '../../components';
import { capitalizeFirstLetter } from '../../utils/Tools';
import Fonts from '../../utils/Fonts';


const Article = (props) => {
    const { route } = props
    const { article } = route.params
    console.log("Article -> article", article)
    const { title, description, image, source, category, published_at, author } = article
    return (
        <>
            <View style={styles.cardContainer}>
                <ScrollView style={styles.container}>
                    <Card.Content>
                        <View style={styles.titleLine}>
                            <Title style={styles.title} >{title}</Title>
                            <FavoriteIcon article={article} style={styles.favoriteIcon} />
                        </View>
                        <Caption style={styles.subtitles}>{source}</Caption>
                        <Caption style={styles.subtitles}>{`Category: ${capitalizeFirstLetter(category)}`}</Caption>
                        <View style={styles.sourceAndDate}>
                            <Caption style={styles.subtitles}>{moment(published_at).format("DD.MM.YYYY")}</Caption>
                            {author ? <Caption style={styles.subtitles}>{`Author: ${author}`}</Caption> : <React.Fragment />}
                        </View>
                        {image ? <Card.Cover source={{ uri: image }} style={styles.image} /> : <React.Fragment />}
                        {description ? <Subheading style={styles.description}>{description}</Subheading> : <React.Fragment />}
                    </Card.Content>
                </ScrollView>
            </View>
            <Login message={'To use Favorites you must log in first'} />
        </>
    )
}

export default Article

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        padding: 12
    },
    cardContainer: {
        flex: 1,
    },
    title: {
        fontSize: 23,
        lineHeight: 26,
        paddingTop: 14,
        paddingBottom: 8,
        fontFamily: Fonts.OptimusBold,
        width: '90%',
    },
    titleLine: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    sourceAndDate: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingVertical: 4,
    },
    image: {
        marginVertical: 20,
    },
    subtitles: {
        fontFamily: Fonts.Optimus,
        fontSize: 14
    },
    description: {
        fontFamily: Fonts.Optimus,
        fontSize: 20
    },
    favoriteIcon: {
        borderRadius: 50,
        backgroundColor: 'rgba(0, 0, 0, .3)',
        zIndex: 9,
        padding: 7,
        marginTop: 15
    }
});