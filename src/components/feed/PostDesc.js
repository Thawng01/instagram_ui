import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import formatDate from "../commons/formatDate";

const PostDesc = ({
    likeCount,
    caption,
    createdAt,
    comments,
    user,
    postId,
    single,
}) => {
    const navigate = useNavigate();

    const time = formatDate(new Date(createdAt).getTime());

    const handleNavigation = () =>
        navigate(`/${postId}/comments`, {
            state: { user, createdAt, caption },
        });

    return (
        <Container>
            {likeCount === 0 ? (
                <p>
                    Be the first to <span>like this</span>
                </p>
            ) : (
                <LikeCount>{likeCount} likes</LikeCount>
            )}

            {!single && (
                <>
                    <Desc>{caption}</Desc>
                    <p className="view-all-comment" onClick={handleNavigation}>
                        View all <span>{comments?.length}</span> comments
                    </p>
                </>
            )}
            <p className="date">{time}</p>
        </Container>
    );
};

export default PostDesc;

const Container = styled.div`
    margin: 14px 12px;

    .view-all-comment {
        color: gray;
        cursor: pointer;
    }

    .date {
        color: gray;
        text-transform: uppercase;
        font-size: 12px;
        margin-top: 6px;
        font-weight: 200;
    }

    p {
        color: gray;
        font-size: var(--textSize);
        margin-bottom: 8px;
        font-family: var(--font);
    }

    span {
        color: #000;
        font-weight: 500;
    }
`;

const LikeCount = styled.p`
    margin-bottom: 9px;
    font-weight: 500;
`;

const Desc = styled.p`
    margin-bottom: 5px;
    font-size: var(--textSize);
`;
