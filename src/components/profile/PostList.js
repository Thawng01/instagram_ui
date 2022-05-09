import React from "react";
import styled from "styled-components";
import { IoMdGrid } from "react-icons/io";
import { RiAccountPinBoxLine, RiBookmarkLine } from "react-icons/ri";
import Follow from "./Follow";
import { device } from "../../breakpoints";
import Applink from "./Applink";

const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PostList = () => {
    return (
        <Container>
            <FollowTab>
                <Follow />
            </FollowTab>
            <TabContainer>
                <Tab>
                    <IoMdGrid className="tab-icon" />
                    <span>POSTS</span>
                </Tab>
                <Tab>
                    <RiBookmarkLine className="tab-icon" />
                    <span>SAVED</span>
                </Tab>
                <Tab>
                    <RiAccountPinBoxLine className="tab-icon" />
                    <span>TAGGED</span>
                </Tab>
            </TabContainer>
            <div className="show-in-mobile">
                <Applink />
            </div>
            <PostItem>
                <Left>
                    {posts.map((_, i) => {
                        return <PostContainer key={i}></PostContainer>;
                    })}
                </Left>
                <ApplinkContainer>
                    <Applink />
                </ApplinkContainer>
            </PostItem>
        </Container>
    );
};

export default PostList;

const Container = styled.div`
    border-top: 0.5px solid lightgray;
    margin-bottom: 20px;

    .show-in-mobile {
        display: block;
        width: 100%;

        @media ${device.tabletL} {
            display: none;
        }
    }
`;

const FollowTab = styled.div`
    border-bottom: 0.5px solid lightgray;

    @media ${device.tabletL} {
        display: none;
    }
`;

const TabContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin: auto;
    height: 50px;

    @media ${device.tabletL} {
        width: 40%;
    }
`;

const Tab = styled.div`
    display: flex;
    align-items: center;

    .tab-icon {
        font-size: 14px;
        color: gray;
    }

    span {
        margin-left: 6px;
        font-size: 14px;
        color: gray;
    }
`;

const PostItem = styled.div`
    display: flex;
`;

const Left = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    @media ${device.tabletL} {
        width: 40%;
    }
`;

const PostContainer = styled.div`
    width: calc(100% / 3);
    height: 120px;
    border: 0.4px solid gray;
`;

const ApplinkContainer = styled.div`
    display: none;
    width: 60%;

    @media ${device.tabletL} {
        display: flex;
    }
`;
