import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello Hello</Text>
      </View>
      <View style={styles.body}>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#141414',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#ffffff'
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  }
});
