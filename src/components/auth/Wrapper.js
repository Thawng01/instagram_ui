import styled from "styled-components";
import Footer from "../../components/commons/Footer";
import { device } from "../../breakpoints";
import ErrorBoundary from "../errors/ErrorBoundary";

const Wrapper = ({ children }) => {
    return (
        <ErrorBoundary>
            <Container>
                <InnerContainer>{children}</InnerContainer>
                <Footer />
            </Container>
        </ErrorBoundary>
    );
};

export default Wrapper;
const Container = styled.div`
    margin-top: 40px;
`;

const InnerContainer = styled.div`
    width: 100%;
    margin: 30px auto;

    @media ${device.tablet} {
        width: 60%;
    }

    @media ${device.laptop} {
        width: 28%;
    }
`;
