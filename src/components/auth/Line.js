import styled from "styled-components";

const Line = () => {
    return (
        <UnderLine>
            <div />
            <span>Or</span>
            <div />
        </UnderLine>
    );
};

export default Line;

const UnderLine = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    div {
        background-color: lightgray;
        height: 1.4px;
        width: 200px;
        border-radius: 4px;
    }

    span {
        margin: 0 15px;
    }
`;
