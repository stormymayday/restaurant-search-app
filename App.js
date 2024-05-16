// Importing React Navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

// Creating a Navigator object
const navigator = createStackNavigator(
    {
        Search: SearchScreen,
        ResultsShow: ResultsShowScreen,
    },
    {
        initialRouteName: "Search",
        defaultNavigationOptions: {
            title: "Mix Master",
        },
    }
);

export default createAppContainer(navigator);
