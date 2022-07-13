import client from "./client";

export const followUser = (id, user) => client.put(`/follow/${id}`, { user });

export const fetchFollowing = (id) => client.get(`/following/${id}`);
export const fetchFollower = (id) => client.get(`/follower/${id}`);
