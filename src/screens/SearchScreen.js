import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByType = (type) => {
        // type === 'Alcoholic' || 'Non alcoholic' || 'Optional alcohol'
        return results.filter((result) => {
            return result.strAlcoholic === type;
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                searchTerm={searchTerm}
                onSearchTermChange={setSearchTerm}
                onTermSubmit={() => {
                    searchApi(searchTerm);
                }}
            />

            {errorMessage ? (
                <Text>{errorMessage}</Text>
            ) : (
                <>
                    <ScrollView>
                        <ResultsList
                            title="Alcoholic"
                            results={filterResultsByType("Alcoholic")}
                        />
                        <ResultsList
                            title="Optional alcohol"
                            results={filterResultsByType("Optional alcohol")}
                        />
                        <ResultsList
                            title="Non alcoholic"
                            results={filterResultsByType("Non alcoholic")}
                        />
                    </ScrollView>
                </>
            )}

            {/* <Text>We have found {results.length} results</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
