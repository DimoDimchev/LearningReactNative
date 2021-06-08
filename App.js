import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Dimo', key: '1'},
    {name: 'Peshi', key: '2'},
    {name: 'Goshu', key: '3'},
    {name: 'Moshu', key: '4'},
    {name: 'Toshu', key: '5'},
    {name: 'Vankata', key: '6'},
    {name: 'Petran', key: '8'},
    {name: 'Yoan', key: '9'},
    {name: 'Jeremy', key: '10'},
    {name: 'Johny', key: '11'},
  ])

  return (
    <View style={styles.container}>
      <ScrollView>
        { people.map((item) => {
          return (
            <View style={styles.item} key={item.key}>
              <Text>{item.name}</Text>
            </View>
          )
        }) }
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding:30,
    backgroundColor: 'yellow',
    fontSize: 24,
  }
});
