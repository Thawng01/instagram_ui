import client from "./client";

const endpoint = "/comment/";
export const addComment = (comment) => client.post(endpoint, comment);

// fetch comments for a specific post
export const fetchComments = (id) => client.get(endpoint + id);

// like comment or unlike
export const toggleCommentLike = (comId, userId) =>
    client.put(endpoint + comId, { userId });
