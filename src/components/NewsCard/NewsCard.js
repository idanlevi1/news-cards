import React from 'react'
import { StyleSheet, View, Image } from "react-native";
import { Card, Headline, Caption, TouchableRipple } from 'react-native-paper';
import moment from 'moment';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import { FavoriteIcon } from '..';

const noImageAvailable = 'https://www.bengi.nl/wp-content/uploads/2014/10/no-image-available1.png'

const NewsCard = (props) => {
    const { article, navigation } = props
    const { title, image, source, published_at, } = props.article

    return (
        <Card style={styles.cardContainer}>
            <TouchableRipple
                onPress={() => navigation.navigate('Article', { title, ...props })}
                rippleColor={Colors.black_opacity}
            >
                <>
                    <Image transition={false} opacity={0.85} source={{ uri: image || noImageAvailable, cache: "force-cache" }} style={styles.image} />
                    <FavoriteIcon article={article} />
                    <Card.Content>
                        <Headline style={styles.title} numberOfLines={3}>{title}</Headline>
                        <View style={styles.sourceAndDate}>
                            <Caption >{moment(published_at).format("DD.MM.YYYY")}</Caption>
                            <Caption numberOfLines={1} style={styles.sourceText}>{source}</Caption>
                        </View>
                    </Card.Content>
                </>
            </TouchableRipple>
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
        fontSize: 18,
        lineHeight: 22,
        paddingTop: 8,
        fontWeight: '500',
        paddingBottom: 3,
        width: '90%',
        fontFamily: Fonts.OptimusBold
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
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
});

export default NewsCard