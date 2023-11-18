import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setdata] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        )
            .then((resp) => resp.json())
            .then((resp) => setdata(resp[currency]))
    }, [currency])
    console.log(data)

    return data;
}
export default useCurrencyInfo;