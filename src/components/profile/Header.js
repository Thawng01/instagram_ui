import React from "react";
import styled from "styled-components";
import { IoSettingsOutline } from "react-icons/io5";
import { device } from "../../breakpoints";
import Follow from "./Follow";
import NameAndBio from "./NameAndBio";

const Header = () => {
    return (
        <Container>
            <InnerContainer>
                <ProfileImageContainer>
                    <ProfileImage src="/logo.png" alt="profile" />
                </ProfileImageContainer>
                <ProfileDetailContainer>
                    <Top>
                        <Name>Salailiancungthawng</Name>
                        <div className="hide-in-mobile">
                            <ProfileEdit>Edit profile</ProfileEdit>
                        </div>
                        <IoSettingsOutline className="setting-icon" />
                    </Top>
                    <div className="show-in-mobile">
                        <ProfileEdit>Edit profile</ProfileEdit>
                    </div>
                    <div className="follow">
                        <Follow />
                    </div>
                    <Bottom>
                        <NameAndBio />
                    </Bottom>
                </ProfileDetailContainer>
            </InnerContainer>
            <div className="to-show-in-mobile">
                <NameAndBio />
            </div>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 15px 15px 25px 15px;

    .to-show-in-mobile {
        display: block;
        margin-top: 15px;

        @media ${device.tabletL} {
            display: none;
        }
    }

    @media ${device.tabletL} {
        padding: 40px 0px;
    }
`;

const InnerContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ProfileImageContainer = styled.div`
    display: flex;
    justify-content: center;
    @media ${device.tabletL} {
        flex: 0.35;
    }
`;

const ProfileImage = styled.img`
    height: 85px;
    width: 85px;
    border-radius: 50%;

    @media ${device.tabletL} {
        height: 150px;
        width: 150px;
    }
`;

const ProfileDetailContainer = styled.div`
    display: flex;
    flex: 0.65;
    flex-direction: column;
    margin-left: 15px;

    .follow {
        width: 300px;
        display: none;

        @media ${device.tabletL} {
            display: block;
        }
    }

    .show-in-mobile {
        display: block;
        width: 200px;

        @media ${device.tabletL} {
            display: none;
        }
    }
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 7px;

    .setting-icon {
        font-size: 25px;

        @media ${device.tabletL} {
            margin-left: 10px;
        }
    }

    .hide-in-mobile {
        display: none;

        @media ${device.tabletL} {
            display: block;
            width: 90px;
        }
    }
`;

const Name = styled.h2`
    text-transform: lowercase;
    font-weight: 300;
    margin-right: 10px;
`;

const ProfileEdit = styled.button`
    padding: 6px 10px;
    border: 0.5px solid lightgray;
    border-radius: 3px;
    width: 100%;
`;

const Bottom = styled.div`
    display: none;

    @media ${device.tabletL} {
        display: block;
    }
`;
