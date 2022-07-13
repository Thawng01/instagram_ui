import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { fetchSuggestedUser } from "../../api/user";
import useApi from "../../hook/useApi";
import useToken from "../../hook/useToken";
import UserImage from "../commons/UserImage";
import Follow from "./Follow";
import UserListLoading from "../Loadings/UserListLoading";

const SuggestedUser = () => {
    const userApi = useApi(fetchSuggestedUser);

    const navigate = useNavigate();

    const id = useToken();

    useEffect(() => {
        if (id) {
            userApi.request(id, 5);
        }
    }, [id]);

    return (
        <Container>
            <SuggestionContainer>
                <Text>Suggestions for you</Text>
                <AllSuggestion onClick={() => navigate("/explore/people/")}>
                    See all
                </AllSuggestion>
            </SuggestionContainer>

            <SuggestedUserContainer>
                {userApi.loading ? (
                    <UserListLoading />
                ) : (
                    userApi.data?.map((user) => {
                        return (
                            <UserImageContainer key={user._id}>
                                <UserImage
                                    avatar={user.profileImg}
                                    username={user.username}
                                    id={user._id}
                                    width={32}
                                    height={32}
                                    suggestedUser
                                />

                                <Follow
                                    following={user.following}
                                    follower={user.follower}
                                    userId={user._id}
                                />
                            </UserImageContainer>
                        );
                    })
                )}
            </SuggestedUserContainer>
        </Container>
    );
};

export default SuggestedUser;

const Container = styled.div`
    margin-top: 30px;
`;

const SuggestionContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Text = styled.p`
    color: gray;
    font-weight: 700;
`;

const AllSuggestion = styled.span`
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
`;

const SuggestedUserContainer = styled.div`
    margin: 12px 0;
`;

const UserImageContainer = styled.div`
    margin: 12px 0 12px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
