// instagram has a different design of creation new post for large device and small device
// this file is for small device

import { useState, useRef } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import Header from "../../components/createpost/mobile/Header";

const CreatePost = () => {
    const [images, setImages] = useState([]);

    const inputRef = useRef();

    const navigate = useNavigate();

    const handleNavigation = () => {
        if (images.length === 0) return;
        navigate("details", { state: images });
    };

    const goBack = () => navigate(-1);

    const handleImageChange = (e) => {
        const image = {
            id: images.length + 1,
            img: URL.createObjectURL(e.target.files[0]),
            url: e.target.files[0],
        };

        setImages((prev) => [...prev, image]);
    };

    const handleRemoveImage = (id) => {
        const index = images.findIndex((item) => item.id === id);
        images.splice(index, 1);
        setImages(images.filter((item) => item.id !== id));
    };

    return (
        <Container>
            <Header
                leftIcon={
                    <IoCloseOutline style={{ fontSize: 30 }} onClick={goBack} />
                }
                title="New photo post"
                action="Next"
                onAction={handleNavigation}
            />

            <InnerContainer>
                <ImageSelectBtn onClick={() => inputRef.current.click()}>
                    <IconContainer>
                        <AiOutlinePlus id="plus-icon" />
                    </IconContainer>
                </ImageSelectBtn>

                <SelectedImagesContainer>
                    {images.map((img) => {
                        return (
                            <ImageContainer key={img.id}>
                                <img src={img.img} alt="" />
                                <CloseIconContainer
                                    onClick={() => handleRemoveImage(img.id)}
                                >
                                    <IoCloseOutline id="close-icon" />
                                </CloseIconContainer>
                            </ImageContainer>
                        );
                    })}
                </SelectedImagesContainer>

                <input
                    type="file"
                    style={{ display: "none" }}
                    ref={inputRef}
                    onChange={handleImageChange}
                />
            </InnerContainer>
            <Outlet />
        </Container>
    );
};

export default CreatePost;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 999;
`;

const InnerContainer = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
`;

const SelectedImagesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 95vw;
    margin: 10px 15px;
`;

const Dimension = styled.div`
    height: 120px;
    width: 120px;
    border-radius: 5px;
`;

const ImageContainer = styled(Dimension)`
    margin: 5px;
    position: relative;
    overflow: hidden;
    img {
        height: 100%;
        width: 100%;
    }
`;

const CloseIconContainer = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: lightgray;
    border-radius: 50%;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;

    #close-icon {
        font-size: 22px;
        color: red;
    }
`;

const Flex = styled(Dimension)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImageSelectBtn = styled(Flex)`
    background-color: rgba(0, 0, 0, 0.1);
`;

const IconContainer = styled(Flex)`
    background-color: rgba(0, 0, 0, 0.2);
    height: 50px;
    width: 50px;
    border-radius: 50%;

    #plus-icon {
        font-size: 25px;
        color: #fff;
    }
`;
