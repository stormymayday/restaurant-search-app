import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
    return (
        <View style={styles.container}>
            {results.length > 0 ? (
                <>
                    <Text style={styles.title}>{title}</Text>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={results}
                        keyExtractor={(result) => {
                            return result.idDrink;
                        }}
                        renderItem={({ item }) => {
                            return <ResultsDetail result={item} />;
                        }}
                    />
                </>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5,
    },
});

export default ResultsList;
