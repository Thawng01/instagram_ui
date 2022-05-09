import styled from "styled-components";
import { device } from "../breakpoints";
import SearchResult from "../components/search/SearchResult";

const Search = () => {
    return (
        <Container>
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
        </Container>
    );
};

export default Search;

const Container = styled.div`
    margin: 80px auto auto auto;
    width: 100%;

    @media ${device.tabletL} {
        width: 75%;
    }
`;
