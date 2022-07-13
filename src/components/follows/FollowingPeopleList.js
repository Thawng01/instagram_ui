import React from "react";
import styled from "styled-components";

import { fetchFollowing } from "../../api/follow";
import UserListLoading from "../Loadings/UserListLoading";
import FollowListItem from "./FollowListItem";
import WithSubscription from "../HOC/HOC";

const FollowingPeopleList = ({ data, loading }) => {
    let content;

    if (loading) {
        content = <UserListLoading />;
    } else if (data?.length === 0) {
        content = <p>No following.</p>;
    } else if (data?.length > 0) {
        content = data?.map((item) => {
            return <FollowListItem key={item._id} item={item} color="#000" />;
        });
    }

    return <Container>{content}</Container>;
};

export default WithSubscription(FollowingPeopleList, fetchFollowing);

const Container = styled.div`
    overflow: auto;
    height: calc(420px - 85px);
    padding: 10px 15px;
`;
