import React from "react";
import styled from "styled-components";

import { fetchUserPosts } from "../../api/post";
import Loading from "../Loadings/Loading";
import PostItem from "./PostItem";
import { useLocation } from "react-router-dom";
import useFetch from "../../hook/useFetch";

const Post = () => {
    const { state } = useLocation();
    const { data, loading, error } = useFetch(fetchUserPosts, state);

    let content;

    if (loading) {
        content = <Loading width={30} height={30} />;
    } else if (error) {
        content = <p>Sorry, something failed.</p>;
    } else if (data?.length > 0) {
        content = data?.map((item) => {
            return <PostItem key={item._id} item={item} posts={data} />;
        });
    } else if (data?.length === 0) {
        content = <p>No post yet.</p>;
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
