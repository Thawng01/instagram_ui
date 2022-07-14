import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

import useFetch from "../../hook/useFetch";
import { fetchSinglePost } from "../../api/post";
import UserImage from "../commons/UserImage";
import PostBottom from "../feed/PostBottom";
import CommentInput from "../feed/CommentInput";
import PostOwner from "../comments/PostOwner";
import Comment from "../comments/Comment";
import useComment from "../../hook/useComment";
import PostImage from "../feed/PostImage";
import SkeletonLoading from "../Loadings/SkeletonLoading";
import ImageLoading from "../Loadings/ImageLoading";
import { device } from "../../breakpoints";

const Post = () => {
    const [index, setIndex] = useState();

    const { postId } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();

    const { comment } = useComment(postId);

    const { data, loading } = useFetch(fetchSinglePost, postId);

    useEffect(() => {
        const index = state.findIndex((item) => item._id === postId);
        setIndex(index);
    }, [postId, setIndex, state]);

    const handleNavigation = (i) => {
        const currentElement = state[index + i];
        navigate(`/p/${currentElement._id}`, { state });
    };

    const handleCapturedClick = (e) => {
        if (e.target.id === "post-slide-container") {
            navigate(-1);
        }
    };

    const rootComments = comment?.filter((comment) => comment.parentId === "");
    const getReplies = (comId) =>
        comment?.filter((comment) => comment.parentId === comId);

    return (
        <Container id="post-slide-container" onClick={handleCapturedClick}>
            <IoClose className="close-icon" onClick={() => navigate(-1)} />

            <Box>
                <LeftItem>
                    {loading ? (
                        <ImageLoading />
                    ) : (
                        <PostImage images={data?.image} />
                    )}
                </LeftItem>

                <RightItem>
                    {loading ? (
                        <SkeletonLoading slide />
                    ) : (
                        <>
                            <div className="header">
                                <UserImage
                                    info={data}
                                    avatar={data?.user?.profileImg}
                                    username={data?.user?.username}
                                    id={data?.user?._id}
                                />
                            </div>
                            <Centered>
                                <PostOwner user={data} />

                                {rootComments?.map((comment) => (
                                    <Comment
                                        key={comment._id}
                                        comment={comment}
                                        replies={getReplies(comment._id)}
                                    />
                                ))}
                            </Centered>

                            <div className="image-container">
                                <PostImage images={data?.image} />
                            </div>
                            <div className="bottom">
                                <PostBottom post={data} single />
                            </div>
                            <div className="comment-input">
                                <CommentInput postId={postId} />
                            </div>
                        </>
                    )}
                </RightItem>
            </Box>

            {index > 0 && (
                <Prev onClick={() => handleNavigation(-1)}>
                    <IoChevronBack id="btn-icon" />
                </Prev>
            )}

            {index !== state.length - 1 && (
                <Next onClick={() => handleNavigation(+1)}>
                    <IoChevronForward id="btn-icon" />
                </Next>
            )}
        </Container>
    );
};

export default Post;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    .close-icon {
        font-size: 40px;
        color: #fff;
        position: absolute;
        right: 15px;
        top: 12px;
        cursor: pointer;
    }
`;

const Box = styled.div`
    width: 85%;
    height: 75vh;
    background-color: #fff;
    display: flex;

    @media ${device.xMobile} {
        height: 85vh;
    }

    @media ${device.tabletL} {
        height: 90vh;
    }
`;

const LeftItem = styled.div`
    width: 0%;
    height: 0%;
    overflow-y: hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media ${device.tabletL} {
        width: 65%;
        height: 100%;
    }
`;

const RightItem = styled.div`
    width: 100%;
    height: 100%;

    .header {
        padding: 9px var(--side-margin);
        border-bottom: 0.4px solid #f1f1f1;
        height: 10%;
    }

    .bottom {
        padding-top: 6px;
        border-top: 0.4px solid #f1f1f1;
        height: 20%;
    }

    .image-container {
        @media ${device.tabletL} {
            display: none;
        }
    }

    .comment-input {
        height: 10%;
        display: none;

        @media ${device.tabletL} {
            display: block;
        }
    }

    @media ${device.tabletL} {
        width: 500px;
    }
`;

const Centered = styled.div`
    width: 100%;
    height: 60%;
    overflow-y: auto;
    display: none;

    @media ${device.tabletL} {
        display: block;
    }
`;

const Btn = styled.div`
    background-color: #fff;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 9;
    cursor: pointer;

    &:hover {
        background-color: lightgray;
    }
`;

const Prev = styled(Btn)`
    left: 15px;

    #btn-icon {
        font-size: 20px;
    }
`;

const Next = styled(Btn)`
    right: 15px;

    #btn-icon {
        font-size: 20px;
    }
`;
