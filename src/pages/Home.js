import React from "react";
import styled from "styled-components";
import Feed from "../components/feed/Feed";
import Side from "../components/side/Side";
import { device } from "../breakpoints";
import NavBottom from "../components/nav/NavBottom";
import Header from "../components/Header";

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <Feed />
                <Side />
            </Container>
            <NavBottom />
        </>
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
