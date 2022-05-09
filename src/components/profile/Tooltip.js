import styled from "styled-components";
import {
    IoBookmarksOutline,
    IoPersonCircleOutline,
    IoSettingsOutline,
    IoSyncCircleOutline,
} from "react-icons/io5";

import Overlay from "../commons/Overlay";

const items = [
    {
        id: 1,
        icon: <IoPersonCircleOutline style={{ width: 19, height: 19 }} />,
        title: "Profile",
    },
    {
        id: 1,
        icon: <IoBookmarksOutline style={{ width: 19, height: 19 }} />,
        title: "Saved",
    },
    {
        id: 1,
        icon: <IoSettingsOutline style={{ width: 19, height: 19 }} />,
        title: "Settings",
    },
    {
        id: 1,
        icon: <IoSyncCircleOutline style={{ width: 19, height: 19 }} />,
        title: "Switch accounts",
    },
];

const Tooltip = ({ visible, onClose }) => {
    if (!visible) return null;
    return (
        <>
            <Overlay visible={visible} onClose={onClose} />
            <InnerContainer>
                {items.map((item) => {
                    return (
                        <div className="item-container">
                            {item.icon}
                            <Title>{item.title}</Title>
                        </div>
                    );
                })}

                <p id="logout">Log Out</p>
            </InnerContainer>
        </>
    );
};

export default Tooltip;

const InnerContainer = styled.div`
    position: absolute;
    right: -20px;
    top: 160%;
    background-color: #fff;
    width: 220px;
    border-radius: 6px;
    box-shadow: 0px 0px 10px 1.5px rgba(0, 0, 0, 0.15);
    z-index: 9;

    &::after {
        content: "";
        position: absolute;
        bottom: 100%;
        right: 10%;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent white transparent;
    }

    .item-container {
        display: flex;
        align-items: center;
        padding: 9.5px;

        &:hover {
            background-color: #f9f9f9;
        }
    }

    #logout {
        padding: 10px 10px 12px 10px;
        font-size: 14.5px;
        border-top: 0.4px solid lightgray;

        &:hover {
            background-color: #f9f9f9;
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`;

const Title = styled.p`
    font-size: 14px;
    padding-left: 8px;
`;
