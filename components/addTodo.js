import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('')

    const changeHandler = (value) => {
        setText(value)
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Add your todo here...'
                onChangeText={changeHandler}
            />
            <Button
                onPress={() => submitHandler(text)}
                title='Add Todo'
                color='coral'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 2,
        borderBottomColor: '#dddddd'
    },
});
