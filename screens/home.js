import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';

// importing card design for each review
import Card from '../shared/card';

// importing form for adding reviews
import ReviewForm from './reviewForm';

import firebase from 'firebase';

// Home screen
export default function Home({ navigation }) {
    // function that navigates to the review details screen
    // const pressHandler = () => {
    //     navigation.navigate('ReviewDetails');
    // };

    // set up base URI for Firebase
    const baseURI = "https://react-native-reviews-default-rtdb.europe-west1.firebasedatabase.app/";

    // variable to hold all the reviews received from the database
    let APIreviews = undefined;

    // function to get all the reviews from the Firebase database
    const getReviews = () => {
        fetch(baseURI + 'reviews.json')
            .then(response => response.json())
            .then(data => {
                APIreviews = Object.keys(data).map(key => {
                    return {key: key, title: data[key]["title"], rating: data[key]["rating"], body: data[key]["body"]} 
                });
                setReviews(APIreviews);
            })
    };

    // add data to be used in the app
    const [reviews, setReviews] = useState(getReviews);

    // state for opening and closing the modal
    const [modalOpen, setModalOpen] = useState(false);

    // function for toggling the modal
    const toggleModal = () => {
        if (modalOpen === true) {
            setModalOpen(false);
        } else {
            setModalOpen(true);
        }
    };

    // function for adding new reviews
    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        })
        setModalOpen(false);
    };

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            style={{
                                ...styles.modalToggle, ...styles.modalClose
                            }}
                            onPress={toggleModal}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>


            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={toggleModal}
            />

            {/* <Button title='Review details' onPress={pressHandler}/> */}
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            <StatusBar style="auto" />
        </View>
    );
}

export const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        padding: 10,
        alignSelf: 'center'

    },
    modalClose: {
        marginTop: 50,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
});