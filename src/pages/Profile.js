import React from "react";
import styled from "styled-components";

import Footer from "../components/commons/Footer";
import PostList from "../components/profile/PostList";
import { device } from "../breakpoints";
import ProfileHeader from "../components/profile/ProfileHeader";
import ErrorBoundary from "../components/errors/ErrorBoundary";

const Profile = () => {
    return (
        <Container>
            <ErrorBoundary>
                <ProfileHeader />
            </ErrorBoundary>

            <ErrorBoundary>
                <PostList />
            </ErrorBoundary>

            <ErrorBoundary>
                <Footer />
            </ErrorBoundary>
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
