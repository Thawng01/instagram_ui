import React, { useState } from "react";
import styled from "styled-components";
import { FiSmile } from "react-icons/fi";

import useToken from "../../hook/useToken";
import useUser from "../../hook/useUser";
import EmojiPicker from "../commons/EmojiPicker";
import Loading from "../Loadings/Loading";
import Error from "../errors/Error";
import { Flex } from "../../styles/Flex.styles";
import useComment from "../../hook/useComment";
import socket from "../../service/socket";
import ErrorBoundary from "../errors/ErrorBoundary";

const CommentInput = ({ postId }) => {
    const [comment, setComment] = useState("");
    const [visible, setVisible] = useState(false);

    const id = useToken();
    const { user } = useUser();
    const { createComment, loading, error } = useComment();

    const handleChange = (e) => setComment(e.target.value);
    const handleSelectEmoji = (event, emojiObject) => {
        const { emoji } = emojiObject;
        setComment(emoji);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!comment) return;

        const comments = { user: id, parentId: "", postId, comment };
        const res = await createComment(comments);

        const commentMessage = {
            createdAt: new Date(),
            likes: [],
            comment,
            postId,
            parentId: "",
            user: { profileImg: user.profileImg, username: user.username },
        };

        socket.emit("add-comment", commentMessage);
        if (res.status === 200) setComment("");
    };

    return (
        <ErrorBoundary>
            <Form onSubmit={handleSubmit}>
                {loading && (
                    <LoadingContainer>
                        <Loading height={25} width={25} />
                    </LoadingContainer>
                )}

                <Error error={error} />
                <div className="emoji-container">
                    <FiSmile
                        id="smile-icon"
                        onClick={() => setVisible(!visible)}
                    />
                    {visible && (
                        <>
                            <div
                                id="overlay"
                                onClick={() => setVisible(false)}
                            />
                            <div className="emoji-dropdown">
                                <EmojiPicker onEmojiClick={handleSelectEmoji} />
                            </div>
                        </>
                    )}
                </div>
                <Input
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={handleChange}
                />
                <Submit comment={comment} type="submit">
                    Post
                </Submit>
            </Form>
        </ErrorBoundary>
    );
};

export default CommentInput;

const Form = styled.form`
    display: flex;
    align-items: center;
    padding: 0 12px;
    height: 50px;
    border-top: 0.4px solid lightgray;
    position: relative;

    #smile-icon {
        font-size: 25px;
        cursor: pointer;
    }

    .emoji-container {
        position: relative;
    }

    #overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 99;
    }

    .emoji-dropdown {
        position: absolute;
        bottom: 130%;
        z-index: 99;
    }
`;

const Input = styled.input`
    background-color: inherit;
    padding: 8px;
    border: none;
    flex: 1;
    display: flex;
    margin: 0 10px;

    &:focus {
        outline: none;
    }
`;

const Submit = styled.button`
    border: none;
    color: var(--primary);
    font-weight: 600;
    cursor: pointer;
    opacity: ${(prop) => (prop.comment ? 1 : 0.5)};
    background-color: #fff;
`;

const LoadingContainer = styled(Flex)`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 99;
`;
