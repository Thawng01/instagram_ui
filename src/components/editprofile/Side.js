import React from "react";
import styled from "styled-components";

import { device } from "../../breakpoints";

const lists = [
    "Edit Profile",
    "Change Password",
    "Apps and Websites",
    "Email notifications",
    "Push Notifications",
    "Manage Contacts",
    "Security and Privacy",
    "Login Activity",
    "Email from Instagram",
    "Help",
];

const Side = () => {
    return (
        <Container>
            <ListContainer>
                {lists.map((item, i) => {
                    return <List key={i}>{item}</List>;
                })}
            </ListContainer>

            <p id="switch-accounts">Switch to Professional Accounts</p>
            <div id="underline" />

            <AccountCenter>
                <h3>Meta</h3>
                <h4>Accounts Center</h4>
                <p>
                    Control settings for connected experiences across Instagram,
                    the Facebook app and Messenger, including story and post
                    sharing and logging in.
                </p>
            </AccountCenter>
        </Container>
    );
};

export default Side;

const Container = styled.div`
    display: none;
    width: 25%;
    border-right: 0.1px solid lightgray;

    #switch-accounts {
        text-align: center;
        color: var(--secondary);
        font-weight: 600;
        width: 80%;
        margin: 10px auto 60px auto;
    }

    #underline {
        height: 0.5px;
        width: 100%;
        background-color: lightgray;
        margin: 10px 0;
    }

    @media ${device.tabletL} {
        display: block;
    }
`;

const ListContainer = styled.div``;

const List = styled.p`
    padding: 15px 25px;
    font-size: var(--fontSize);
    font-family: var(--font);

    &:hover {
        background-color: #f9f9f9;
    }
`;

const AccountCenter = styled.div`
    padding: 25px;

    h3,
    h4 {
        margin-bottom: 10px;
    }

    h4 {
        color: var(--secondary);
    }

    p {
        color: gray;
        font-size: 14px;
        font-weight: 300;
    }
`;
