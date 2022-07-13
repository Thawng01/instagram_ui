import React, { useEffect } from "react";
import styled from "styled-components";

import { fetchUserPosts } from "../../api/post";
import useApi from "../../hook/useApi";
import Loading from "../Loadings/Loading";
import PostItem from "./PostItem";
import { useLocation } from "react-router-dom";
const Post = () => {
    const { state } = useLocation();
    const { request, data, loading } = useApi(fetchUserPosts);

    useEffect(() => {
        if (state) request(state);
    }, [state]);

    let content;

    if (loading) {
        content = <Loading width={30} height={30} />;
    } else if (data?.length > 0) {
        content = data?.map((item) => {
            return <PostItem key={item._id} item={item} posts={data} />;
        });
    } else if (data?.length === 0) {
        content = <p>No post saved yet.</p>;
    }

    return <Container>{content}</Container>;
};

export default Post;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    p {
        color: gray;
        font-family: var(--font);
        padding: 2rem;
        text-align: center;
    }
`;
