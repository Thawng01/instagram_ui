import { useState } from "react";
import styled from "styled-components";
import { IoChevronBack, IoClose } from "react-icons/io5";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import { device } from "../breakpoints";
import CommentInput from "../components/comments/CommentInput";
import Comment from "../components/comments/Comment";
import PostOwner from "../components/comments/PostOwner";
import NavBottom from "../components/nav/NavBottom";
import useUser from "../hook/useUser";
import useComment from "../hook/useComment";
import ErrorBoundary from "../components/errors/ErrorBoundary";
import Loading from "../components/Loadings/Loading";
import { LoadingContainer } from "../components/editprofile/styles";

const Comments = () => {
    const [reply, setReply] = useState(null);

    const navigate = useNavigate();

    // post info (user detail) are passed through state
    const { state } = useLocation();

    const { user, loading } = useUser();
    const { id: postId } = useParams();
    const { comment } = useComment(postId);

    const handleCommentClose = (e) => {
        if (e.target.id === "comment-container") {
            navigate("/");
        }
    };

    const handleBack = () => navigate("/");

    const rootComments = comment?.filter((com) => com.parentId === "");

    const getReplies = (comId) =>
        comment?.filter((com) => com.parentId === comId);

    return (
        <ErrorBoundary>
            <Container id="comment-container" onClick={handleCommentClose}>
                <IoClose id="comment-close" onClick={handleBack} />
                <CommentBox>
                    {loading ? (
                        <LoadingContainer>
                            <Loading height={40} width={40} />
                        </LoadingContainer>
                    ) : (
                        <>
                            <CommentHeader>
                                <IoChevronBack
                                    className="back-icon"
                                    onClick={handleBack}
                                />
                                <p>Comments</p>
                            </CommentHeader>
                            <CommentInput
                                img={user?.profileImg}
                                userId={user?._id}
                                reply={reply}
                                onCancelReply={() => setReply(null)}
                            />
                            <div className="body-container">
                                <PostOwner user={state} />
                                {rootComments?.map((comment, i) => (
                                    <Comment
                                        key={i}
                                        comment={comment}
                                        onReply={() =>
                                            setReply({
                                                comId: comment._id,
                                                username: comment.user.username,
                                            })
                                        }
                                        replies={getReplies(comment._id)}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                    <NavBottom />
                </CommentBox>
            </Container>
        </ErrorBoundary>
    );
};

export default Comments;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 9;

    @media ${device.laptop} {
        height: 100%;
    }

    #comment-close {
        position: absolute;
        top: 15px;
        right: 15px;
        color: #fff;
        font-size: 35px;
        display: none;
        cursor: pointer;

        @media ${device.laptop} {
            display: block;
        }
    }
`;

const CommentBox = styled.div`
    background-color: #fff;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

    .body-container {
        width: 100%;
        height: calc(100% - 105px);
        overflow-y: auto;
    }

    @media ${device.laptop} {
        width: 60%;
        height: 93%;
    }
`;

const CommentHeader = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 var(--side-margin);
    border-bottom: 0.5px solid lightgray;

    .back-icon {
        font-size: 30px;
        cursor: pointer;
    }

    p {
        text-align: center;
        margin-left: 20px;
    }
`;
