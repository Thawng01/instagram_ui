import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import styled from "styled-components";

const SearchHeader = () => {
    const [click, setClick] = useState(false);

    const handleFocus = () => setClick(true);
    const handleBlur = () => setClick(false);

    return (
        <Container>
            <InputContainer>
                <IoSearch className="search-icon" />
                <Input
                    placeholder="Search"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </InputContainer>
            {click && <Cancel>Cancel</Cancel>}
        </Container>
    );
};

export default SearchHeader;

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 95%;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: 0.5px solid lightgray;
    padding: 7px;
    border-radius: 5px;

    .search-icon {
        color: gray;
        margin-right: 4px;
    }
`;

const Input = styled.input`
    width: 100%;
    border: none;

    &:focus {
        outline: none;
    }
`;

const Cancel = styled.button`
    border: none;
    background-color: inherit;
    margin-left: 8px;
    color: #000;
    cursor: pointer;
`;
