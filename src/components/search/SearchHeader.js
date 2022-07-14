import React, { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../breakpoints";

const SearchHeader = ({ value, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();

    const handleFocus = () => {
        setIsFocused(true);
        ref.current.focus();
        navigate("search/");
    };
    const handleBlur = () => {
        navigate("/explore/");
        setIsFocused(false);
    };

    return (
        <Container>
            <InputContainer onClick={handleFocus}>
                <IoSearch className="search-icon" />

                <Input
                    ref={ref}
                    value={value}
                    isFocused={isFocused}
                    placeholder="Search"
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </InputContainer>
            {isFocused && <Cancel>Cancel</Cancel>}
        </Container>
    );
};

export default SearchHeader;

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 95%;

    @media ${device.laptop} {
        display: none;
    }
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: 0.5px solid lightgray;
    border-radius: 5px;
    position: relative;

    .search-icon {
        color: gray;
        margin: 0 4px 0 8px;
    }
`;

const Input = styled.input`
    border: none;
    width: ${(prop) => (prop.isFocused ? "100%" : "65px")};
    padding: 7px;
    font-size: var(--textSize);

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
