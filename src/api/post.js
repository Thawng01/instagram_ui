import client from "./client";

const endpoint = "/post/";

// add new post
export const createPost = (post) => {
    let data = new FormData();

    data.append("user", post.user);
    data.append("caption", post.caption);

    post.images.forEach((img) => {
        data.append("images", img.url);
    });

    return client.post(endpoint, data);
};

// fetch posts
export const fetchPosts = () => client.get(endpoint);

export const fetchUserPosts = (id) => client.get(endpoint + id);
export const fetchSinglePost = (id) => client.get(`${endpoint}/p/${id}`);

// like post or unlike
export const toggleLikePost = (userId, id) =>
    client.put(`${endpoint}like/${id}`, { userId });

// save post or unsave
export const toggleSavePost = (userId, id) =>
    client.put(`${endpoint}save/${id}`, { userId });

export const fetchSavedPosts = (id) => client.get(`${endpoint}save/${id}`);

export const editPost = (postId, caption) =>
    client.put(endpoint + postId, { caption });

export const deletePost = (userId, postId) =>
    client.delete(`${endpoint + postId}/${userId}`);
