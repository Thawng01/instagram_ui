import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Follow from "../follows/Follow";
import { device } from "../../breakpoints";
import Tab from "./Tab";

const PostList = () => {
    return (
        <Container>
            <FollowTab>
                <Follow />
            </FollowTab>
            <Tab />
            <Outlet />
        </Container>
    );
};

export default PostList;

const Container = styled.div`
    border-top: 0.5px solid lightgray;
    margin-bottom: 20px;

    .show-in-mobile {
        display: block;
        width: 100%;

        @media ${device.tabletL} {
            display: none;
        }
    }
`;

const FollowTab = styled.div`
    border-bottom: 0.5px solid lightgray;

    @media ${device.tabletL} {
        display: none;
    }
`;
