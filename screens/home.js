import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

// Home screen
export default function Home() {
  
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home screen</Text>
        </View>
    );
  }