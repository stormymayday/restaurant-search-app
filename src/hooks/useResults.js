import { useEffect, useState } from "react";
// import yelp from "../api/yelp";
import cocktaildb from "../api/cocktaildb";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (search) => {
        // YELP - START
        // try {
        //     const response = await yelp.get("/search", {
        //         params: {
        //             limit: 50,
        //             term: search,
        //             location: "san jose",
        //         },
        //     });
        //     setResults(response.data.businesses);
        //     setErrorMessage("");
        // } catch (err) {
        //     console.log(err);
        //     setErrorMessage("Something went wrong");
        // }
        // YELP - END

        // COCKTAIL DB - START
        try {
            const response = await cocktaildb.get("/search.php", {
                params: {
                    s: search,
                },
            });

            if (response.data.drinks) {
                setResults(response.data.drinks);
                setErrorMessage("");
            } else {
                setResults([]);
                setErrorMessage("No results");
            }
        } catch (err) {
            console.log(err);
            setErrorMessage("Something went wrong");
        }
        // COCKTAIL DB - END
    };

    // Calling searchApi once when component is first rendered
    useEffect(() => {
        searchApi("a");
    }, []);

    return [searchApi, results, errorMessage];
};
