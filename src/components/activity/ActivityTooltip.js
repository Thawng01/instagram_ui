import styled from "styled-components";
import Overlay from "../commons/Overlay";

const ActivityTooltip = ({ visible, onClose }) => {
    if (!visible) return null;
    return (
        <>
            <Overlay visible={visible} onClose={onClose} />
            <Container>
                <InnerContainer>
                    <p>Your activity will appear here.</p>
                </InnerContainer>
            </Container>
        </>
    );
};

export default ActivityTooltip;

const Container = styled.div`
    background-color: #fff;
    position: absolute;
    top: 170%;
    right: -50px;
    width: 400px;
    height: 300px;
    border-radius: 5px;
    box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.2);
    z-index: 9;

    &::after {
        content: "";
        position: absolute;
        bottom: 100%;
        right: 13%;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent white transparent;
    }
`;

const InnerContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-family: var(--font);
        color: gray;
    }
`;
