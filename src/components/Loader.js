import React from "react";
import styled from "styled-components";

const Loader = () => {
    return (
        <Container>
            <img src="./icon.png" style={{ width: 90, height: 90 }} alt="" />
        </Container>
    );
};

export default Loader;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;
