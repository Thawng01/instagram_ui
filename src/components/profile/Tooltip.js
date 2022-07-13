import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
    IoBookmarksOutline,
    IoPersonCircleOutline,
    IoSettingsOutline,
    IoSyncCircleOutline,
} from "react-icons/io5";

import Overlay from "../commons/Overlay";
import useToken from "../../hook/useToken";

const items = [
    {
        id: 1,
        icon: <IoPersonCircleOutline style={{ width: 19, height: 19 }} />,
        title: "Profile",
        path: "/profile/",
    },
    {
        id: 2,
        icon: <IoBookmarksOutline style={{ width: 19, height: 19 }} />,
        title: "Saved",
        path: "/profile/saved",
    },
    {
        id: 3,
        icon: <IoSettingsOutline style={{ width: 19, height: 19 }} />,
        title: "Settings",
        path: "/accounts/edit",
    },
    {
        id: 4,
        icon: <IoSyncCircleOutline style={{ width: 19, height: 19 }} />,
        title: "Switch accounts",
        path: "",
    },
];

const Tooltip = ({ visible, onClose }) => {
    const navigate = useNavigate();
    const id = useToken();

    const handleNavigation = (path) => {
        navigate(path, { state: id });
        onClose();
    };

    const handleLogout = () => {
        localStorage.removeItem("x-auth-token");
        navigate("/login");
        onClose();
    };

    if (!visible) return null;
    return (
        <>
            <Overlay visible={visible} onClose={onClose} />
            <InnerContainer>
                {items.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="item-container"
                            onClick={() => handleNavigation(item.path)}
                        >
                            {item.icon}
                            <Title>{item.title}</Title>
                        </div>
                    );
                })}

                <p id="logout" onClick={handleLogout}>
                    Log Out
                </p>
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
        padding: 9.5px 12px;

        &:hover {
            background-color: #f9f9f9;
        }
    }

    #logout {
        padding: 10px 10px 12px 14px;
        font-size: 14.5px;
        border-top: 0.4px solid lightgray;

        &:hover {
            background-color: #f9f9f9;
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            cursor: pointer;
        }
    }
`;

const Title = styled.p`
    font-size: 14px;
    padding-left: 8px;
`;
