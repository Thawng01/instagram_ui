import React from "react";

import styled from "styled-components";

const PostDesc = () => {
    return (
        <Container>
            <LikeCount>13,211 likes</LikeCount>

            <Desc>Hello world</Desc>
            <p className="view-all-comment">View all comments</p>
            <p className="date">13 hrs ago</p>
        </Container>
    );
};

export default PostDesc;

const Container = styled.div`
    margin: 14px 12px;

    .view-all-comment {
        color: gray;
    }

    .date {
        color: gray;
        text-transform: uppercase;
        font-size: 11.5px;
        margin-top: 6px;
    }
`;

const LikeCount = styled.p`
    margin-bottom: 9px;
    font-weight: 600;
`;

const Desc = styled.p`
    margin-bottom: 5px;
`;
