import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    return (
        <View>
            <Text>Search Screen</Text>
            <SearchBar
                searchTerm={searchTerm}
                onSearchTermChange={setSearchTerm}
                onTermSubmit={() => {
                    searchApi(searchTerm);
                }}
            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <Text>We have found {results.length} results</Text>

            <ResultsList title="Alcoholic" results={results} />
            <ResultsList title="Non alcoholic" results={results} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
