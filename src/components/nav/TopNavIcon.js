import React, { useState } from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { FiSend, FiPlusSquare } from "react-icons/fi";
import { IoHomeOutline, IoHeartOutline } from "react-icons/io5";
import styled from "styled-components";
import Tooltip from "../profile/Tooltip";
import ActivityTooltip from "../activity/ActivityTooltip";

const TopNavIcon = ({ onNewPost }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [showActivity, setShowActivity] = useState(false);

    const toggleTooltip = () => setShowTooltip(!showTooltip);
    const toggleActivity = () => setShowActivity(!showActivity);

    return (
        <NavItemContainer>
            <div className="home-container">
                <IoHomeOutline className="nav-icon" />
            </div>
            <div className="send-container">
                <FiSend className="nav-icon" />
            </div>
            <div className="plus-container">
                <FiPlusSquare className="nav-icon" onClick={onNewPost} />
            </div>
            <div className="comp-container">
                <AiOutlineCompass className="nav-icon" />
            </div>
            <div className="heart-container">
                <IoHeartOutline className="nav-icon" onClick={toggleActivity} />
                <ActivityTooltip
                    visible={showActivity}
                    onClose={() => setShowActivity(false)}
                />
            </div>
            <div className="img-container">
                <img
                    src="/logo.png"
                    id="account-img"
                    alt="account"
                    onClick={toggleTooltip}
                />
                <Tooltip
                    visible={showTooltip}
                    onClose={() => setShowTooltip(false)}
                />
            </div>
        </NavItemContainer>
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

    .nav-icon {
        height: 23px;
        width: 23px;
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
