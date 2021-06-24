import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';
import { Headline } from 'react-native-paper';

function NoResults({ text, fontSize, children, color }) {
    return (
        <View style={styles.noResultsContainer}>
            <Headline style={[styles.noResults, { fontSize: fontSize || 32, color: color || Colors.grey_green }]}>{text || 'No Results 😔'}</Headline>
            {children}
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
        textAlign: 'center',
    }
});

export default NoResults;

