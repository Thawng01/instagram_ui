import { useEffect, useState } from "react";
import useToken from "./useToken";
import { fetchUser } from "../api/user";

const useUser = () => {
    const [user, setUser] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const id = useToken();

    // const fetchAuser = useCallback(async () => await getUser(), [getUser]);

    useEffect(() => {
        async function getUser() {
            setLoading(true);
            try {
                const result = await fetchUser(id);
                setUser(result.data);
                setLoading(false);
            } catch (error) {
                setError(error?.response?.data);
                setLoading(false);
            }
        }
        if (id) getUser();
    }, [id, setError, setLoading, setUser]);

    return { user, error, loading };
};

export default useUser;
