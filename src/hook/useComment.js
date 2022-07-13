import { useCallback, useEffect, useState } from "react";

import { addComment, fetchComments } from "../api/comment";
import socket from "../service/socket";

const useComment = (postId) => {
    const [data, setData] = useState([]);
    const [socketComment, setSocketComment] = useState(null);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const createComment = async (comment) => {
        setLoading(true);
        try {
            const res = await addComment(comment);
            setLoading(false);
            return res;
        } catch (error) {
            setError(error.response.data);
            setLoading(false);
        }
    };

    useEffect(() => {
        socket.on("get-comment", (data) => {
            setSocketComment(data);
        });

        return () => socket.off("get-comment");
    }, []);

    useEffect(() => {
        if (socketComment) {
            setData((prev) => [socketComment, ...prev]);
        }
    }, [socketComment, setData]);

    const getComments = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetchComments(postId);
            setData(res.data);
        } catch (error) {
            setError(error.response.data);
        }
        setLoading(false);
    }, [setData, postId]);

    useEffect(() => {
        if (postId) {
            getComments();
        }
    }, [postId, getComments]);

    return { createComment, loading, data, error };
};

export default useComment;
