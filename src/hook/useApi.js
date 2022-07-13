import { useState } from "react";

const useApi = (apiFunc) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState();

    const request = async (...arg) => {
        setLoading(true);
        try {
            const result = await apiFunc(...arg);
            setData(result.data);
            setLoading(false);
            return result;
        } catch (error) {
            setError(error.response?.data);
            setLoading(false);
        }
    };

    if (error) setTimeout(() => setError(null), 3000);

    return { request, loading, error, data };
};

export default useApi;
