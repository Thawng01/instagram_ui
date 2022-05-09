import styled from "styled-components";
import { Flex } from "../styles/Flex.styles";

export const Container = styled(Flex)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 99;

    .close {
        position: absolute;
        right: 15px;
        top: 15px;
        color: #fff;
        font-size: 35px;
        cursor: pointer;
    }
`;

export const Box = styled.div`
    background-color: #fff;
    height: 420px;
    width: ${(prop) => (prop.next ? "700px" : "400px")};
    border-radius: 10px;
    overflow: hidden;
    transition: all 600ms ease;
`;

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

export const ImgContainer = styled.div`
    position: relative;
    width: 100%;
    height: 90%;
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: fill;
`;
