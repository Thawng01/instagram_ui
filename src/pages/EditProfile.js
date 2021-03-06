import React from "react";
import styled from "styled-components";

import Content from "../components/editprofile/Content";
import Side from "../components/editprofile/Side";
import useUser from "../hook/useUser";
import { device } from "../breakpoints";
import ErrorBoundary from "../components/errors/ErrorBoundary";
import Loading from "../components/Loadings/Loading";
import { LoadingContainer } from "../components/editprofile/styles";

const EditProfile = () => {
    const { user, loading } = useUser();

    return (
        <>
            {loading ? (
                <LoadingContainer>
                    <Loading height={35} width={35} />
                </LoadingContainer>
            ) : (
                <Container>
                    <ErrorBoundary>
                        <Side />
                        <Content user={user} />
                    </ErrorBoundary>
                </Container>
            )}
        </>
    );
};

export default EditProfile;

const Container = styled.div`
    width: 100%;
    background-color: #fff;
    margin: 90px auto 25px auto;
    border-radius: 4px;
    display: flex;

    @media ${device.tabletL} {
        border: 0.2px solid lightgray;
        width: 75%;
    }
`;
