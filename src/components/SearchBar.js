import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onSearchTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                placeholderTextColor="#CCCCCC"
                style={styles.inputStyle}
                value={searchTerm}
                onChangeText={onSearchTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: "#a1a1a1",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginBottom: 10,
        flexDirection: "row",
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
});

export default SearchBar;
