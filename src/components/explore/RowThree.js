import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { device } from "../../breakpoints";

const RowThree = () => {
    return (
        <Row>
            <OneBigItem>
                <Card />
            </OneBigItem>
            <TwoSmallItem>
                <CardContainer>
                    <Card />
                </CardContainer>

                <CardContainer>
                    <Card />
                </CardContainer>
            </TwoSmallItem>
        </Row>
    );
};

export default RowThree;
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5px;

    @media ${device.tabletL} {
        margin-bottom: 18px;
    }
`;

const TwoSmallItem = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.333;
    justify-content: space-between;

    @media ${device.tabletL} {
        flex: 0.32;
    }
`;

const CardContainer = styled.div`
    height: 49.95%;

    @media ${device.tabletL} {
        height: 48.5%;
    }
`;

const OneBigItem = styled.div`
    display: flex;
    flex: 0.666;

    @media ${device.tabletL} {
        flex: 0.66;
    }
`;
