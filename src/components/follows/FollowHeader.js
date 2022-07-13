import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import CloseIcon from "../commons/CloseIcon";

const FollowHeader = ({ title }) => {
    const navigate = useNavigate();

    return (
        <Header>
            <Title>
                <span>{title}</span>
            </Title>
            <Icon onClick={() => navigate("/profile/")}>
                <CloseIcon size={30} />
            </Icon>
        </Header>
    );
};

export default FollowHeader;

const Header = styled.div`
    display: flex;
    align-items: center;
    height: 45px;
    border-bottom: 0.5px solid lightgray;
`;

const Title = styled.p`
    display: flex;
    flex: 0.5;
    justify-content: flex-end;

    span {
        font-weight: 500;
    }
`;

const Icon = styled.div`
    display: flex;
    flex: 0.5;
    justify-content: flex-end;
    padding-right: 15px;
    cursor: pointer;
`;
