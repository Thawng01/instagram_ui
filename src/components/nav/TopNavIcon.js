import React, { useState } from "react";
import styled from "styled-components";
import { RiSendPlaneFill, RiSendPlaneLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import {
    AiOutlineCompass,
    AiFillCompass,
    AiFillPlusSquare,
    AiOutlinePlusSquare,
} from "react-icons/ai";
import {
    IoHomeOutline,
    IoHome,
    IoHeartOutline,
    IoHeart,
} from "react-icons/io5";

import Tooltip from "../profile/Tooltip";
import ActivityTooltip from "../activity/ActivityTooltip";
import useUser from "../../hook/useUser";
import ErrorBoundary from "../errors/ErrorBoundary";

const TopNavIcon = ({ onNewPost }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [showActivity, setShowActivity] = useState(false);
    const [clicked, setClicked] = useState("home");

    const navigate = useNavigate();

    const { user } = useUser();

    const handleNavigation = (type) => {
        setClicked(type);
        switch (type) {
            case "home":
                return navigate("/");

            case "indox":
                return;

            case "plus":
                return onNewPost();

            case "compass":
                return navigate("/explore/");

            case "heart":
                return setShowActivity(!showActivity);

            case "profile":
                return setShowTooltip(!showTooltip);

            default:
                return navigate("/");
        }
    };

    return (
        <ErrorBoundary>
            <NavItemContainer>
                <div
                    className="home-container"
                    onClick={() => handleNavigation("home")}
                >
                    {clicked === "home" ? (
                        <IoHome id="nav-icon" />
                    ) : (
                        <IoHomeOutline id="nav-icon" />
                    )}
                </div>
                <div
                    className="send-container"
                    onClick={() => handleNavigation("indox")}
                >
                    {clicked === "indox" ? (
                        <RiSendPlaneFill id="nav-icon" />
                    ) : (
                        <RiSendPlaneLine id="nav-icon" />
                    )}
                </div>
                <div
                    className="plus-container"
                    onClick={() => handleNavigation("plus")}
                >
                    {clicked === "plus" ? (
                        <AiFillPlusSquare id="nav-icon" />
                    ) : (
                        <AiOutlinePlusSquare id="nav-icon" />
                    )}
                </div>
                <div
                    className="comp-container"
                    onClick={() => handleNavigation("compass")}
                >
                    {clicked === "compass" ? (
                        <AiFillCompass id="nav-icon" />
                    ) : (
                        <AiOutlineCompass id="nav-icon" />
                    )}
                </div>
                <div
                    className="heart-container"
                    onClick={() => handleNavigation("heart")}
                >
                    {clicked === "heart" ? (
                        <IoHeart id="nav-icon" />
                    ) : (
                        <IoHeartOutline id="nav-icon" />
                    )}
                    <ActivityTooltip
                        visible={showActivity}
                        onClose={() => setShowActivity(false)}
                    />
                </div>
                <div className="img-container">
                    <img
                        src={user?.profileImg}
                        id="account-img"
                        alt="account"
                        onClick={() => handleNavigation("profile")}
                    />
                    <Tooltip
                        visible={showTooltip}
                        onClose={() => setShowTooltip(false)}
                    />
                </div>
            </NavItemContainer>
        </ErrorBoundary>
    );
};

export default TopNavIcon;

const NavItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .home-container,
    .send-container,
    .comp-container,
    .img-container,
    .heart-container,
    .plus-container {
        display: flex;
        align-items: center;
    }

    #nav-icon {
        height: 25px;
        width: 25px;
        cursor: pointer;
    }

    .heart-container {
        position: relative;
    }

    .img-container {
        position: relative;
    }

    #account-img {
        height: 25px;
        width: 25px;
        border-radius: 50%;
    }
`;
