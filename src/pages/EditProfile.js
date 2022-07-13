import React from "react";
import styled from "styled-components";

import Content from "../components/editprofile/Content";
import Side from "../components/editprofile/Side";
import Header from "../components/Header";
import useUser from "../hook/useUser";
import { device } from "../breakpoints";
import ErrorBoundary from "../components/errors/ErrorBoundary";

const EditProfile = () => {
    const { user } = useUser();

    return (
        <>
            <Header />

            <Container>
                <ErrorBoundary>
                    <Side />
                </ErrorBoundary>

                <ErrorBoundary>
                    <Content user={user} />
                </ErrorBoundary>
            </Container>
        </>
    );
};

export default EditProfile;

const Container = styled.div`
    width: 100%;
    background-color: #fff;
    border: 0.2px solid lightgray;
    margin: 90px auto 25px auto;
    border-radius: 4px;
    display: flex;

    @media ${device.tabletL} {
        width: 75%;
    }
`;
