import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';

// importing card design for each review
import Card from '../shared/card';

// importing form for adding reviews
import ReviewForm from './reviewForm';

// Home screen
export default function Home({ navigation }) {
    // function that navigates to the review details screen
    // const pressHandler = () => {
    //     navigation.navigate('ReviewDetails');
    // };

    // add data to be used in the app
    const [reviews, setReviews] = useState([
        { title: 'Hobbit: An unexpected journey', rating: 5, body: 'Bilbo Baggins, a hobbit, is persuaded into accompanying a wizard and a group of dwarves on a journey to reclaim the city of Erebor and all its riches from the dragon Smaug.', key: '1' },
        { title: 'Hobbit: The desolation of Smaug', rating: 4, body: 'Bilbo Baggins, a hobbit, and his companions face great dangers on their journey to Laketown. Soon, they reach the Lonely Mountain, where Bilbo comes face-to-face with the fearsome dragon Smaug.', key: '2' },
        { title: 'Hobbit: The battle of the 5 armies', rating: 5, body: 'Bilbo fights against a number of enemies to save the life of his Dwarf friends and protects the Lonely Mountain after a conflict arises.', key: '3' },
        { title: 'Lord Of The Rings: The fellowship of the ring', rating: 2, body: 'A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.', key: '4' },
        { title: 'Lord Of The Rings: The two towers', rating: 1, body: 'Frodo and Sam arrive in Mordor with the help of Gollum. A number of new allies join their former companions to defend Isengard as Saruman launches an assault from his domain.', key: '5' },
        { title: 'Lord Of The Rings: The return of the king', rating: 3, body: 'The former Fellowship members prepare for the final battle. While Frodo and Sam approach Mount Doom to destroy the One Ring, they follow Gollum, unaware of the path he is leading them to.', key: '6' },
    ]);

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

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name='close'
                        size={24}
                        style={{
                            ...styles.modalToggle, ...styles.modalClose
                        }}
                        onPress={toggleModal}
                    />
                    <ReviewForm/>
                </View>
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