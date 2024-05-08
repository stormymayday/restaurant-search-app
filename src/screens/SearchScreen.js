import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    return (
        <View>
            <Text>Search Screen</Text>
            <SearchBar
                searchTerm={searchTerm}
                // onSearchTermChange={(newSearchTerm) => {
                //     setSearchTerm(newSearchTerm);
                // }}
                onSearchTermChange={setSearchTerm}
                onTermSubmit={() => {
                    searchApi(searchTerm);
                }}
                // onTermSubmit={searchApi}
            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <Text>We have found {results.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
