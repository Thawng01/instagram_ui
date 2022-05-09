import React from "react";
import styled from "styled-components";
import { device } from "../../breakpoints";

const Follow = () => {
    return (
        <Centered>
            <div className="container">
                <span className="number">0</span>
                <span>posts</span>
            </div>
            <div className="container">
                <span className="number">45</span>
                <span>Followers</span>
            </div>

            <div className="container">
                <span className="number">89</span>
                <span>Following</span>
            </div>
        </Centered>
    );
};

export default Follow;

const Centered = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
    height: 60px;
    margin-bottom: 7px;

    .number {
        font-weight: 700;
        margin-right: 5px;
        text-align: center;
    }

    .container {
        display: flex;
        flex-direction: column;

        @media ${device.tabletL} {
            flex-direction: row;
        }
    }

    @media ${device.tabletL} {
        justify-content: space-between;
    }
`;
