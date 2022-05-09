import React from "react";
import styled from "styled-components";
import { device } from "../../breakpoints";

const items = [
    "Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Top",
    "Accounts",
    "Hashtags",
    "Locations",
    "Instagram",
    "Lite",
];

const Footer = () => {
    return (
        <Container>
            <ItemContainer>
                {items.map((item) => (
                    <Link>{item}</Link>
                ))}
            </ItemContainer>
            <p>
                <span>&copy;</span>2022 Instagram by Meta
            </p>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 15px 0;
    margin-bottom: 50px;

    @media ${device.tabletL} {
        margin-bottom: 0;
    }

    p {
        color: gray;
        font-size: 14px;
        padding-top: 20px;
    }
`;

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 15px;
`;

const Link = styled.a`
    padding: 0 9px;
    color: gray;
    font-size: 13px;
`;
