import styled from "styled-components";

import Loading from "../Loadings/Loading";
import { Flex } from "../../styles/Flex.styles";

const Button = ({ enable, loading, title, onSubmit }) => {
    return (
        <Container
            enable={enable}
            disabled={loading || !enable}
            onClick={onSubmit}
        >
            {loading ? (
                <LoadingContainer>
                    <Loading width={15} height={15} />
                </LoadingContainer>
            ) : (
                title
            )}
        </Container>
    );
};

export default Button;

const Container = styled.button`
    width: 100%;
    height: 40px;
    margin-top: 12px;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: var(--secondary);
    opacity: ${(prop) => (prop.enable ? 1 : 0.3)};
    color: #fff;
    font-size: var(--textSize);
    position: relative;
`;

const LoadingContainer = styled(Flex)``;
