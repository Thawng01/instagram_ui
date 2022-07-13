import client from "./client";

const endpoint = "/story/";

export const createStory = (info) => {
    const data = new FormData();
    data.append("photo", info.photo);
    data.append("userId", info.userId);
    return client.post(endpoint, data);
};

export const fetchStory = (id) => client.get(endpoint + id);
