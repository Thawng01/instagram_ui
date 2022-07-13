import { Navigate } from "react-router-dom";

const RequiredRoute = ({ children }) => {
    const auth = localStorage.getItem("x-auth-token");
    return <>{auth === null ? <Navigate to="/login" /> : children}</>;
};

export default RequiredRoute;
