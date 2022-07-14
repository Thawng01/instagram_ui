import styled from "styled-components";
import { FiPlusSquare } from "react-icons/fi";
import {
    IoHomeOutline,
    IoHeartOutline,
    IoSearchOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { device } from "../../breakpoints";
import useUser from "../../hook/useUser";
import ErrorBoundary from "../errors/ErrorBoundary";

const NavBottom = () => {
    const navigate = useNavigate();

    const { user } = useUser();

    const BottomNav = [
        {
            id: 1,
            icon: <IoHomeOutline style={{ height: 25, width: 25 }} />,
            path: "/",
        },
        {
            id: 2,
            icon: <IoSearchOutline style={{ height: 25, width: 25 }} />,
            path: "/explore",
        },
        {
            id: 3,
            icon: <FiPlusSquare style={{ height: 25, width: 25 }} />,
            path: "/create",
        },
        {
            id: 4,
            icon: <IoHeartOutline style={{ height: 25, width: 25 }} />,
            path: "/",
        },
        {
            id: 5,
            icon: <img src={user?.profileImg} alt="account" id="account-img" />,
            path: "/profile",
        },
    ];

    const handleNavigation = (path) => {
        navigate(path, { state: user._id });
    };

    return (
        <ErrorBoundary>
            <Container>
                <NavItemContainer>
                    {BottomNav.map((item) => {
                        return (
                            <div
                                id="items-container"
                                key={item.id}
                                onClick={() => handleNavigation(item.path)}
                            >
                                {item.icon}
                            </div>
                        );
                    })}
                </NavItemContainer>
            </Container>
        </ErrorBoundary>
    );
};

export default NavBottom;

const Container = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0 15px;
    width: 100%;
    background-color: #fff;
    height: 55px;
    border-top: 0.2px solid lightgray;
    z-index: 99;

    @media ${device.laptop} {
        display: none;
    }
`;

const NavItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    #items-container {
        display: flex;
        align-items: center;
    }

    #account-img {
        height: 25px;
        width: 25px;
        border-radius: 50%;
    }
`;
