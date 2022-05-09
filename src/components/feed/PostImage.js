import React from "react";
import styled from "styled-components";

const PostImage = () => {
    return (
        <ImageContainer>
            <Image src="/logo.png" alt="card image" />
        </ImageContainer>
    );
};

export default PostImage;

const ImageContainer = styled.div`
    width: 100%;
    height: 75vh;
    background-color: red;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
