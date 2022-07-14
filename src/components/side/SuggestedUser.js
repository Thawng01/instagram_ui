import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { fetchSuggestedUser } from "../../api/user";
import useToken from "../../hook/useToken";
import UserImage from "../commons/UserImage";
import Follow from "./Follow";
import UserListLoading from "../Loadings/UserListLoading";
import useFetch from "../../hook/useFetch";
import Error from "../errors/Error";

const SuggestedUser = () => {
    const id = useToken();
    const { data, loading, error } = useFetch(fetchSuggestedUser, id, 5);

    const navigate = useNavigate();

    return (
        <Container>
            <SuggestionContainer>
                <Text>Suggestions for you</Text>
                <AllSuggestion onClick={() => navigate("/explore/people/")}>
                    See all
                </AllSuggestion>
            </SuggestionContainer>

            <SuggestedUserContainer>
                <Error error={error} />
                {loading ? (
                    <UserListLoading />
                ) : (
                    data?.map((user) => {
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
