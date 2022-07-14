import React from "react";
import styled from "styled-components";

import UserListLoading from "../Loadings/UserListLoading";
import FollowListItem from "./FollowListItem";
import { fetchFollower } from "../../api/follow";
import WithSubscription from "../HOC/HOC";
import { useLocation } from "react-router-dom";
import useFetch from "../../hook/useFetch";

const FollowerPeopleList = () => {
    const { state } = useLocation();
    const { data, loading, error } = useFetch(fetchFollower, state);

    let content;

    if (loading) {
        content = <UserListLoading />;
    } else if (data?.length === 0) {
        content = <p>No follower.</p>;
    } else if (error) {
        content = <p>Sorry! Something went wrong.</p>;
    } else if (data?.length > 0) {
        content = data?.map((item) => {
            return <FollowListItem key={item._id} item={item} color="#000" />;
        });
    }

    return <Container>{content}</Container>;
};

export default WithSubscription(FollowerPeopleList, fetchFollower);
const Container = styled.div`
    overflow: auto;
    height: calc(420px - 85px);
    padding: 10px 15px;
`;
