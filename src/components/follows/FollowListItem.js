import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Follow from "../side/Follow";

const FollowListItem = ({ item, people, color }) => {
    const navigate = useNavigate();

    return (
        <ItemContainer>
            <Left>
                <Image src={item?.profileImg} />
                <Text
                    onClick={() => navigate("/profile/", { state: item._id })}
                >
                    <p id="username">{item?.username}</p>
                    <p id="name">{item?.fullname}</p>
                </Text>
            </Left>
            <Right people={people}>
                <Follow
                    follower={item?.follower}
                    following={item?.following}
                    userId={item?._id}
                    color={color}
                />
            </Right>
        </ItemContainer>
    );
};

export default FollowListItem;

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 5px 18px 5px;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
`;

const Image = styled.img`
    width: 35px;
    border-radius: 50%;
`;

const Text = styled.div`
    margin-left: 10px;
    cursor: pointer;

    #username {
        font-size: var(--textSize);
        font-weight: 600;
    }

    #name {
        font-size: 14px;
        color: gray;
    }
`;

const Right = styled.div`
    border: 1px solid #ddd;
    padding: 4px 10px;
    border-radius: 5px;
    background-color: ${(prop) => (prop.people ? "#0095f6" : "")};
`;
