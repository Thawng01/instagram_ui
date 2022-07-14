import React from "react";
import styled from "styled-components";

import Feed from "../components/feed/Feed";
import Side from "../components/side/Side";
import { device } from "../breakpoints";

const Home = () => {
    return (
        <Container>
            <Feed />
            <Side />
        </Container>
    );
};

export default Home;

const Container = styled.div`
    display: flex;
    width: 100%;
    margin: 60px auto 50px auto;
    position: relative;

    @media ${device.tablet} {
        width: 75%;
    }
`;
