import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';

// creating a review schema for the form using Yup in order to validate it
const ReviewSchema = yup.object({
    title: yup
        .string()
        .required()
        .min(4),
    body: yup
        .string()
        .required()
        .min(8),
    rating: yup
        .string()
        .required()
        .test('is-num-1-5', 'Rating must be a number from 1 to 5!', (value) => {
            return parseInt(value) < 6 && parseInt(value) > 0
        }),
});

// create the form for adding reviews
export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                    rating: '',
                }}
                onSubmit={(values, actions) => {
                    actions.resetForm;
                    addReview(values);
                }}
                validationSchema={ReviewSchema}
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Movie title'
                            placeholderTextColor='#666562'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.error}>{props.touched.title && props.errors.title}</Text>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review body'
                            placeholderTextColor='#666562'
                            multiline
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.error}>{props.touched.body && props.errors.body}</Text>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Movie rating(1-5)'
                            placeholderTextColor='#666562'
                            keyboardType='numeric'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.error}>{props.touched.rating && props.errors.rating}</Text>
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
