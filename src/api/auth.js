import client from "./client";

const endpoint = "/auth/";

export const register = (userInfo) => client.post(endpoint, userInfo);
export const confirmRegistion = (id, code) => client.post(endpoint + id, code);

export const login = (userInfo) =>
    client.post(endpoint + "account/login", userInfo);

export const loginWithFacebook = (info) =>
    client.post(`${endpoint}facebook/login`, info);
