// header nav for small device

import { IoCameraOutline } from "react-icons/io5";
import styled from "styled-components";
import { FiSend } from "react-icons/fi";
import Logo from "./Logo";

const Mobile = ({ leftIcon, title, action, onAction }) => {
    return (
        <Container>
            {leftIcon ? <>{leftIcon}</> : <IoCameraOutline id="camera-icon" />}
            {title ? <span>{title}</span> : <Logo />}
            {action ? (
                <span id="next-action" onClick={onAction}>
                    {action}
                </span>
            ) : (
                <FiSend id="send-icon" />
            )}
        </Container>
    );
};

export default Mobile;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 0.7rem;

    #camera-icon {
        font-size: 25px;
        display: block;
    }

    #send-icon {
        font-size: 25px;
    }

    #next-action {
        color: var(--secondary);
        cursor: pointer;
    }
    span {
        font-weight: 600;
    }
`;
