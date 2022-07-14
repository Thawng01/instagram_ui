import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import ModalAlert from "../commons/ModalAlert";
import useStory from "../../hook/useStory";
import useToken from "../../hook/useToken";
import Loading from "../Loadings/Loading";
import Error from "../errors/Error";
import { device } from "../../breakpoints";

const Modal = ({ visible, onModalClose }) => {
    const [image, setImage] = useState("");
    const [isConfirmed, setIsConfirmed] = useState(false);

    const inputRef = useRef();
    const id = useToken();
    const { addNewStory, loading, error } = useStory();

    const handleSelectImage = () => {
        if (loading) return;
        inputRef.current.click();
    };

    const handleImageChange = (e) => {
        setImage({
            url: URL.createObjectURL(e.target.files[0]),
            file: e.target.files[0],
        });
    };

    const handleClose = (e) => {
        if (e.target.id === "container") {
            if (image) {
                setIsConfirmed(true);
            } else {
                onModalClose();
            }
        }

        if (e.target.id === "cancel") {
            if (image) {
                setIsConfirmed(true);
            } else {
                onModalClose();
            }
        }
    };

    const handleAction = () => {
        setIsConfirmed(false);
        setImage("");
        onModalClose();
    };

    const handleSaveStory = async () => {
        const info = { photo: image.file, userId: id };
        const res = await addNewStory(info);
        if (res?.status === 200) {
            setImage("");
            onModalClose();
        }
    };

    if (!visible) return null;
    return (
        <Container id="container" onClick={handleClose}>
            <Error error={error} />
            <ModalAlert
                visible={isConfirmed}
                postDelete={true}
                onAction={handleAction}
                onClose={() => setIsConfirmed(false)}
            />
            <motion.div
                className="story-modal-box"
                initial={{ scale: 2 }}
                animate={{ scale: 1 }}
            >
                <Header>
                    <Cancel id="cancel" onClick={handleClose}>
                        Cancel
                    </Cancel>
                    <Title>
                        <span>Story</span>
                    </Title>

                    {loading ? (
                        <Loading height={20} width={20} />
                    ) : (
                        <Save visible={image} onClick={handleSaveStory}>
                            Save
                        </Save>
                    )}
                </Header>
                <BodyContainer>
                    {image ? (
                        <>
                            <img src={image.url} alt="story" />
                            <ChangeBtn onClick={handleSelectImage}>
                                Change photo
                            </ChangeBtn>
                        </>
                    ) : (
                        <>
                            <BtnContainer onClick={handleSelectImage}>
                                <Button>Select photo</Button>
                            </BtnContainer>
                            <BtnContainer>
                                <Button>Take photo</Button>
                            </BtnContainer>
                        </>
                    )}
                    <input
                        ref={inputRef}
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                    />
                </BodyContainer>
            </motion.div>
        </Container>
    );
};

export default Modal;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;

    .story-modal-box {
        background-color: #fff;
        width: 20rem;
        height: 22rem;
        margin-bottom: 50px;
        border-radius: 5px;

        @media ${device.xMobile} {
            width: 22rem;
            height: 25rem;
        }
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 13px;
    border-bottom: 0.5px solid lightgray;
`;

const Title = styled.div`
    display: flex;
    align-items: center;

    span {
        font-family: var(--font);
        font-weight: 600;
        font-size: var(--textSize);
    }
`;

const Cancel = styled.button`
    font-family: var(--font);
    font-size: var(--textSize);
    background-color: #fff;
    border: transparent;
    color: red;
`;

const Save = styled.button`
    font-family: var(--font);
    background-color: #fff;
    border: transparent;
    margin-left: 10px;
    color: var(--primary);

    visibility: ${(prop) => (prop.visible ? "visible" : "hidden")};
`;

const BodyContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: calc(100% - 50px);

    img {
        width: 100%;
        height: calc(100% - 110px);

        @media ${device.xMobile} {
            width: 20rem;
        }
    }
`;

const ChangeBtn = styled.button`
    background-color: #fff;
    border: 0.5px solid lightgray;
    width: 90%;
    padding: 8px;
    border-radius: 0.3rem;
    margin-top: 0.8rem;
`;

const BtnContainer = styled.div`
    width: 115px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 0.5px solid lightgray;
    cursor: pointer;
    margin: 10px 0;

    &:hover {
        background-color: var(--primary);
        color: #fff;
        transition: all 500ms ease;
    }
`;

const Button = styled.p`
    font-weight: 400;
    font-family: var(--font);
    font-size: var(--textSize);
`;
