import { Fragment } from "react";
import styled from "styled-components";
import { FiPlusSquare } from "react-icons/fi";
import {
    IoHomeOutline,
    IoHeartOutline,
    IoSearchOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { device } from "../../breakpoints";

const BottomNav = [
    {
        id: 1,
        icon: <IoHomeOutline style={{ height: 23, width: 23 }} />,
        path: "/",
    },
    {
        id: 2,
        icon: <IoSearchOutline style={{ height: 23, width: 23 }} />,
        path: "/",
    },
    {
        id: 3,
        icon: <FiPlusSquare style={{ height: 23, width: 23 }} />,
        path: "/",
    },
    {
        id: 4,
        icon: <IoHeartOutline style={{ height: 23, width: 23 }} />,
        path: "/",
    },
];

const NavBottom = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/profile");
    };
    return (
        <Container>
            <NavItemContainer>
                {BottomNav.map((item) => {
                    return <Fragment key={item.id}>{item.icon}</Fragment>;
                })}
                <img
                    src="/logo.png"
                    alt="account"
                    id="account-img"
                    onClick={handleNavigation}
                />
            </NavItemContainer>
        </Container>
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
    height: 50px;
    border-top: 0.2px solid lightgray;

    @media ${device.laptop} {
        display: none;
    }
`;

const NavItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    #account-img {
        height: 25px;
        width: 25px;
        border-radius: 50%;
    }
`;
