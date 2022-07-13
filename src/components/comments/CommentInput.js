import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

import useComment from "../../hook/useComment";
import Loading from "../Loadings/Loading";
import { Flex } from "../../styles/Flex.styles";
import useUser from "../../hook/useUser";
import socket from "../../service/socket";
import ErrorBoundary from "../errors/ErrorBoundary";

const CommentInput = ({ img, userId, reply, onCancelReply }) => {
    const [comment, setComment] = useState("");

    const { user } = useUser();
    const inputRef = useRef();
    const { createComment, loading } = useComment();

    const { id } = useParams();

    const handleChange = (e) => setComment(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!comment) return;
        const res = await createComment({
            user: userId,
            postId: id,
            comment,
            parentId: reply ? reply.comId : "",
        });

        const commentMessage = {
            createdAt: new Date(),
            likes: [],
            comment,
            postId: id,
            parentId: reply ? reply.comId : "",
            user: { profileImg: user.profileImg, username: user.username },
        };
        socket.emit("add-comment", commentMessage);
        if (res.status === 200) setComment("");
        onCancelReply();
    };

    useEffect(() => {
        inputRef?.current?.focus();
    }, [reply]);

    return (
        <ErrorBoundary>
            <Container>
                <img src={img} id="user-img" alt="user-img" />

                <InputContainer onSubmit={handleSubmit}>
                    {loading && (
                        <LoadingContainer>
                            <Loading height={25} width={25} />
                        </LoadingContainer>
                    )}
                    <Input
                        ref={inputRef}
                        placeholder="Add a comment"
                        value={comment}
                        onChange={handleChange}
                    />
                    <Button type="submit" comment={comment}>
                        Post
                    </Button>
                </InputContainer>
            </Container>
            {reply && (
                <Reply>
                    <p>{`Replying to ${reply.username}...`}</p>
                    <IoClose id="close-icon" onClick={onCancelReply} />
                </Reply>
            )}
        </ErrorBoundary>
    );
};

export default CommentInput;

const Container = styled.div`
    height: 55px;
    display: flex;
    align-items: center;
    padding: 0 var(--side-margin);
    border-bottom: 0.3px solid lightgray;
    background-color: #f1f1f1;

    img {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        margin-right: var(--side-margin);
    }
`;

const InputContainer = styled.form`
    border-radius: 30px;
    background-color: #fff;
    height: 40px;
    border: 0.2px solid lightgray;
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
`;

const Input = styled.input.attrs({ type: "text" })`
    width: 100%;
    margin: 0 8px;
    padding: 7px;
    border: none;

    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    margin-right: var(--side-margin);
    border: none;
    background-color: #fff;
    font-weight: 600;
    color: var(--secondary);
    opacity: ${(prop) => (prop.comment ? 1 : 0.5)};
    cursor: pointer;
`;

const LoadingContainer = styled(Flex)`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 99;
`;

const Reply = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px var(--side-margin);
    background-color: #f1f1f1;
    border-bottom: 0.2px solid lightgray;

    p {
        color: gray;
    }

    #close-icon {
        cursor: pointer;
    }
`;
