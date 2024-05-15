import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
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
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate("ResultsShow");
                                    }}
                                >
                                    <ResultsDetail result={item} />
                                </TouchableOpacity>
                            );
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
