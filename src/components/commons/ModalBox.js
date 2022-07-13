import React, { useRef } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import CloseIcon from "./CloseIcon";
import { Flex } from "../../styles/Flex.styles";
import ErrorBoundary from "../errors/ErrorBoundary";

const ModalBox = ({ children, next, images, onClose, onVisible }) => {
    const ref = useRef();

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleClickOutside = (e) => {
        if (e.target.id === "container" && images?.length > 0) {
            onVisible();
        } else if (e.target.id === "container") {
            if (pathname.includes("follow")) {
                navigate(-1);
            } else {
                onClose();
            }
        }
    };

    const handleAllClose = () => {
        if (pathname.includes("follow")) {
            navigate(-1);
        }

        if (images.length > 0) {
            onVisible();
        } else {
            onClose();
        }
    };

    return (
        <ErrorBoundary>
            <Container
                next={next}
                ref={ref}
                id="container"
                onClick={handleClickOutside}
            >
                <Icon onClick={handleAllClose}>
                    <CloseIcon size={35} />
                </Icon>
                <motion.div
                    className="new-modal-box"
                    next={next}
                    initial={{ scale: 2 }}
                    animate={{ scale: 1 }}
                >
                    {children}
                </motion.div>
            </Container>
        </ErrorBoundary>
    );
};

export default ModalBox;

const Container = styled(Flex)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.55);
    z-index: 99;

    .new-modal-box {
        background-color: #fff;
        height: 420px;
        width: ${(prop) => (prop.next ? "700px" : "400px")};
        border-radius: 10px;
        overflow: hidden;
        transition: ${(prop) => (prop.next ? "all 500ms ease" : "")};
    }
`;

const Icon = styled.div`
    position: absolute;
    right: 15px;
    top: 15px;
    color: #fff;
    cursor: pointer;
`;
