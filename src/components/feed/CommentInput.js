import React from "react";
import styled from "styled-components";

const CommentInput = () => {
    return (
        <Form>
            <span>Icon</span>
            <Input placeholder="Add a comment..." />
            <Submit type="submit">Post</Submit>
        </Form>
    );
};

export default CommentInput;

const Form = styled.form`
    display: flex;
    align-items: center;
    padding: 0 12px;
    height: 50px;
    border-top: 0.4px solid lightgray;
`;

const Input = styled.input`
    background-color: inherit;
    padding: 8px;
    border: none;
    flex: 1;
    display: flex;
    margin: 0 10px;

    &:focus {
        outline: none;
    }
`;

const Submit = styled.button`
    border: none;
    color: var(--primary);
    font-weight: 600;
    cursor: pointer;
`;
