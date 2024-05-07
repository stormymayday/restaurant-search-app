// Importing React Navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/screens/SearchScreen";

// Creating a Navigator object
const navigator = createStackNavigator(
    {
        Search: SearchScreen,
    },
    {
        initialRouteName: "Search",
        defaultNavigationOptions: {
            title: "Business Search",
        },
    }
);

export default createAppContainer(navigator);
