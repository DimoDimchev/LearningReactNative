import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

// create the form for adding reviews
export default function ReviewForm() {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                    rating: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Movie title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review body'
                            multiline
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Movie rating(1-5)'
                            keyboardType='numeric'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                        />
                        <Button
                            title='Submit'
                            color='maroon'
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
}
