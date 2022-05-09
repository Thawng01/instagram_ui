import React from "react";
import styled from "styled-components";
import { IoEllipsisVertical } from "react-icons/io5";

const UserImage = ({ height = 40, width = 40, profile, suggestedUser }) => {
    return (
        <Container>
            <UserInfoContainer>
                <Image
                    src="/logo.png"
                    style={{ width, height }}
                    alt="account-image"
                />

                <UsernameContainer>
                    <Username>Lian Cung</Username>
                    {profile && <Nickname>Lian Cung</Nickname>}
                </UsernameContainer>
            </UserInfoContainer>
            {profile ? (
                <Switch>Switch</Switch>
            ) : suggestedUser ? (
                <Switch>follow</Switch>
            ) : (
                <IoEllipsisVertical />
            )}
        </Container>
    );
};

export default UserImage;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Image = styled.img`
    border-radius: 50%;
`;

const UsernameContainer = styled.div`
    margin-left: 10px;
`;

const Username = styled.p`
    font-weight: 600;
`;

const Nickname = styled.p`
    color: gray;
    margin-top: 3px;
`;

const Switch = styled.p`
    color: var(--primary);
    font-weight: 600;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 13px;
`;
