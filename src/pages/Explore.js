import React, { Fragment } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import { device } from "../breakpoints";
import Footer from "../components/commons/Footer";
import { Flex } from "../styles/Flex.styles";
import { HeaderContainer } from "../components/header.style";
import SearchHeader from "../components/search/SearchHeader";
import CardContainer from "../components/explore/CardContainer";
import Search from "./Search";
import NavBottom from "../components/nav/NavBottom";
import Nav from "../components/nav/Nav";

const Explore = () => {
    const [value, setValue] = useState("");
    const { pathname } = useLocation();

    const handleChange = (e) => setValue(e.target.value);

    return (
        <>
            <HeaderContainer>
                <Nav />
                <SearchHeader value={value} onChange={handleChange} />
            </HeaderContainer>
            <Container>
                {pathname.includes("search") ? (
                    <Search value={value} />
                ) : (
                    <CardContainer />
                )}
                <Footer />
            </Container>
            <NavBottom />
        </>
    );
};

export default Explore;

const Container = styled(Flex)`
    margin: 85px auto 25px auto;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.tabletL} {
        width: 50rem;
    }
`;
