import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
    return (
        <View>
            {results.length > 0 ? (
                <>
                    <Text style={styles.title}>{title}</Text>
                    <FlatList
                        horizontal={true}
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
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default ResultsList;
