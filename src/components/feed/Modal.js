import { useState } from "react";
import { motion } from "framer-motion";

import useToken from "../../hook/useToken";
import ModalAlert from "../commons/ModalAlert";
import { deletePost } from "../../api/post";
import useApi from "../../hook/useApi";
import EditPost from "../createpost/EditPost";
import "./modal.css";

const Modal = ({ visible, onHide, userId, postId, image, caption }) => {
    const [deleted, setDeleted] = useState(false);
    const [edit, setEdit] = useState(false);
    const id = useToken();

    const postApi = useApi(deletePost);

    if (!visible) return null;
    const loggedUser = id === userId ? true : false;

    const handleDelete = async () => {
        await postApi.request(userId, postId);
        setDeleted(false);
        onHide();
    };

    const handleClose = (e) => {
        if (e.target.className === "post-modal-container") {
            onHide();
        }
    };

    const handleCloseEdit = () => {
        setEdit(false);
        onHide();
    };

    return (
        <>
            <ModalAlert
                visible={deleted}
                onClose={() => setDeleted(false)}
                onAction={handleDelete}
                postDelete
            />

            <EditPost
                visible={edit}
                postId={postId}
                image={image}
                caption={caption}
                onClose={handleCloseEdit}
            />
            <div className="post-modal-container" onClick={handleClose}>
                <motion.div
                    className="post-modal-box"
                    initial={{ scale: 2 }}
                    animate={{ scale: 1 }}
                >
                    {loggedUser && (
                        <p
                            className="item highlight"
                            onClick={() => setDeleted(true)}
                        >
                            Delete
                        </p>
                    )}
                    {loggedUser && (
                        <p className="item" onClick={() => setEdit(true)}>
                            Edit
                        </p>
                    )}
                    {loggedUser ? (
                        <p className="item">Hide like count</p>
                    ) : (
                        <p className="item highlight">Report</p>
                    )}

                    {loggedUser ? (
                        <p className="item">Turn off commenting</p>
                    ) : (
                        <p className="item highlight">Unfollow</p>
                    )}

                    <p className="item">Go to post</p>
                    <p className="item">Share to...</p>
                    <p className="item">Copy link</p>
                    <p className="item">Embed</p>
                    <p className="item">Cancel</p>
                </motion.div>
            </div>
        </>
    );
};

export default Modal;
