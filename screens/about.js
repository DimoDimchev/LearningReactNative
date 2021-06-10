import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// About screen
export default function About() {
  
    return (
        <View style={styles.container}>
            <Text>About screen</Text>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
  });