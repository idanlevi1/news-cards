import React from 'react'
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Card, Headline, Caption, TouchableRipple } from 'react-native-paper';
import Colors from '../../utils/Colors';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const noImageAvailable = 'https://www.bengi.nl/wp-content/uploads/2014/10/no-image-available1.png'

const NewsCard = (props) => {
    const { title, description, image, source, published_at, navigation } = props
    return (
        <Card style={styles.cardContainer}>
            <TouchableRipple
                onPress={() => navigation.navigate('Article', { title, ...props })}
                rippleColor={Colors.black_opacity}
            >
                <>
                    <Card.Cover source={{ uri: image || noImageAvailable }} style={styles.image} />
                    <TouchableOpacity style={styles.favoriteIcon} onPress={() => { }}><MaterialCommunityIcons name="heart" color={'#ddd'} size={34} /></TouchableOpacity>
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
        width: '90%'
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
    favoriteIcon: {
        position: 'absolute',
        alignItems: 'center',
        top: 127,
        right: 5,
        borderRadius: 50,
        backgroundColor: 'rgba(0, 0, 0, .3)',
        zIndex: 9,
        padding: 7
    }
});

export default NewsCard