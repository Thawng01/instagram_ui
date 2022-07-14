import { useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

import Caption from "./Caption";
import { editPost } from "../../api/post";
import useApi from "../../hook/useApi";
import "./edit-post.css";
import useUser from "../../hook/useUser";
import { device } from "../../breakpoints";

const EditPost = ({ visible, onClose, caption, image, postId }) => {
    const [capt, setCapt] = useState(caption);

    const postApi = useApi(editPost);
    const { user } = useUser();

    const handleClick = (e) => {
        if (e.target.id === "edit-container") {
            onClose();
        }
    };

    const handleCaptionChange = (e) => setCapt(e.target.value);

    const handleSubmit = async () => {
        await postApi.request(postId, capt);
        onClose();
    };

    if (!visible) return null;

    return (
        <Container id="edit-container" onClick={handleClick}>
            <IoClose id="close-icon" onClick={onClose} />
            <motion.div
                className="edit-post-box"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
            >
                <Header>
                    <span id="left" onClick={onClose}>
                        Cancel
                    </span>
                    <span id="centered">Edit info</span>
                    <span id="right" onClick={handleSubmit}>
                        Done
                    </span>
                </Header>

                <Content>
                    <ImageContainer>
                        <img src={image[0]} alt="post" />
                    </ImageContainer>
                    <Caption
                        value={capt}
                        onChange={handleCaptionChange}
                        username={user?.username}
                        profile={user?.profileImg}
                    />
                </Content>
            </motion.div>
        </Container>
    );
};

export default EditPost;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;

    #close-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #fff;
        font-size: 40px;
        cursor: pointer;
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    height: 50px;
    overflow: hidden;

    #left {
        color: gray;
        cursor: pointer;
    }

    #centered {
        font-weight: 600;
    }

    #right {
        color: var(--secondary);
        font-weight: 500;
        cursor: pointer;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.tabletL} {
        flex-direction: row;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media ${device.tabletL} {
        width: 60%;
        height: 70%;
    }
`;
