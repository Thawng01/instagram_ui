import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const lists = [
    { id: 1, label: "People", path: "following/" },
    { id: 2, label: "Hashtags", path: "following_hashtag/" },
];

const FollowTab = () => {
    return (
        <Tab>
            {lists.map((item) => {
                return (
                    <NavLink
                        to={{ pathname: item.path }}
                        state={{}}
                        key={item.id}
                        className="tab_link"
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "#262673" : "lightgray",
                                borderBottom: isActive
                                    ? "0.1px solid #000"
                                    : "",
                            };
                        }}
                    >
                        <span>{item.label}</span>
                    </NavLink>
                );
            })}
        </Tab>
    );
};

export default FollowTab;

const Tab = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.1px solid lightgray;
    height: 40px;

    .tab_link {
        display: flex;
        flex: 0.5;
        justify-content: center;
        align-items: center;
        height: 100%;
        cursor: pointer;
        text-decoration: none;
        font-weight: 600;
    }
`;
