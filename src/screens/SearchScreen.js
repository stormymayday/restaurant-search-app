import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = (props) => {
    const { navigation } = props;

    const [searchTerm, setSearchTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByType = (type) => {
        // type === 'Alcoholic' || 'Non alcoholic' || 'Optional alcohol'
        return results.filter((result) => {
            return result.strAlcoholic === type;
        });
    };

    return (
        <>
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
                            navigation={navigation}
                        />
                        <ResultsList
                            title="Optional alcohol"
                            results={filterResultsByType("Optional alcohol")}
                            navigation={navigation}
                        />
                        <ResultsList
                            title="Non alcoholic"
                            results={filterResultsByType("Non alcoholic")}
                            navigation={navigation}
                        />
                    </ScrollView>
                </>
            )}

            {/* <Text>We have found {results.length} results</Text> */}
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
