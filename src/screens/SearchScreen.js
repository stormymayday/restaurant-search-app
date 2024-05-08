import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (search) => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: search,
                    location: "san jose",
                },
            });
            setResults(response.data.businesses);
            setErrorMessage("");
        } catch (err) {
            console.log(err);
            setErrorMessage("Something went wrong");
        }
    };

    // Calling searchApi once when component is first rendered
    useEffect(() => {
        searchApi("pasta");
    }, []);

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
