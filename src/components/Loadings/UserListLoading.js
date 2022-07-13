import React from "react";
import styled from "styled-components";

import UserSkeleton from "./UserSkeleton";
const numbers = [1, 2, 3, 4, 5];
const UserListLoading = () => {
    return (
        <Container>
            {numbers.map((_, i) => {
                return (
                    <InnerContainer key={i}>
                        <UserSkeleton />
                    </InnerContainer>
                );
            })}
        </Container>
    );
};

export default UserListLoading;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const InnerContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 15px 0;

    .name {
        margin-left: 10px;
    }
`;
