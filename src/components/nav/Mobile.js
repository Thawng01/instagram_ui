// header nav for small device

import { IoCameraOutline } from "react-icons/io5";
import styled from "styled-components";
import { FiSend } from "react-icons/fi";
import Logo from "./Logo";
import { device } from "../../breakpoints";

const Mobile = () => {
    return (
        <Container>
            <IoCameraOutline className="camera-icon" />
            <Logo />
            <FiSend className="send-icon" />
        </Container>
    );
};

export default Mobile;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media ${device.laptop} {
        display: none;
    }

    .camera-icon {
        font-size: 25px;
        display: block;
    }

    .send-icon {
        font-size: 25px;
    }
`;
