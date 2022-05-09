import styled from "styled-components";
import { IoSearch, IoCloseCircle } from "react-icons/io5";

import { device } from "../../breakpoints";
import TopNavIcon from "./TopNavIcon";
import Logo from "./Logo";
import Mobile from "./Mobile";
import { Flex } from "../../styles/Flex.styles";
import { useState } from "react";
import Tooltip from "../search/Tooltip";
import CreatePost from "../../pages/CreatePost";

const Nav = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [newPost, setNewPost] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const handleNewPostModal = () => setNewPost(!newPost);

    return (
        <Container>
            <CreatePost newPost={newPost} onClose={handleNewPostModal} />
            <Mobile />
            <InnerContainer>
                <NavLeftContainer>
                    <Logo />
                    <SearchContainer>
                        {!isFocused && <IoSearch className="search-icon" />}
                        <Input
                            placeholder="Search"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        {isFocused && <IoCloseCircle id="close-icon" />}
                        <Tooltip visible={isFocused} />
                    </SearchContainer>
                </NavLeftContainer>
                <NavIconContainer>
                    <TopNavIcon onNewPost={handleNewPostModal} />
                </NavIconContainer>
            </InnerContainer>
        </Container>
    );
};

export default Nav;

const Container = styled(Flex)`
    width: 100%;
    justify-content: space-between;
    margin: 0 15px;

    @media ${device.laptop} {
        width: 75%;
        margin: 0;
    }
`;

const InnerContainer = styled.div`
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
