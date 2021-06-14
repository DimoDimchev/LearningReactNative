import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';

// importing card design for each review
import Card from '../shared/card';

// ReviewDetails screen
export default function ReviewDetails({ navigation }) {
    const rating = navigation.getParam('rating');

    return (
        <View style={globalStyles.container}>
            <Card>
                {/* get title, body and rating from item object, passed from navigation */}
                <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
                <Text style={globalStyles.paragraph}>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>Our rating:</Text>
                    <Image source={images.ratings[rating]}/>
                </View>
                <StatusBar style="auto" />
            </Card>
        </View>
    );
}

export const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eeeeee',
    }
  });