import styled from "styled-components";
import { Flex } from "../../styles/Flex.styles";

export const Title = styled(Flex)`
    height: 10%;
    border-bottom: 0.5px solid lightgray;
    justify-content: ${(prop) => (prop.image ? "space-between" : "center")};
    font-weight: 600;
    padding: 0 13px;

    .arrow-back {
        font-size: 25px;
        cursor: pointer;
    }

    .next {
        color: var(--secondary);
        cursor: pointer;
    }
`;

export const Content = styled.div`
    display: flex;
`;

export const ImgContainer = styled.div`
    width: ${(prop) => (prop.next ? "50%" : "100%")};
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;
