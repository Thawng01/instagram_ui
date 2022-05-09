import styled from "styled-components";

const CommentInput = () => {
    return (
        <Container>
            <img src="/logo.png" id="user-img" />

            <InputContainer>
                <Input placeholder="Add a comment" />
                <Button>Post</Button>
            </InputContainer>
        </Container>
    );
};

export default CommentInput;

const Container = styled.div`
    height: 55px;
    display: flex;
    align-items: center;
    padding: 0 var(--side-margin);
    border-bottom: 0.3px solid lightgray;
    background-color: #f1f1f1;

    img {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        margin-right: var(--side-margin);
    }
`;

const InputContainer = styled.div`
    border-radius: 30px;
    background-color: #fff;
    height: 40px;
    border: 0.2px solid lightgray;
    display: flex;
    align-items: center;
    width: 100%;
`;

const Input = styled.input.attrs({ type: "text" })`
    width: 100%;
    margin: 0 8px;
    padding: 7px;
    border: none;

    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    margin-right: var(--side-margin);
    border: none;
    background-color: #fff;
    font-weight: 600;
    color: var(--secondary);
`;
