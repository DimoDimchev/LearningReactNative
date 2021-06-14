import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

// importing card design for each review
import Card from '../shared/card';

// Home screen
export default function Home({ navigation }) {
    // function that navigates to the review details screen
    // const pressHandler = () => {
    //     navigation.navigate('ReviewDetails');
    // };

    // add data to be used in the app
    const [reviews, setReviews] = useState([
        { title: 'Hobbit: An unexpected journey', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Hobbit: The desolation of Smaug', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Hobbit: The battle of the 5 armies', rating: 5, body: 'lorem ipsum', key: '3' },
    ]);

    return (
        <View style={globalStyles.container}>
            {/* <Button title='Review details' onPress={pressHandler}/> */}
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            <StatusBar style="auto" />
        </View>
    );
}