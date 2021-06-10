import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ToDoItem({ item, pressHandler }) {
    return (

        <View style={styles.item}>
            <Text style={styles.text}>{item.text}</Text>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <MaterialIcons
                    name='delete'
                    size={18}
                    color='#333333'
                />
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbbbbb',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    text: {
        marginRight: 30,
    },
});
