import React from "react";
import styled from "styled-components";

const BottomMessage = ({ message }) => {
    return (
        <Container message={message}>
            <p>{message}</p>
        </Container>
    );
};

export default BottomMessage;

const Container = styled.div`
    position: fixed;
    bottom: ${(prop) => (prop.message ? "0" : "-50px")};
    left: 0;
    width: 100%;
    height: 45px;
    background-color: #404040;
    transition: all 400ms ease;
    z-index: 99;

    p {
        color: #fff;
        padding: 10px;
    }
`;
