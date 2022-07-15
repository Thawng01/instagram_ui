import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import useToken from "../../hook/useToken";
import useFetch from "../../hook/useFetch";
import { fetchSavedPosts } from "../../api/post";
import PostItem from "./PostItem";
import Loading from "../Loadings/Loading";
import Error from "../errors/Error";

const Saved = () => {
    const id = useToken();
    const { state } = useLocation();
    const { data, loading, error } = useFetch(fetchSavedPosts, state);

    if (loading)
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: 20,
                }}
            >
                <Loading width={30} height={30} />
            </div>
        );

    if (data?.length === 0)
        return <p style={{ padding: "2rem" }}>No post saved.</p>;

    return (
        <Container>
            {id === state ? (
                <div>
                    <p>Only you can see what you've saved</p>
                    <ItemContainer>
                        <Error error={error} />
                        {data?.map((post) => (
                            <PostItem item={post} posts={data} />
                        ))}
                    </ItemContainer>
                </div>
            ) : (
                <div className="friend-profile">
                    <span>You're not allowed to see saved posts here.</span>
                </div>
            )}
        </Container>
    );
};

export default Saved;

const Container = styled.div`
    p {
        font-family: var(--font);
        color: gray;
        font-size: 0.9rem;
        margin-bottom: 0.4rem;
    }

    .friend-profile {
        display: flex;
        justify-content: center;
        margin: 4rem 0;
        span {
            color: gray;
            font-family: var(--font);
            text-align: center;
        }
    }
`;

const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
