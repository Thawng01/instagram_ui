import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { Button } from "./Button.style";
import useToken from "../../hook/useToken";
import useUser from "../../hook/useUser";
import useStory from "../../hook/useStory";
import { Flex } from "../../styles/Flex.styles";
import Loading from "../Loadings/Loading";
import Error from "../errors/Error";
import Modal from "./Modal";

const Prev = styled(Button)`
    left: 10px;
    .btn-icon {
        font-size: 20px;
    }
`;

const Next = styled(Button)`
    right: 10px;
    .btn-icon {
        font-size: 20px;
    }
`;

const Story = () => {
    const [scrollIndex, setScrollIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const [visible, setVisible] = useState(false);

    const ref = useRef();

    const id = useToken();
    const { user, loading } = useUser();
    const storyApi = useStory(id);
    const navigate = useNavigate();

    useEffect(() => {
        setContainerWidth(ref?.current?.offsetWidth);
    }, []);

    const handleScroll = useCallback(
        (value) => {
            if (value === -1) {
                const back = (ref.current.scrollLeft -= containerWidth);
                setScrollIndex(back);
            } else if (value === +1) {
                const next = (ref.current.scrollLeft += containerWidth);
                setScrollIndex(next);
            } else {
                setScrollIndex(ref?.current?.scrollLeft);
            }
        },
        [containerWidth]
    );

    useEffect(() => {
        const el = ref?.current;
        el?.addEventListener("scroll", handleScroll);
        return () => el?.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const handleResize = useCallback(() => {
        setContainerWidth(ref?.current?.offsetWidth);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    if (storyApi?.loading) {
        return (
            <LoadingContainer>
                <Loading height={20} width={20} />;
            </LoadingContainer>
        );
    }

    if (storyApi?.error) return <Error error={storyApi.error} />;

    return (
        <Container>
            <Modal visible={visible} onModalClose={() => setVisible(false)} />
            <InnerContainer ref={ref}>
                <NewStory onClick={() => setVisible(true)}>
                    <NewStoryImage>
                        {loading ? (
                            <LoadingContainer>
                                <Loading height={30} width={30} />
                            </LoadingContainer>
                        ) : (
                            <img src={user.profileImg} alt="new story" />
                        )}
                        <IconContainer>
                            <AiOutlinePlus id="plus-icon" />
                        </IconContainer>
                    </NewStoryImage>
                    <p>Yourstory</p>
                </NewStory>
                {storyApi?.stories?.map((story, i) => (
                    <StoryItem
                        key={story._id}
                        onClick={() =>
                            navigate(
                                `/story/${story.user.username.replace(
                                    " ",
                                    ""
                                )}/${story._id}`,
                                { state: storyApi.stories }
                            )
                        }
                    >
                        <ImageContainer>
                            <BackDrop>
                                <Image src={story.photo} alt="story" />
                            </BackDrop>
                        </ImageContainer>

                        <Name>
                            <p>{story?.user?.username.replace(" ", "")}</p>
                        </Name>
                    </StoryItem>
                ))}
            </InnerContainer>
            {scrollIndex > 0 && (
                <Prev onClick={() => handleScroll(-1)}>
                    <IoChevronBack className="btn-icon" />
                </Prev>
            )}

            {scrollIndex + containerWidth < storyApi?.stories?.length * 95 && (
                <Next onClick={() => handleScroll(+1)}>
                    <IoChevronForward className="btn-icon" />
                </Next>
            )}
        </Container>
    );
};

export default Story;

const Container = styled.div`
    height: 110px;
    border: 1px solid lightgray;
    margin: 20px 0;
    background-color: #fff;
    border-radius: var(--border-radius);
    position: relative;
`;

const InnerContainer = styled.div`
    display: flex;
    align-items: center;
    overflow-x: auto;
    height: 100%;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const NewStory = styled.div`
    margin: 0 13px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 13px;
        padding-top: 5px;
    }
`;

const NewStoryImage = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;

const IconContainer = styled.div`
    background-color: var(--primary);
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -5px;
    top: 70%;

    #plus-icon {
        color: #fff;
        font-size: 13px;
    }
`;

const StoryItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 13px;
    cursor: pointer;
`;

const ImageContainer = styled.div`
    border-radius: 50%;
    height: 55px;
    width: 55px;

    padding: 0.1rem;
    position: relative;
    background-image: linear-gradient(to left, #cc00cc, #ffa600);
`;

const BackDrop = styled.div`
    background-color: #fff;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    padding: 1.6px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    margin-bottom: 5px;
`;

const Name = styled.p`
    text-transform: lowercase;
    width: 70px;
    text-overflow: ellipsis;
    white-space: nowrap;
    p {
        font-size: 13px;
        text-align: center;
    }
`;

const LoadingContainer = styled(Flex)``;
