import React from "react";
import styled from "styled-components";
import AppLinkIcon from "../commons/AppLinkIcon";

const Applink = () => {
    return (
        <Right>
            <Title>Start capturing and sharing your moments.</Title>
            <Subtitle>
                Get the app to share your first photo or video .
            </Subtitle>
            <AppLinkIcon />
        </Right>
    );
};

export default Applink;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #fff;
    padding: 40px 15px;
`;

const Title = styled.h3`
    text-align: center;
    padding-bottom: 15px;
`;

const Subtitle = styled.p`
    text-align: center;
`;
