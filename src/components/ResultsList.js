import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultsList = ({ title, results }) => {
    // console.log(results);

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={results}
                renderItem={(element) => {
                    const { item } = element;

                    // console.log(`Item ${item.idDrink}`);

                    return <Text>{item.strDrink}</Text>;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default ResultsList;
