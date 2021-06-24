import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';

function Loader({ text = 'Loading...', color = Colors.black, size = 'large' }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerLoader}>
                <ActivityIndicator color={color} size={size} />
                <Text style={styles.textLoader}>{text}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: .9
    },
    containerLoader: {
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
        fontSize: 20,
        color: Colors.black,
        marginTop: 20
    }
})

export default Loader;

