import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Home screen
export default function Home() {
  
    return (
        <View style={styles.container}>
            <Text>Home screen</Text>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
  });