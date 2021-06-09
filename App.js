import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import Header from './components/header'
import ToDoItem from './components/todoitem'

// ToDo App
export default function App() {
  const [todos, setTodos] = useState([
    {text: 'finish this tutorial', key: '1'},
    {text: 'make the I app I want to do', key: '2'},
    {text: 'find a job', key: '3'},
    {text: 'get money', key: '4'},
  ]);

  const pressHandler = (key) => {
    setTodos((previousTodos) => {
      return previousTodos.filter(todo => todo.key != key)
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/* form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <ToDoItem item={item} pressHandler={pressHandler}/>
            )}
          />
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
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
