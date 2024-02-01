import { useEffect, useState } from "react";


function useFetchedData(loading) {

    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        async function fetching() {
            await fetch(`https://api.tvmaze.com/search/shows?q=all`)
                .then((res) => res.json())
                .then(res => setFetchedData(res))
        }
        fetching();
    }, [loading])

    return fetchedData;
}


export default useFetchedData;