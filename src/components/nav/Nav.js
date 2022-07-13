import styled from "styled-components";
import { useState } from "react";

import { device } from "../../breakpoints";
import CreatePost from "../createpost/CreatePost";
import Desktop from "./Desktop";

const Nav = () => {
    const [newPost, setNewPost] = useState(false);

    const handleNewPostModal = () => setNewPost(!newPost);

    return (
        <Container>
            <CreatePost newPost={newPost} onClose={handleNewPostModal} />
            <Desktop onNewPost={handleNewPostModal} />
        </Container>
    );
};

export default Nav;

const Container = styled.div`
    width: 100%;
    margin: 0 15px;
    display: none;

    @media ${device.laptop} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 75%;
        margin: 0;
    }
`;
