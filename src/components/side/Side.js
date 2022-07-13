import React from "react";
import styled from "styled-components";

import UserImage from "../commons/UserImage";
import SuggestedUser from "./SuggestedUser";
import useUser from "../../hook/useUser";
import { device } from "../../breakpoints";
import ErrorBoundary from "../errors/ErrorBoundary";
import Loading from "../Loadings/Loading";

const items = [
    "About",
    "Help",
    "Press",
    "API",
    "Job",
    "Privacy",
    "Terms",
    "Locations",
    "Top Account",
    "Hashtags",
    "Language",
];

const Side = () => {
    const { user, loading } = useUser();

    return (
        <Container>
            <ErrorBoundary>
                {loading ? (
                    <Loading height={30} width={30} />
                ) : (
                    <UserImage
                        avatar={user?.profileImg}
                        username={user?.username}
                        fullname={user?.fullname}
                        id={user?._id}
                        width={55}
                        height={55}
                        profile
                    />
                )}
            </ErrorBoundary>

            <ErrorBoundary>
                <SuggestedUser />
            </ErrorBoundary>

            <ErrorBoundary>
                <FooterContainer>
                    <Item>
                        {items.map((item, i) => {
                            return (
                                <div key={i} className="item-one-container">
                                    <span className="item-one">{item}</span>
                                    {items.length - 1 !== i && (
                                        <span className="dot" />
                                    )}
                                </div>
                            );
                        })}
                    </Item>
                    <CompanyName>
                        <span>&copy; </span>
                        <span className="company-name">
                            INSTAGRAM FROM META
                        </span>
                    </CompanyName>
                </FooterContainer>
            </ErrorBoundary>
        </Container>
    );
};

export default Side;

const Container = styled.div`
    width: 26%;
    position: fixed;
    right: 12.8%;
    padding: 45px 0px 25px 25px;
    height: 100%;
    display: none;

    @media ${device.laptop} {
        display: block;
    }
`;

const FooterContainer = styled.div`
    margin: 30px 0;
`;

const Item = styled.div`
    display: flex;
    flex-wrap: wrap;

    .item-one-container {
        display: flex;
        align-items: center;
        line-height: 20px;
    }

    .item-one {
        color: gray;
        font-size: 13px;
    }

    .dot {
        background-color: gray;
        height: 1.5px;
        width: 1.5px;
        border-radius: 50%;
        margin: 0 4px;
    }
`;

const CompanyName = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;

    .company-name {
        color: gray;
        padding-left: 5px;
        font-size: 14px;
    }
`;
