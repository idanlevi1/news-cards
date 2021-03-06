import React from 'react'
import { TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { addNewsToFavorites, removeNewsFromFavorites } from '../../store/newsStore/newsStore.actions';
import { favoritesSelector } from '../../store/newsStore/newsStore.selectors';
import Colors from '../../utils/Colors';
import { loginModalVisible } from '../../store/userStore/userStore.actions';
import { isUserConnectedSelector } from '../../store/userStore/userStore.selectors';

const FavoriteIcon = (props) => {
    const { article, style } = props
    const { title } = props.article
    const dispatch = useDispatch();
    const isUserConnected = useSelector(isUserConnectedSelector);
    const favorites = useSelector(favoritesSelector);
    const isInFavorites = isUserConnected && favorites.findIndex(f => f.title === title) !== -1

    const onClickFavoriteIcon = () => {
        if (isUserConnected) {
            dispatch(!isInFavorites ? addNewsToFavorites(article) : removeNewsFromFavorites(title))
        } else {
            dispatch(loginModalVisible(true))
        }
    }
    return (
        <>
            <TouchableOpacity
                style={style || styles.favoriteIcon}
                onPress={onClickFavoriteIcon}>
                <MaterialCommunityIcons name="heart" color={isInFavorites ? Colors.dark_pink : Colors.dark_grey} size={34} />
            </TouchableOpacity>
        </>
    )
};

const styles = StyleSheet.create({
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

export default FavoriteIcon