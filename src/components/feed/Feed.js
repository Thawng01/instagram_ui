import React from "react";
import styled from "styled-components";
import Story from "../story/Story";
import { device } from "../../breakpoints";
import Post from "./Post";
import ErrorBoundary from "../errors/ErrorBoundary";

const Feed = () => {
    return (
        <Container>
            <ErrorBoundary>
                <Story />
            </ErrorBoundary>
            <ErrorBoundary>
                <Post />
            </ErrorBoundary>
        </Container>
    );
};

export default Feed;

const Container = styled.div`
    width: 100%;

    @media ${device.laptop} {
        width: 65%;
    }
`;
