import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Dimo', id: '1'},
    {name: 'Peshi', id: '2'},
    {name: 'Goshu', id: '3'},
    {name: 'Moshu', id: '4'},
    {name: 'Toshu', id: '5'},
    {name: 'Vankata', id: '6'},
    {name: 'Petran', id: '8'},
    {name: 'Yoan', id: '9'},
    {name: 'Jeremy', id: '10'},
    {name: 'Johny', id: '11'},
  ])

  return (
    <View style={styles.container}>
      <FlatList 
        data={people}
        keyExtractor={(item) => (item.id)}
        numColumns={2}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />

      {/* <ScrollView>
        { people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        }) }
      </ScrollView> */}
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
    marginHorizontal: 10,
    padding:30,
    backgroundColor: 'yellow',
    fontSize: 24,
  }
});
