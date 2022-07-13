import client from "./client";

const endpoint = "/user/";

export const fetchUser = (id) => client.get(endpoint + id);

export const fetchUsers = (id) => client.get(`${endpoint}all/${id}`);

export const updateBirthDay = (id, info) => client.put(endpoint + id, info);

export const getCode = (id) => client.put("/auth/confirm/" + id);

export const updateProfileImg = (id, profileImg) => {
    let data = new FormData();
    data.append("profile", profileImg);
    return client.put(`${endpoint}profile/${id}`, data);
};

export const updateUserInfo = (id, info) =>
    client.put(`${endpoint}info/${id}`, info);

export const fetchSuggestedUser = (id, limit) =>
    client.get(`${endpoint}suggest/${id}/${limit}`);

export const searchUser = (id, name) =>
    client.get(`${endpoint}search/${name}/${id}`);
