import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import BirthDay from "../components/auth/BirthDay";
import Confirm from "../components/auth/Confirm";

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/login/confirm/" element={<Confirm />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/register/birth_date" element={<BirthDay />} />
            <Route path="/register/confirm/" element={<Confirm />} />
        </Routes>
    );
};

export default AuthRoutes;
