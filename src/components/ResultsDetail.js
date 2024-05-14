import { View, Text, Image, StyleSheet } from "react-native";

const ResultsDetail = (props) => {
    const { result } = props;
    const { strDrink, strDrinkThumb, strGlass } = result;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: strDrinkThumb }} />
            <Text style={styles.name}>{strDrink}</Text>
            <Text>{strGlass}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5,
    },
    name: {
        fontWeight: "bold",
    },
});

export default ResultsDetail;
