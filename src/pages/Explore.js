import React from "react";
import styled from "styled-components";
import RowTwo from "../components/explore/RowTwo";
import { device } from "../breakpoints";
import RowOne from "../components/explore/RowOne";
import RowThree from "../components/explore/RowThree";
import Footer from "../components/commons/Footer";
import { Flex } from "../styles/Flex.styles";

const Explore = () => {
    return (
        <Container>
            <RowOne />
            <RowTwo />
            <RowThree />

            <Footer />
        </Container>
    );
};

export default Explore;

const Container = styled(Flex)`
    margin: 85px auto 25px auto;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.tabletL} {
        width: 75%;
    }
`;
