import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

// ReviewDetails screen
export default function ReviewDetails() {
  
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>ReviewDetails screen</Text>
            <StatusBar style="auto" />
        </View>
    );
  }