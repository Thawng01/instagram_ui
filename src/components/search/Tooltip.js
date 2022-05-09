// for header search

import styled from "styled-components";
import SearchResult from "./SearchResult";

const Tooltip = ({ visible }) => {
    if (!visible) return null;
    return (
        <Container>
            <InnerContainer>
                <SearchResult />
            </InnerContainer>
        </Container>
    );
};

export default Tooltip;

const Container = styled.div`
    background-color: #fff;
    position: absolute;
    top: 130%;
    margin-left: -50px;
    width: 380px;
    height: 350px;
    border-radius: 4px;
    box-shadow: 0px 1px 7px 1px rgba(0, 0, 0, 0.2);

    &::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent white transparent;
    }
`;

const InnerContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: 12px;
    overflow-y: auto;
`;
