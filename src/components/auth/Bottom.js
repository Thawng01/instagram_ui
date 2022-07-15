import styled from "styled-components";
import { Link } from "react-router-dom";

import AppLinkIcon from "../commons/AppLinkIcon";
import { device } from "../../breakpoints";

const Bottom = ({ text, signin, path }) => {
    return (
        <>
            <SmallBox>
                <span>
                    {text}
                    <Link to={path} id="log-in">
                        {signin}
                    </Link>
                </span>
            </SmallBox>

            <GetApp>
                <span>Get an app</span>
                <AppLinkIcon />
            </GetApp>
        </>
    );
};

export default Bottom;

const SmallBox = styled.div`
    height: 70px;
    width: 100%;
    background-color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

    #log-in {
        color: var(--secondary);
        text-decoration: none;
        padding-left: 5px;
    }

    span {
        font-family: var(--font);
    }

    @media ${device.tablet} {
        border: 0.5px solid lightgray;
        background-color: #fff;
    }
`;

const GetApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    span {
        margin-bottom: 10px;
    }
`;
