import { useEffect, useState } from "react";
import useToken from "./useToken";
import { fetchUser } from "../api/user";

const useUser = () => {
    const [user, setUser] = useState("");
    const [error, setError] = useState("");

    const id = useToken();
    async function getUser() {
        try {
            const result = await fetchUser(id);
            setUser(result.data);
        } catch (error) {
            setError(error?.response?.data);
        }
    }

    useEffect(() => {
        if (id) {
            getUser();
        }
    }, [id]);

    return { user, error };
};

export default useUser;
