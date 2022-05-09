import React from "react";
import styled from "styled-components";

const NameAndBio = () => {
    return (
        <>
            <Username>Lian Cung Thawng</Username>
            <Bio>I love Instagram</Bio>
        </>
    );
};

export default NameAndBio;

const Username = styled.h4`
    line-height: 28px;
`;
const Bio = styled.span``;
