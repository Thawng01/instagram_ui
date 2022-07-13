import styled from "styled-components";

import { device } from "../breakpoints";
import SearchResult from "../components/search/SearchResult";

const Search = ({ value }) => {
    return (
        <Container>
            <SearchResult value={value} />
        </Container>
    );
};

export default Search;

const Container = styled.div`
    margin: auto;
    width: 100%;

    @media ${device.tabletL} {
        width: 75%;
    }
`;
