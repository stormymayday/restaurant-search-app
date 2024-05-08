import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
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

    return [searchApi, results, errorMessage];
};
