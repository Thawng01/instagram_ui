import styled from "styled-components";
import { device } from "../../breakpoints";

const Box = ({ children }) => {
    return <Container>{children}</Container>;
};

export default Box;

const Container = styled.div`
    background-color: inherit;
    width: 100%;
    padding: 25px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.tablet} {
        background-color: #fff;
        border: 0.2px solid lightgray;
    }

    img {
        height: 50px;
        width: 180px;
        margin: 10px 0;
    }

    #fb-container {
        margin-top: 15px;

        #forgot-pw {
            text-align: center;
            margin-top: 15px;
            font-size: 14px;
        }
    }

    h4 {
        color: gray;
        text-align: center;
        font-weight: 400;
    }

    #term {
        text-align: center;
        color: gray;
        font-size: 13px;
    }
`;
