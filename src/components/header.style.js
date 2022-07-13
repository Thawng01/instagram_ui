import styled from "styled-components";
import { Flex } from "../styles/Flex.styles";

export const HeaderContainer = styled(Flex)`
    background-color: #fff;
    height: 55px;
    width: 100%;
    border-bottom: 0.5px solid lightgray;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
`;
