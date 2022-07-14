import React from "react";
import styled from "styled-components";

import FollowListItem from "../follows/FollowListItem";
import { fetchSuggestedUser } from "../../api/user";
import useToken from "../../hook/useToken";
import UserListLoading from "../Loadings/UserListLoading";
import Footer from "../commons/Footer";
import useFetch from "../../hook/useFetch";
import ErrorBoundary from "../errors/ErrorBoundary";

const People = () => {
    const id = useToken();
    const { data, loading } = useFetch(fetchSuggestedUser, id, 20);

    return (
        <Container>
            <ErrorBoundary>
                <h4>Suggested</h4>
                <ItemContainer>
                    {loading ? (
                        <UserListLoading />
                    ) : (
                        data?.map((item) => {
                            return (
                                <FollowListItem
                                    key={item._id}
                                    item={item}
                                    people
                                    color="#fff"
                                />
                            );
                        })
                    )}
                </ItemContainer>
            </ErrorBoundary>
            <Footer />
        </Container>
    );
};

export default People;

const Container = styled.div`
    margin: 100px auto;
    width: 550px;
    padding: 0 2rem;

    h4 {
        margin-bottom: 5px;
    }
`;

const ItemContainer = styled.div`
    background-color: #fff;
    padding: 10px;
    border-radius: 3px;
`;
