import React from "react";
import styled from "styled-components";

import Loading from "./Loading";

const OverlayLoading = ({ visible }) => {
    if (!visible) return null;
    return (
        <Container>
            <Loading width={40} height={40} />
        </Container>
    );
};

export default OverlayLoading;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 99;
`;
