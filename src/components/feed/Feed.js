import React from "react";
import styled from "styled-components";
import UserImage from "../commons/UserImage";
import Story from "../story/Story";
import CommentInput from "./CommentInput";
import PostAction from "./PostAction";
import PostDesc from "./PostDesc";
import PostImage from "./PostImage";
import { device } from "../../breakpoints";

const Feed = () => {
    return (
        <Container>
            <Story />
            <ItemCardContainer>
                <div className="user-image-container">
                    <UserImage />
                </div>

                <PostImage />
                <PostAction />
                <PostDesc />
                <CommentInput />
            </ItemCardContainer>
        </Container>
    );
};

export default Feed;

const Container = styled.div`
    width: 100%;

    @media ${device.laptop} {
        width: 65%;
    }
`;

const ItemCardContainer = styled.div`
    border: 1px solid lightgray;
    border-radius: var(--border-radius);
    margin: 20px 0;

    .user-image-container {
        margin: 15px 12px;
    }
`;
