import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setCurrencyInfo] = useState({});

    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then(response => response.json())
            .then(res => {
                setCurrencyInfo(res.rates);
                console.log(res.rates);
            })
            .catch(error => console.error("Error fetching currency data:", error));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
