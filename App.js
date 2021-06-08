import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Dimo');
  const [age, setAge] = useState(18);

  const clickHandler = () => {
    setPerson({name: 'Mario', age: 600});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello Hello</Text>
      </View>
      <View style={styles.body}>
        <Text>Enter name</Text>
        <TextInput
          style={styles.input}
          placeholder='e.g John Doe'
          onChangeText={(value) => setName(value)} 
        />

        <Text>Enter age</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='e.g 21'
          onChangeText={(value) => setAge(value)} 
        />
        <Text>His name is {name} and is {age} years old.</Text>
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
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
    width: 200,
  }
});
