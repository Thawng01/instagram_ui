import React from "react";
import styled from "styled-components";
import UserImage from "../commons/UserImage";

const SuggestedUser = () => {
    return (
        <Container>
            <SuggestionContainer>
                <Text>Suggestions for you</Text>
                <AllSuggestion>See all</AllSuggestion>
            </SuggestionContainer>

            <SuggestedUserContainer>
                <UserImageContainer>
                    <UserImage width={30} height={30} suggestedUser />
                </UserImageContainer>
                <UserImageContainer>
                    <UserImage width={30} height={30} suggestedUser />
                </UserImageContainer>
                <UserImageContainer>
                    <UserImage width={30} height={30} suggestedUser />
                </UserImageContainer>
                <UserImageContainer>
                    <UserImage width={30} height={30} suggestedUser />
                </UserImageContainer>
                <UserImageContainer>
                    <UserImage width={30} height={30} suggestedUser />
                </UserImageContainer>
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
`;

const SuggestedUserContainer = styled.div`
    margin: 12px 0;
`;

const UserImageContainer = styled.div`
    margin: 12px 0 12px 5px;
`;
