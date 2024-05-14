import { View, Text, Image, StyleSheet } from "react-native";

const ResultsDetail = (props) => {
    const { result } = props;
    const { strDrink } = result;
    return (
        <View>
            <Text>{strDrink}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ResultsDetail;
