import { View, Text, StyleSheet, Image } from "react-native";
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
            setResult(response.data.drinks[0]);
        } catch (error) {
            console.error(`Oops there was an error :${error}`);
        }
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{result.strDrink}</Text>
            <Image
                style={styles.image}
                source={{ uri: result.strDrinkThumb }}
            />
            <View style={styles.detailsContainer}>
                <Text>
                    <Text style={{ fontWeight: "bold" }}>Name:</Text>{" "}
                    {result.strDrink}
                </Text>
                <Text>
                    <Text style={{ fontWeight: "bold" }}>Category:</Text>{" "}
                    {result.strCategory}
                </Text>
                <Text>
                    <Text style={{ fontWeight: "bold" }}>Info:</Text>{" "}
                    {result.strAlcoholic}
                </Text>
                <Text>
                    <Text style={{ fontWeight: "bold" }}>Glass:</Text>{" "}
                    {result.strGlass}
                </Text>
                <Text>
                    <Text style={{ fontWeight: "bold" }}>Ingredients:</Text>
                    {result.strIngredient1 ? ` ${result.strIngredient1}` : null}
                    {result.strIngredient2
                        ? `, ${result.strIngredient2}`
                        : null}
                    {result.strIngredient3
                        ? `, ${result.strIngredient3}`
                        : null}
                    {result.strIngredient4
                        ? `, ${result.strIngredient4}`
                        : null}
                    {result.strIngredient5
                        ? `, ${result.strIngredient5}`
                        : null}
                    {result.strIngredient6
                        ? `, ${result.strIngredient6}`
                        : null}
                </Text>
                <Text>
                    <Text style={{ fontWeight: "bold" }}>Instructions:</Text>{" "}
                    {result.strInstructions}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        gap: 35,
        marginHorizontal: 15,
        marginVertical: 20,
    },
    detailsContainer: {
        // alignItems: "center",
        gap: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    image: {
        height: 300,
        width: 300,
        borderRadius: 5,
    },
});

export default ResultsShowScreen;
