import styled from "styled-components";
import { IoChevronBack, IoClose } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

import { device } from "../breakpoints";
import CommentInput from "../components/comments/CommentInput";
import CommentBody from "../components/comments/CommentBody";
import PostOwner from "../components/comments/PostOwner";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Comment = () => {
    const ref = useRef();
    const navigate = useNavigate();

    const handleCommentClose = (e) => {
        if (e.target.id === "comment-container") {
            navigate("/");
        }
    };

    const handleBack = () => navigate("/");

    return (
        <Container id="comment-container" onClick={handleCommentClose}>
            <IoClose id="comment-close" onClick={handleBack} />
            <CommentBox>
                <CommentHeader>
                    <IoChevronBack className="back-icon" onClick={handleBack} />
                    <p>Comments</p>
                    <FiSend className="send-icon" />
                </CommentHeader>
                <CommentInput />
                <div className="body-container">
                    <PostOwner />
                    <CommentBody />
                    <CommentBody />
                    <CommentBody />
                    <CommentBody />
                    <CommentBody />
                </div>
            </CommentBox>
        </Container>
    );
};

export default Comment;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;

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
    justify-content: space-between;
    padding: 0 var(--side-margin);
    border-bottom: 0.5px solid lightgray;

    .back-icon {
        font-size: 35px;
    }

    .send-icon {
        font-size: 28px;
    }
`;
