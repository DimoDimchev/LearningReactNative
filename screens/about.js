import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

// About screen
export default function About() {
  
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About screen</Text>
        </View>
    );
  }