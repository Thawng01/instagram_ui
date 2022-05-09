import React from "react";
import styled from "styled-components";

import "./modal.css";

const ModalAlert = ({ visible, onClose, onDiscard }) => {
    if (!visible) return null;

    return (
        <div className="container" visible={visible} onClick={onClose}>
            <Box>
                <h3>Discard post?</h3>
                <p className="text">
                    If you leave, your edits won't be saved.{" "}
                </p>
                <p className="discard" onClick={onDiscard}>
                    Discard
                </p>
                <p className="cancel" onClick={onClose}>
                    Cancel
                </p>
            </Box>
        </div>
    );
};

export default ModalAlert;

const Box = styled.div`
    background-color: #fff;
    height: 200px;
    width: 400px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    .text {
        padding-bottom: 20px;
        padding-top: 8px;
    }

    .discard,
    .cancel {
        padding: 13px;
        border-top: 0.4px solid lightgray;
        width: 100%;
        text-align: center;
        cursor: pointer;
    }

    .discard {
        color: red;
        font-weight: 600;
    }
`;
