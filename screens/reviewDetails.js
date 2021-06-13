import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

// ReviewDetails screen
export default function ReviewDetails({ navigation }) {
  
    return (
        <View style={globalStyles.container}>
            {/* get title, body and rating from item object, passed from navigation */}
            <Text style={globalStyles.titleText}>{ navigation.getParam('title') }</Text>
            <Text style={globalStyles.titleText}>{ navigation.getParam('rating') }</Text>
            <Text style={globalStyles.paragraph}>{ navigation.getParam('body') }</Text>
            <StatusBar style="auto" />
        </View>
    );
  }