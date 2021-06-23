import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';
import { Headline } from 'react-native-paper';

function NoResults({ text = 'No Results :(' }) {
    return (
        <View style={styles.noResultsContainer}>
            <Headline style={styles.noResults}>{text}</Headline>
        </View>
    )
}


const styles = StyleSheet.create({
    noResultsContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: '66%',
    },
    noResults: {
        color: Colors.purple,
        fontSize: 32,
        textAlign: 'center',
    }
});

export default NoResults;

