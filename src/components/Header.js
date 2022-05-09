import styled from "styled-components";
import Nav from "./nav/Nav";

const Header = () => {
    return (
        <Container>
            <Nav />
        </Container>
    );
};

export default Header;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 60px;
    width: 100%;
    border-bottom: 0.5px solid lightgray;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
`;
