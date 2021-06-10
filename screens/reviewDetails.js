import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// ReviewDetails screen
export default function ReviewDetails() {
  
    return (
        <View style={styles.container}>
            <Text>ReviewDetails screen</Text>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
  });