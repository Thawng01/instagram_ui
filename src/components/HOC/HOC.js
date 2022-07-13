import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import useApi from "../../hook/useApi";

const WithSubscription = (WrapConponent, fetchData) => {
    const NewComponent = () => {
        const { state } = useLocation();

        const { loading, data, request } = useApi(fetchData);

        useEffect(() => {
            if (state) {
                request(state);
            }
        }, [state, request]);

        return <WrapConponent loading={loading} data={data} />;
    };

    return NewComponent;
};

export default WithSubscription;
