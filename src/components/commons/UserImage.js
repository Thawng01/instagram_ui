import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import Modal from "../feed/Modal";
import BottomMessage from "../errors/BottomMessage";

const UserImage = ({
    height = 40,
    width = 40,
    profile,
    suggestedUser,
    info,
    avatar,
    id,
    username,
    fullname,
}) => {
    const [showModal, setShowModal] = useState(false);
    const [success, setSuccess] = useState("");

    const handleShowModal = () => setShowModal(!showModal);

    const navigate = useNavigate();

    useEffect(() => {
        if (success) setTimeout(() => setSuccess(""), 3000);
    }, [success]);

    return (
        <>
            <BottomMessage message={success} />
            <Modal
                visible={showModal}
                onHide={() => setShowModal(false)}
                userId={id}
                postId={info?._id}
                image={info?.image}
                caption={info?.caption}
                onSuccess={setSuccess}
            />
            <Container>
                <UserInfoContainer>
                    <Image
                        src={avatar}
                        style={{ width, height }}
                        alt="account-image"
                    />

                    <UsernameContainer>
                        <Username
                            onClick={() => navigate("/profile/", { state: id })}
                        >
                            {username}
                        </Username>
                        {profile && <Nickname>{fullname}</Nickname>}
                    </UsernameContainer>
                </UserInfoContainer>
                {profile ? (
                    <Switch>Switch</Switch>
                ) : suggestedUser ? null : (
                    <IoEllipsisHorizontal id="dots" onClick={handleShowModal} />
                )}
            </Container>
        </>
    );
};

export default UserImage;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    #dots {
        cursor: pointer;
        font-size: 25px;
    }
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
    font-weight: 500;
    font-family: var(--font);
    font-size: var(--sTSize);
    cursor: pointer;
`;

const Nickname = styled.p`
    color: gray;
    margin-top: 3px;
    font-family: var(--font);
`;

const Switch = styled.p`
    color: var(--primary);
    font-weight: 600;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 13px;
    cursor: pointer;
`;
