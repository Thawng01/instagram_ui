import React from "react";
import styled from "styled-components";

import Header from "../Header";
import FollowListItem from "../follows/FollowListItem";
import { fetchSuggestedUser } from "../../api/user";
import useToken from "../../hook/useToken";
import UserListLoading from "../Loadings/UserListLoading";
import Footer from "../commons/Footer";
import useFetch from "../../hook/useFetch";
import NavBottom from "../nav/NavBottom";

const People = () => {
    const id = useToken();
    const { data, loading } = useFetch(fetchSuggestedUser, id, 20);

    return (
        <>
            <Header />
            <Container>
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
                <Footer />
            </Container>
            <NavBottom />
        </>
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
