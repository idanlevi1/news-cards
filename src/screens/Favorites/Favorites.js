import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import Colors from '../../utils/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllFavorites } from '../../store/newsStore/newsStore.actions';
import { favoritesSelector } from '../../store/newsStore/newsStore.selectors';
import { NewsCardList, NoResults } from '../../components';


const Favorites = (props) => {
    console.log("Favorites -> props", props)
    const dispatch = useDispatch();
    const favorites = useSelector(favoritesSelector);
    console.log("Favorites -> favorites", favorites)

    return (
        <>
            <View style={styles.toolBarLine}>
                <View style={styles.toolBarTextContainer} >
                    <Text style={styles.toolBarText}>{`You saved ${favorites.length} articles`}</Text>
                </View>
                <TouchableOpacity style={[styles.toolBarButton, !favorites.length && { backgroundColor: Colors.black_opacity }]} onPress={() => dispatch(removeAllFavorites())} disabled={!favorites.length}>
                    <Text style={styles.toolBarText}>{`🗑 Delete All`}</Text>
                </TouchableOpacity>
            </View>
            {favorites.length > 0 ?
                <NewsCardList news={favorites} navigation={props.navigation} />
                :
                <NoResults text={'You have no favorite news'} fontSize={26} color={Colors.dark_pink}>
                    <TouchableOpacity style={styles.navigateButton} onPress={() => props.navigation.navigate('Categories')} >
                        <Text style={styles.navigateButtonText}>{'Go to Select Favorite News'}</Text>
                    </TouchableOpacity>
                </NoResults>
            }
        </>
    )
};

const styles = StyleSheet.create({
    toolBarLine: {
        backgroundColor: Colors.dark_pink,
        paddingTop: 10,
        paddingBottom: 8,
        borderBottomWidth: .3,
        borderBottomColor: Colors.grey_green,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    toolBarButton: {
        flex: 0.42,
        borderColor: Colors.black_opacity,
        backgroundColor: Colors.off_white,
        borderWidth: 1,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderRadius: 4,
        paddingVertical: 5,
    },
    toolBarTextContainer: {
        flex: 0.42,
        paddingVertical: 5,
    },
    toolBarText: {
        fontSize: 18,
        textAlign: 'center'
    },
    navigateButton: {
        marginTop: 20,
        alignSelf: 'center',
        width: '50%',
        borderColor: Colors.black_opacity,
        backgroundColor: Colors.dark_pink,
        borderWidth: 1,
        borderBottomWidth: 4,
        borderRightWidth: 3,
        borderRadius: 4,
        padding: 7,
    },
    navigateButtonText: {
        fontSize: 20,
        textAlign: 'center',
        color: Colors.white
    },
});

export default Favorites