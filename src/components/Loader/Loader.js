import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';

function Loader({ text = 'Loading...', color = Colors.black, size = 'large' }) {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={color} size={size} />
            <Text style={styles.textLoader}>{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black_opacity,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    textLoader: {
        fontSize: 16,
        color: Colors.white,
        marginTop: 20
    }
})

export default Loader;

