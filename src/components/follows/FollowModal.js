import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import ModalBox from "../commons/ModalBox";
import ErrorBoundary from "../errors/ErrorBoundary";
import FollowHeader from "./FollowHeader";
import FollowTab from "./FollowTab";

const FollowModal = () => {
    const { pathname } = useLocation();

    return (
        <ModalBox>
            <FollowHeader
                title={
                    pathname.includes("following") ? "Following" : "Follower"
                }
            />
            {pathname.includes("following") && <FollowTab />}
            <ErrorBoundary>
                <Outlet />
            </ErrorBoundary>
        </ModalBox>
    );
};

export default FollowModal;
