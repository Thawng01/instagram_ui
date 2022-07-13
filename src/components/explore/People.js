import React, { useEffect } from "react";
import styled from "styled-components";

import Header from "../Header";
import FollowListItem from "../follows/FollowListItem";
import { fetchSuggestedUser } from "../../api/user";
import useApi from "../../hook/useApi";
import useToken from "../../hook/useToken";
import UserListLoading from "../Loadings/UserListLoading";
import Footer from "../commons/Footer";

const People = () => {
    const userApi = useApi(fetchSuggestedUser);
    const id = useToken();

    useEffect(() => {
        if (id) {
            userApi.request(id, 20);
        }
    }, [id, userApi]);

    return (
        <>
            <Header />
            <Container>
                <h4>Suggested</h4>
                <ItemContainer>
                    {userApi.loading ? (
                        <UserListLoading />
                    ) : (
                        userApi.data?.map((item) => {
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
        </>
    );
};

export default People;

const Container = styled.div`
    margin: 100px auto;
    width: 550px;

    h4 {
        margin-bottom: 5px;
    }
`;

const ItemContainer = styled.div`
    background-color: #fff;
    padding: 10px;
    border-radius: 3px;
`;
