import {StyleSheet} from 'react-native'

// stylesheet for all screens in the reviews app
export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
  });

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}