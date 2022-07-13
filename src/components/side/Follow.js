import React, { useState } from "react";
import styled from "styled-components";

import useToken from "../../hook/useToken";
import useApi from "../../hook/useApi";
import { followUser } from "../../api/follow";

const Follow = ({ userId, following, follower, color }) => {
    const id = useToken();

    const [isFollowed, setIsFollowed] = useState(
        follower.includes(id) ? true : false
    );
    const followUserApi = useApi(followUser);

    const handleUserFollow = async () => {
        await followUserApi.request(id, userId);
        setIsFollowed(!isFollowed);
    };

    return (
        <Container color={color}>
            <p id="follow" onClick={handleUserFollow}>
                {isFollowed
                    ? "Following"
                    : following.includes(id)
                    ? "Follow back"
                    : "Follow"}
            </p>
        </Container>
    );
};

export default Follow;

const Container = styled.div`
    #follow {
        color: ${(prop) => (prop.color ? prop.color : "#27a2db")};
        font-weight: 600;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        font-size: 13px;
        cursor: pointer;
    }
`;
