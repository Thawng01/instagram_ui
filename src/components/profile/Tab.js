import { NavLink, useLocation } from "react-router-dom";
import { RiAccountPinBoxLine, RiBookmarkLine } from "react-icons/ri";
import { IoMdGrid } from "react-icons/io";
import styled from "styled-components";

import { device } from "../../breakpoints";

const tabs = [
    {
        id: 1,
        label: "POSTS",
        icon: <IoMdGrid className="tab-icon" />,
        path: "/profile/",
    },
    {
        id: 2,
        label: "SAVED",
        icon: <RiBookmarkLine className="tab-icon" />,
        path: "saved",
    },
    {
        id: 3,
        label: "TAGGED",
        icon: <RiAccountPinBoxLine className="tab-icon" />,
        path: "tagged",
    },
];

const Tab = () => {
    const { state } = useLocation();
    return (
        <TabContainer>
            {tabs.map((t) => {
                return (
                    <NavLink
                        key={t.id}
                        className="tab"
                        to={{ pathname: t.path }}
                        state={state}
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "#000" : "gray",
                            };
                        }}
                    >
                        {t.icon}
                        <span>{t.label}</span>
                    </NavLink>
                );
            })}
        </TabContainer>
    );
};

export default Tab;

const TabContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin: auto;
    height: 50px;

    .tab {
        display: flex;
        align-items: center;
        text-decoration: none;

        .tab-icon {
            font-size: 14px;
        }

        span {
            margin-left: 6px;
            font-size: 14px;
            display: none;

            @media ${device.tabletL} {
                display: block;
            }
        }
    }

    @media ${device.tabletL} {
        width: 40%;
    }
`;
