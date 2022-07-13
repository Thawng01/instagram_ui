import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { IoEllipsisVertical, IoClose } from "react-icons/io5";

import formatDate from "../commons/formatDate";
import { device } from "../../breakpoints";

const ViewStory = () => {
    const [index, setIndex] = useState(0);
    const [completed, setCompleted] = useState(0);

    const ref = useRef();
    // story info passed in here
    const { state } = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const index = state.findIndex((item) => item._id === id);
        setIndex(index);
    }, [id, state, setIndex]);

    useEffect(() => {
        if (index + 1 === state.length) {
            setTimeout(() => navigate("/"), 6000);
            return;
        }
        const timer = setTimeout(() => {
            const activeIndex = state[index + 1];
            navigate(
                `/story/${activeIndex?.user.username.replace(" ", "")}/${
                    activeIndex?._id
                }`,
                { state: state }
            );
            setCompleted(0);
        }, 6000);

        return () => clearTimeout(timer);
    }, [index, navigate, state]);

    useEffect(() => {
        if (completed === 0) {
            setCompleted(100);
        }
    }, [completed, setCompleted]);

    return (
        <Container>
            <IoClose id="close-icon" onClick={() => navigate("/")} />
            <InnerContainer>
                {state
                    .filter((story) => story._id === id)
                    .map((story) => (
                        <ItemContainer key={story._id}>
                            <Infos>
                                <LineContainer>
                                    <div
                                        ref={ref}
                                        className="line"
                                        style={{ width: `${completed}%` }}
                                    />
                                </LineContainer>

                                <UserInfo>
                                    <UserInfoContainer
                                        onClick={() =>
                                            navigate("/profile", {
                                                state: story.user._id,
                                            })
                                        }
                                    >
                                        <UserImage
                                            src={story.user.profileImg}
                                            alt="user"
                                        />

                                        <Username>
                                            {story.user.username}
                                        </Username>

                                        <span id="story-date">
                                            {formatDate(
                                                new Date(
                                                    story.createdAt
                                                ).getTime()
                                            )}
                                        </span>
                                    </UserInfoContainer>

                                    <IoEllipsisVertical id="dot-icon" />
                                </UserInfo>
                            </Infos>
                            <Image src={story.photo} />
                        </ItemContainer>
                    ))}
            </InnerContainer>
        </Container>
    );
};

export default ViewStory;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;

    #close-icon {
        position: absolute;
        top: 0.2rem;
        left: 0.7rem;
        font-size: 1.5rem;
        color: lightgray;
        cursor: pointer;
        z-index: 9;

        @media ${device.xMobile} {
            top: 0.7rem;
            font-size: 2rem;
        }
    }
`;

const InnerContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    @media ${device.xMobile} {
        width: 27rem;
        height: 30rem;
        border-radius: 0.5rem;
    }
`;

const ItemContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;

    @media ${device.xMobile} {
        border-radius: 5px;
    }
`;

const Infos = styled.div`
    position: absolute;
    padding: 2rem 1rem;
    width: 100%;

    @media ${device.xMobile} {
        padding: 0.5rem;
    }
`;

const LineContainer = styled.div`
    width: 100%;
    height: 1px;
    background-color: gray;
    margin-bottom: 0.4rem;

    .line {
        background-color: #fff;
        height: 100%;
        transition: width 6s linear;
    }
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    #dot-icon {
        color: lightgray;
    }
`;

const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;

    #story-date {
        font-size: 0.5rem;
        padding-left: 0.6rem;
        color: lightgray;
    }
`;

const UserImage = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
`;

const Username = styled.p`
    color: #f1f1f1;
    font-family: var(--font);
    margin-left: 0.5rem;
    cursor: pointer;
`;
