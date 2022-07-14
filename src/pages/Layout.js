import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import NavBottom from "../components/nav/NavBottom";
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <NavBottom />
        </>
    );
};

export default Layout;
