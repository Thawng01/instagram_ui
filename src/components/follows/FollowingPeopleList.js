import React from "react";
import styled from "styled-components";

import { fetchFollowing } from "../../api/follow";
import UserListLoading from "../Loadings/UserListLoading";
import FollowListItem from "./FollowListItem";
import { useLocation } from "react-router-dom";
import useFetch from "../../hook/useFetch";

const FollowingPeopleList = () => {
    const { state } = useLocation();
    const { data, loading, error } = useFetch(fetchFollowing, state);

    let content;

    if (loading) {
        content = <UserListLoading />;
    } else if (data?.length === 0) {
        content = <p>No following.</p>;
    } else if (error) {
        content = <p>Sorry! something went wrong.</p>;
    } else if (data?.length > 0) {
        content = data?.map((item) => {
            return <FollowListItem key={item._id} item={item} color="#000" />;
        });
    }

    return <Container>{content}</Container>;
};

export default FollowingPeopleList;

const Container = styled.div`
    overflow: auto;
    height: calc(420px - 85px);
    padding: 10px 15px;
`;
