import styled from "styled-components";
import { IoCopyOutline, IoHeart, IoChatbubble } from "react-icons/io5";
import { Flex } from "../../styles/Flex.styles";
const Card = () => {
    return (
        <Container>
            <IoCopyOutline className="mark-icon" />
            <Image src="/logo.png" alt="card" />

            <Overlay>
                <InnerWrap>
                    <IconContainer>
                        <IoHeart className="icon" />
                        <span>210</span>
                    </IconContainer>
                    <IconContainer>
                        <IoChatbubble className="icon" />
                        <span>28</span>
                    </IconContainer>
                </InnerWrap>
            </Overlay>
        </Container>
    );
};

export default Card;

const Container = styled.div`
    height: 100%;
    width: 100%;
    position: relative;

    .mark-icon {
        position: absolute;
        color: #fff;
        right: 15px;
        top: 15px;
        font-size: 20px;
    }
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: fill;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 100%;
    display: none;
    align-items: center;
    justify-content: space-evenly;
    background-color: rgba(0, 0, 0, 0.2);

    ${Container}:hover & {
        display: flex;
    }
`;

const InnerWrap = styled(Flex)`
    width: 150px;
    justify-content: space-between;
`;

const IconContainer = styled(Flex)`
    .icon {
        color: #fff;
        font-size: 25px;
        margin-right: 5px;
    }

    span {
        color: #fff;
    }
`;
