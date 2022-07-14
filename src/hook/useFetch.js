import { useState, useEffect } from "react";

function useFetch(fetchData, id, other) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDataFromDb = async () => {
            setLoading(true);
            let result;
            try {
                if (id) {
                    result = await fetchData(id, other);
                } else {
                    result = await fetchData();
                }
                setData(result.data);
                setLoading(false);
            } catch (error) {
                setError(error.response.data);
                setLoading(false);
            }
        };

        fetchDataFromDb();
    }, [id, fetchData, other]);

    if (error) setTimeout(() => setError(null), 3000);

    return { data, error, loading };
}

export default useFetch;
