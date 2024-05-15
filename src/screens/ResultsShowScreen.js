import { View, Text, StyleSheet } from "react-native";

const ResultsShowScreen = (props) => {
    const { navigation } = props;
    const id = navigation.getParam("id");
    return (
        <View>
            <Text>Results Show Screen</Text>
            <Text>ID: {id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
