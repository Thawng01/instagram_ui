import React from "react";
import styled from "styled-components";

const FollowingHashtag = () => {
    return (
        <Container>
            <Icon>
                <p id="icon">#</p>
            </Icon>
            <h2>Hashtags you follow</h2>
            <p id="text">Once you follow hashtags, you'll see them here.</p>
        </Container>
    );
};

export default FollowingHashtag;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(420px - 85px);

    h2 {
        margin-bottom: 15px;
        font-weight: 300;
    }

    #text {
        color: gray;
        font-size: 16px;
    }
`;

const Icon = styled.div`
    border: 1.5px solid #000;
    border-radius: 50%;
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;

    #icon {
        font-size: 60px;
    }
`;
