import React from "react";
import styled from "styled-components";

import Mobile from "./Mobile";
import { device } from "../../breakpoints";

const MobileContainer = () => {
    return (
        <Container>
            <Mobile />
        </Container>
    );
};

export default MobileContainer;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media ${device.laptop} {
        display: none;
    }
`;
