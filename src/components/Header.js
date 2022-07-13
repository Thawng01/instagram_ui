import Nav from "./nav/Nav";
import ErrorBoundary from "./errors/ErrorBoundary";
import { HeaderContainer } from "./header.style";
import MobileContainer from "../components/nav/MobileContainer";

const Header = () => {
    return (
        <ErrorBoundary>
            <HeaderContainer>
                <Nav />
                <MobileContainer />
            </HeaderContainer>
        </ErrorBoundary>
    );
};

export default Header;
