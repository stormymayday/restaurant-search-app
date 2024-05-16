import { View, Text, StyleSheet } from "react-native";
import cocktaildb from "../api/cocktaildb";
import { useEffect, useState } from "react";

const ResultsShowScreen = (props) => {
    const { navigation } = props;
    const id = navigation.getParam("id");
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        try {
            const response = await cocktaildb.get(`/lookup.php?i=${id}`);
            // console.log(`Response ${JSON.stringify(response)}`);
            setResult(response.data);
        } catch (error) {
            console.error(`Oops there was an error :${error}`);
        }
    };

    useEffect(() => {
        getResult(id);
    }, []);

    return (
        <View>
            <Text>Results Show Screen</Text>
            <Text>ID: {id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
