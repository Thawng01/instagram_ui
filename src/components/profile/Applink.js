import React from "react";
import styled from "styled-components";

const Applink = () => {
    return (
        <Right>
            <Title>Start capturing and sharing your moments.</Title>
            <Subtitle>
                Get the app to share your first photo or video .
            </Subtitle>
            <ApplinkContainer>
                <Appimage
                    src="https://www.instagram.com/static/images/appstore-i…l-badges/badge_ios_french-fr.png/485fcccb52dc.png"
                    alt="apple"
                />
                <Appimage
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                    alt="android"
                />
            </ApplinkContainer>
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

const ApplinkContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

const Appimage = styled.img`
    margin: 0 7px;
    width: 100px;
    height: 30px;
`;
