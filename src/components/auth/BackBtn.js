import styled from "styled-components";

const BackBtn = ({ onClick }) => {
    return <BackButton onClick={onClick}>Go back</BackButton>;
};

export default BackBtn;

const BackButton = styled.button`
    background-color: inherit;
    margin-top: 15px;
    font-weight: 600;
    border: transparent;
    color: var(--secondary);
    width: 100%;
    cursor: pointer;
`;
