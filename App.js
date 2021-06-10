import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import Header from './components/header'
import ToDoItem from './components/todoitem'
import AddTodo from './components/addTodo'
import Home from './screens/home'

// ToDo App
// export default function App() {
//   const [todos, setTodos] = useState([
//     { text: 'finish this tutorial', key: '1' },
//     { text: 'make the I app I want to do', key: '2' },
//     { text: 'find a job', key: '3' },
//     { text: 'get money', key: '4' },
//   ]);

//   const pressHandler = (key) => {
//     setTodos((previousTodos) => {
//       return previousTodos.filter(todo => todo.key != key)
//     })
//   }

//   const submitHandler = (text) => {
//     if (text.length > 3) {
//       setTodos((previousTodos) => {
//         return [
//           { text: text, key: Math.random().toString() },
//           ...previousTodos
//         ]
//       });
//     } else {
//       Alert.alert('Oops', 'Todos must be over 3 characters long!', [
//         { text: 'Okay', onPress: () => console.log('alert is closed') }
//       ])
//     }
//   }

//   return (
//     <TouchableWithoutFeedback onPress={() => {
//       Keyboard.dismiss()
//     }}>
//       <View style={styles.container}>
//         <Header />
//         <View style={styles.content}>
//           <AddTodo submitHandler={submitHandler} />
//           <View style={styles.list}>
//             <FlatList
//               data={todos}
//               renderItem={({ item }) => (
//                 <ToDoItem item={item} pressHandler={pressHandler} />
//               )}
//             />
//           </View>
//         </View>
//         <StatusBar style="auto" />
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   content: {
//     padding: 40,
//     flex: 1,
//   },
//   list: {
//     marginTop: 20,
//     flex: 1,
//   },
// });


// Reviews app
export default function App() {
  
  return (
    <Home/>
  );
}

