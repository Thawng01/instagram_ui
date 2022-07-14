import React from "react";
import styled from "styled-components";
import Mobile from "../../nav/Mobile";

const Header = ({ leftIcon, title, action, onAction }) => {
    return (
        <HeaderContainer>
            <Mobile
                leftIcon={leftIcon}
                title={title}
                action={action}
                onAction={onAction}
            />
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    border-bottom: 0.2px solid #f1f1f1;
    height: 55px;
    display: flex;
    align-items: center;
    padding: 0 var(--side-margin);
    z-index: 9;
`;
