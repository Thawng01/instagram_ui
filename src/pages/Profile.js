import React from "react";
import styled from "styled-components";
import Footer from "../components/commons/Footer";
import Header from "../components/profile/Header";
import PostList from "../components/profile/PostList";
import { device } from "../breakpoints";

const Profile = () => {
    return (
        <Container>
            <Header />
            <PostList />
            <Footer />
        </Container>
    );
};

export default Profile;

const Container = styled.div`
    margin: 60px auto auto auto;
    width: 100%;

    @media ${device.tabletL} {
        width: 75%;
    }
`;
