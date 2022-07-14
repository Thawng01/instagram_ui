import React from "react";
import { Navigate } from "react-router-dom";

function RequiredRoute({ children }) {
    const auth = localStorage.getItem("x-auth-token");

    return <>{auth === null ? <Navigate to="/login/" /> : children}</>;
}

export default RequiredRoute;
