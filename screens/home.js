import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

// Home screen
export default function Home({ navigation }) {
    // function that navigates to the review details screen
    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home screen</Text>
            <Button title='Review details' onPress={pressHandler}/>
            <StatusBar style="auto" />
        </View>
    );
  }