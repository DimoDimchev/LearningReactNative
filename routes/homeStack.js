import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from '../screens/reviewDetails'

// adding screens to the stack navigator to be rendered afterwards
const screens = {
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    }
};

// creating the stack navigator, passing the screens to it
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
