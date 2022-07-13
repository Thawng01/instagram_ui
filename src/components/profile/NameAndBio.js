import React from "react";
import styled from "styled-components";

const NameAndBio = ({ name, bio }) => {
    return (
        <>
            <Username>{name}</Username>
            <Bio>{bio}</Bio>
        </>
    );
};

export default NameAndBio;

const Username = styled.h4`
    line-height: 28px;
    font-family: var(--font);
`;
const Bio = styled.span`
    font-family: var(--font);
`;
