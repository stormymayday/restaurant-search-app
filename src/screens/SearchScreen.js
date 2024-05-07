import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <View>
            <SearchBar
                searchTerm={searchTerm}
                onSearchTermChange={(newSearchTerm) => {
                    setSearchTerm(newSearchTerm);
                }}
                onTermSubmit={() => {
                    console.log("term was submitted");
                }}
            />
            <Text>Search Screen</Text>
            <Text>{searchTerm}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
