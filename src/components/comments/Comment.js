import { useState } from "react";
import styled from "styled-components";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

import { toggleCommentLike } from "../../api/comment";
import formatDate from "../commons/formatDate";
import useToken from "../../hook/useToken";
import useApi from "../../hook/useApi";
import ErrorBoundary from "../errors/ErrorBoundary";

const Comment = ({ comment, replies, onReply, reply }) => {
    const id = useToken();
    const [liked, setLiked] = useState(
        comment?.likes?.includes(id) ? true : false
    );

    const [likeNum, setLikeNum] = useState(comment?.likes?.length);
    const [showReply, setShowReply] = useState(false);

    const commentApi = useApi(toggleCommentLike);

    const commentedAt = formatDate(
        new Date(comment?.createdAt).getTime(),
        "com"
    );

    const handleCommentLike = async (comId) => {
        setLiked(!liked);
        if (liked) {
            setLikeNum(likeNum - 1);
        } else {
            setLikeNum(likeNum + 1);
        }
        await commentApi.request(comId, id);
    };

    return (
        <ErrorBoundary>
            <Container>
                <InnerContainer>
                    <img src={comment?.user?.profileImg} alt="commentor-img" />
                    <DetailContainer>
                        <NameBodyContainer>
                            <p id="commentor-name">{comment?.user?.username}</p>
                            <p id="comment-body">{comment?.comment}</p>
                        </NameBodyContainer>
                        <ReplyAndDateContainer>
                            <span id="date">{commentedAt}</span>
                            {likeNum > 0 && (
                                <span id="like">
                                    {likeNum}{" "}
                                    <span>
                                        {likeNum > 1 ? "Likes" : "Like"}
                                    </span>
                                </span>
                            )}
                            {!reply && (
                                <span id="reply" onClick={onReply}>
                                    Reply
                                </span>
                            )}
                        </ReplyAndDateContainer>
                    </DetailContainer>

                    {liked ? (
                        <IoHeart
                            className="heart-icon liked"
                            onClick={() => handleCommentLike(comment._id)}
                        />
                    ) : (
                        <IoHeartOutline
                            className="heart-icon"
                            onClick={() => handleCommentLike(comment._id)}
                        />
                    )}
                </InnerContainer>

                {!reply && replies?.length > 0 && (
                    <ReplyComment onClick={() => setShowReply(!showReply)}>
                        <div id="line" />
                        {showReply ? (
                            <span> Hide replies</span>
                        ) : (
                            <span>
                                View replies <span>({replies.length})</span>
                            </span>
                        )}
                    </ReplyComment>
                )}

                {showReply && (
                    <Reply>
                        {replies?.map((comment) => {
                            return (
                                <Comment
                                    key={comment._id}
                                    comment={comment}
                                    replies={[]}
                                    reply
                                />
                            );
                        })}
                    </Reply>
                )}
            </Container>
        </ErrorBoundary>
    );
};

export default Comment;

const Container = styled.div``;

const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px var(--side-margin);

    img {
        height: 30px;
        width: 30px;
        border-radius: 50%;
    }

    .heart-icon {
        font-size: 20px;
        cursor: pointer;
    }

    .liked {
        color: red;
    }
`;

const DetailContainer = styled.div`
    margin-left: var(--side-margin);
    width: 100%;
`;

const NameBodyContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 10px;

    #commentor-name {
        font-size: 15px;
        font-weight: 600;
        padding-right: 6px;
        font-family: var(--font);
    }

    #comment-body {
        font-size: 14px;
        font-weight: 300;
        font-family: var(--font);
    }
`;

const ReplyAndDateContainer = styled.div`
    display: flex;
    align-items: center;

    #date {
        font-size: 12px;
        color: gray;
    }

    #like {
        font-size: 12px;
        color: gray;
        margin-left: 10px;
    }

    #reply {
        color: gray;
        font-weight: 600;
        margin-left: 10px;
        font-size: 12px;
        cursor: pointer;
    }
`;

const ReplyComment = styled.div`
    display: flex;
    align-items: center;
    padding-left: 60px;
    cursor: pointer;

    #line {
        background-color: lightgray;
        height: 1px;
        width: 30px;
        margin-right: 15px;
    }

    span {
        font-size: 12px;
        color: gray;
    }
`;

const Reply = styled.div`
    padding-left: 40px;
`;
