import { useState } from "react";
import styled from "styled-components";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { AiOutlineComment } from "react-icons/ai";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { Flex } from "../../styles/Flex.styles";
import useToken from "../../hook/useToken";
import useApi from "../../hook/useApi";
import { toggleSavePost, toggleLikePost } from "../../api/post";
import ErrorBoundary from "../errors/ErrorBoundary";

const PostAction = ({ postId, likes, save, onLike, user, createdAt }) => {
    const id = useToken();
    const navigate = useNavigate();

    const [liked, setLiked] = useState(likes?.includes(id) ? true : false);
    const [saved, setSaved] = useState(save?.includes(id) ? true : false);

    const likeApi = useApi(toggleLikePost);
    const saveApi = useApi(toggleSavePost);

    const handleLikePost = () => {
        setLiked(!liked);
        if (liked) {
            onLike(-1);
        } else {
            onLike(+1);
        }
        likeApi.request(id, postId);
    };

    const handleNavigation = () =>
        navigate(`${postId}/comments`, { state: { user, createdAt } });

    const handleSavePost = () => {
        setSaved(!saved);
        saveApi.request(id, postId);
    };

    return (
        <ErrorBoundary>
            <Container>
                <Left>
                    {liked ? (
                        <IoMdHeart
                            className="card-action-icon heart"
                            onClick={handleLikePost}
                        />
                    ) : (
                        <IoMdHeartEmpty
                            className="card-action-icon "
                            onClick={handleLikePost}
                        />
                    )}
                    <AiOutlineComment
                        className="card-action-icon"
                        onClick={handleNavigation}
                    />
                    <FiSend className="card-action-icon" />
                </Left>
                {saved ? (
                    <IoBookmark
                        className="card-action-icon"
                        onClick={handleSavePost}
                    />
                ) : (
                    <IoBookmarkOutline
                        className="card-action-icon"
                        onClick={handleSavePost}
                    />
                )}
            </Container>
        </ErrorBoundary>
    );
};

export default PostAction;

const Container = styled(Flex)`
    justify-content: space-between;
    margin: 0 12px 12px 12px;

    .card-action-icon {
        font-size: 28px;
        margin-right: 10px;
        cursor: pointer;

        &:hover {
            color: gray;
        }
    }

    .heart {
        color: red;
        &:hover {
            color: red;
            opacity: 0.6;
        }
    }
`;

const Left = styled(Flex)`
    justify-content: flex-start;
`;
