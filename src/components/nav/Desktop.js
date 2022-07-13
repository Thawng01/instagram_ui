import { useState } from "react";
import { IoSearch, IoCloseCircle } from "react-icons/io5";
import styled from "styled-components";

import Tooltip from "../search/Tooltip";
import TopNavIcon from "./TopNavIcon";
import Logo from "./Logo";
import { device } from "../../breakpoints";
import ErrorBoundary from "../errors/ErrorBoundary";

const Desktop = ({ onNewPost }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [search, setSearch] = useState("");

    const handleFocus = () => setIsFocused(true);
    const handleClose = () => setIsFocused(false);
    const handleClear = () => {
        setSearch("");
        setIsFocused(false);
    };
    const handleSearchChange = (e) => setSearch(e.target.value);

    return (
        <Container>
            <NavLeftContainer>
                <Logo />
                <ErrorBoundary>
                    <SearchContainer>
                        {!isFocused && <IoSearch className="search-icon" />}
                        <Input
                            value={search}
                            placeholder="Search"
                            onFocus={handleFocus}
                            onChange={handleSearchChange}
                        />
                        {search && (
                            <IoCloseCircle
                                onClick={handleClear}
                                id="close-icon"
                            />
                        )}
                        <Tooltip
                            value={search}
                            visible={isFocused}
                            onClose={handleClose}
                        />
                    </SearchContainer>
                </ErrorBoundary>
            </NavLeftContainer>
            <ErrorBoundary>
                <NavIconContainer>
                    <TopNavIcon onNewPost={onNewPost} />
                </NavIconContainer>
            </ErrorBoundary>
        </Container>
    );
};

export default Desktop;

const Container = styled.div`
    display: none;
    width: 100%;

    @media ${device.laptop} {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const NavLeftContainer = styled.div`
    display: flex;
    align-items: center;
    width: 65%;
    justify-content: space-between;
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 45%;
    background-color: #f1f1f1;
    height: 35px;
    border-radius: 8px;
    position: relative;

    .search-icon {
        color: gray;
        margin-left: 15px;
        font-size: 20px;
    }

    #close-icon {
        margin-right: 12px;
        color: gray;
        cursor: pointer;
        position: absolute;
        right: 10px;
        z-index: 9999;
    }
`;

const Input = styled.input.attrs({ type: "text" })`
    border: none;
    background-color: inherit;
    width: 100%;
    padding: 7px 12px;

    &:focus {
        outline: none;
    }
`;

const NavIconContainer = styled.div`
    width: 28%;
`;
