import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [info, setInfo] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                info,
                setInfo,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
