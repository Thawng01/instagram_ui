import React from "react";
import { motion } from "framer-motion";

import "./modal-alert.css";

const ModalAlert = ({ visible, onClose, onAction, postDelete }) => {
    if (!visible) return null;

    const handleCloseModal = (e) => {
        if (
            e.target.className === "container" ||
            e.target.className === "cancel"
        ) {
            onClose();
        }
    };

    return (
        <div
            className="container"
            visible={visible.toString()}
            onClick={handleCloseModal}
        >
            <motion.div
                className="modal-box"
                initial={{ scale: 2 }}
                animate={{ scale: 1 }}
            >
                <h3>{postDelete ? "Delete Post? " : "Discard Post?"}</h3>
                <p className="text">
                    {postDelete
                        ? "Are you sure you want to delete this post?"
                        : "If you leave, your edits won't be saved."}
                </p>
                <p className="discard" onClick={onAction}>
                    {postDelete ? " Delete" : "Discard"}
                </p>
                <p className="cancel" onClick={onClose}>
                    Cancel
                </p>
            </motion.div>
        </div>
    );
};

export default ModalAlert;
