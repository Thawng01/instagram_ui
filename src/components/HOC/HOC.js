import React, { useEffect, useState } from "react";

const WithSubscription = (WrapConponent, fetchData, id) => {
    const NewComponent = () => {
        const [data, setData] = useState();
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(false);

        useEffect(() => {
            const getData = async () => {
                setLoading(true);
                try {
                    const result = await fetchData(id);
                    setData(result.data);
                    setLoading(false);
                } catch (error) {
                    setError(error.response.data);
                    setLoading(false);
                }
            };

            getData();
        }, [id]);

        return <WrapConponent loading={loading} data={data} error={error} />;
    };

    return NewComponent;
};

export default WithSubscription;
