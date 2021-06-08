import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Dimo');
  const [person, setPerson] = useState({name: 'Gosho', age: 40});

  const clickHandler = () => {
    setName('Pesho');
    setPerson({name: 'Mario', age: 600});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello Hello</Text>
      </View>
      <View style={styles.body}>
        <Text>My name is {name}</Text>
        <Text>His name is {person.name} and is {person.age} years old.</Text>
        <View style={styles.buttonContainer}>
          <Button title='update name' onPress={clickHandler}/>
        </View>
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
  },
  buttonContainer: {
    backgroundColor: 'red',
    marginTop: 20,
  }
});
