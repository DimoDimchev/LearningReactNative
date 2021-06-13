import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from '../screens/reviewDetails'

// adding screens to the stack navigator to be rendered afterwards
const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'My favourite movies',
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Movie review details',
        }
    }
};

// creating the stack navigator, passing the screens to it
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: '#b9cf4e', height: 90},
        headerTintColor: '#000000',
    }
});

export default createAppContainer(HomeStack);
