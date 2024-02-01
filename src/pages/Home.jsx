import React, { useState } from 'react'
import useFetchedData from "../Api/api"
import Card from "../components/Card/Card";

const Home = () => {

    const [loading, setLoading] = useState(false);
    const fetchedData = useFetchedData(loading);


    if (fetchedData && fetchedData.length > 0) {
        return (
            <>
                <ul className="grid lg:grid-cols-3 lg:gap-3 md:grid-cols-2 md:gap-2">
                    {
                        fetchedData.map((singleData) => (
                            <li key={singleData.show.id}>
                                <Card data={singleData} />
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    } else {
        () => setLoading(true)
    }
}

export default Home