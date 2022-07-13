import styled from "styled-components";

const Error = ({ error }) => {
    return (
        <Container error={error}>
            <p>{error}</p>
        </Container>
    );
};

export default Error;

const Container = styled.div`
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    margin: auto;
    background-color: red;
    width: 20%;
    border-radius: 4px;
    transform: ${(prop) => (prop.error ? "scale(1, 1)" : "scale(0, 0)")};
    opacity: ${(prop) => (prop.error ? 1 : 0)};
    transition: all 600ms ease;
    z-index: 99;

    p {
        color: #fff;
        padding: 8px;
        text-align: center;
        font-family: var(--font);
    }
`;
