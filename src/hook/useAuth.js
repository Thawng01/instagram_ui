import { useState } from "react";
import { login, register, confirmRegistion } from "../api/auth";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    // register new user or login existing user
    const authenticate = async (userInfo, signup) => {
        setLoading(true);

        try {
            let result;
            if (signup) {
                result = await register(userInfo);
                console.log(result);

                navigate("/register/birth_date", { state: result.data });
            } else {
                result = await login(userInfo);
                if (!result.data.confirmed) {
                    return navigate("/login/confirm", {
                        state: result.data,
                    });
                }
                redirect(result);
            }
        } catch (error) {
            console.log(error);
            setError(error?.response?.data);
        }
        setLoading(false);
    };

    // confirm email by entering 6 digit code sent to the email address provided by a user
    const confirm = async (id, code) => {
        setLoading(true);
        try {
            const result = await confirmRegistion(id, { code });
            redirect(result);
        } catch (error) {
            setError(error?.response?.data);
        }
        setLoading(false);
    };

    // redirect to home if authenticated successfully
    const redirect = (result) => {
        localStorage.setItem("x-auth-token", result.headers.x_auth_token);
        navigate("/", { replace: true });
    };

    return { authenticate, confirm, loading, error };
};

export default useAuth;
