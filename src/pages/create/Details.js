import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";

import Header from "../../components/createpost/mobile/Header";
import { createPost } from "../../api/post";
import OverlayLoading from "../../components/Loadings/OverlayLoading";
import Error from "../../components/errors/Error";
import useApi from "../../hook/useApi";
import useUser from "../../hook/useUser";

const Details = () => {
    const [caption, setCaption] = useState("");

    // images array passed through state
    const { state } = useLocation();
    const navigate = useNavigate();
    const postApi = useApi(createPost);
    const { user } = useUser();

    const goBack = () => navigate(-1);

    const handleCaptionChange = (e) => setCaption(e.target.value);

    const handleSubmit = async () => {
        const post = { user: user._id, caption, images: state };
        const result = await postApi.request(post);
        if (result.status === 200) {
            navigate("/");
        }
    };

    return (
        <Container>
            <Error error={postApi.error} />
            <OverlayLoading visible={postApi.loading} />
            <Header
                leftIcon={
                    <IoChevronBackOutline
                        style={{ fontSize: 30 }}
                        onClick={goBack}
                    />
                }
                title="New post"
                action="Share"
                onAction={handleSubmit}
            />

            <InnerContainer>
                <UserInputContainer>
                    <img id="user-img" src={user?.profileImg} alt="user" />
                    <InputContainer>
                        <textarea
                            id="input"
                            placeholder="Write a caption..."
                            value={caption}
                            onChange={handleCaptionChange}
                        />
                    </InputContainer>

                    {state.map((image) => {
                        return (
                            <img
                                key={image.id}
                                src={image.img}
                                id="selected-img"
                                alt=""
                            />
                        );
                    })}
                </UserInputContainer>
                <Tools>
                    <p>Add Location</p>
                    <IoChevronForward id="forward-icon" />
                </Tools>
                <Tools>
                    <p>Tag People</p>
                    <IoChevronForward id="forward-icon" />
                </Tools>
            </InnerContainer>
        </Container>
    );
};

export default Details;

const Container = styled.div`
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: 9;
`;

const InnerContainer = styled.div`
    margin-top: 50px;
`;

const UserInputContainer = styled.div`
    padding: var(--side-margin);
    display: flex;
    border-bottom: 0.1px solid lightgray;

    #user-img {
        height: 35px;
        width: 35px;
        border-radius: 50%;
        margin-right: 10px;
    }

    #selected-img {
        height: 50px;
        width: 50px;
        object-fit: fill;
        margin-left: 6px;
    }
`;

const InputContainer = styled.div`
    width: 100%;
    height: 50px;

    #input {
        width: 100%;
        height: 100%;
        border: none;
        resize: none;

        &:focus {
            outline: none;
        }
    }
`;

const Tools = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--side-margin);
    border-bottom: 0.1px solid lightgray;
    border-top: 0.1px solid lightgray;
    margin-top: var(--side-margin);
    height: 45px;

    #forward-icon {
        font-size: 20px;
        color: gray;
    }
`;
