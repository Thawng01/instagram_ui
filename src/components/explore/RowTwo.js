import styled from "styled-components";
import Card from "./Card";
import { device } from "../../breakpoints";

const RowTwo = () => {
    return (
        <Row>
            <Column>
                <CardContainer>
                    <Card />
                </CardContainer>
                <CardContainer>
                    <Card />
                </CardContainer>
            </Column>

            <Column>
                <CardContainer>
                    <Card />
                </CardContainer>
                <CardContainer>
                    <Card />
                </CardContainer>
            </Column>

            <Column>
                <CardContainer>
                    <Card />
                </CardContainer>
                <CardContainer>
                    <Card />
                </CardContainer>
            </Column>
        </Row>
    );
};

export default RowTwo;
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5px;

    @media ${device.tabletL} {
        margin-bottom: 18px;
    }
`;

const Column = styled.div`
    display: flex;
    flex: 0.333;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.tabletL} {
        flex: 0.32;
    }
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 49.95%;

    @media ${device.tabletL} {
        height: 48.5%;
    }
`;
