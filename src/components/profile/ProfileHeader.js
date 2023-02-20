import React, { useState } from "react";
import styled from "styled-components";
import { IoSettingsOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

import { device } from "../../breakpoints";
import Follow from "../follows/Follow";
import NameAndBio from "./NameAndBio";
import { fetchUser } from "../../api/user";
import Loading from "../Loadings/Loading";
import useFetch from "../../hook/useFetch";
import Tooltip from "./Tooltip";
import useToken from "../../hook/useToken";

const ProfileHeader = () => {
    const [visible, setVisible] = useState(false);

    const navigate = useNavigate();
    const editProfile = () => navigate("/accounts/edit");

    const { state } = useLocation();
    const id = useToken();
    const { data, loading } = useFetch(fetchUser, state);

    if (loading)
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 100,
                    marginBottom: 40,
                }}
            >
                <Loading width={30} height={30} />
            </div>
        );

    return (
        <Container>
            <InnerContainer>
                <ProfileImageContainer>
                    <ProfileImage src={data?.profileImg} alt="profile" />
                </ProfileImageContainer>
                <ProfileDetailContainer>
                    <Top>
                        <Name>{data?.fullname.replace(" ", "")}</Name>
                        {id === state && (
                            <div
                                className="hide-in-mobile"
                                onClick={editProfile}
                            >
                                <ProfileEdit>Edit profile</ProfileEdit>
                            </div>
                        )}
                        <div className="setting-icon-container">
                            <IoSettingsOutline
                                className="setting-icon"
                                onClick={() => setVisible(!visible)}
                            />
                            <Tooltip
                                visible={visible}
                                onClose={() => setVisible(false)}
                            />
                        </div>
                    </Top>
                    {id === state && (
                        <div className="show-in-mobile" onClick={editProfile}>
                            <ProfileEdit>Edit profile</ProfileEdit>
                        </div>
                    )}
                    <div className="follow">
                        <Follow
                            userId={data?._id}
                            post={data?.posts}
                            following={data?.following}
                            follwer={data?.follower}
                        />
                    </div>
                    <Bottom>
                        <NameAndBio name={data?.username} bio={data?.bio} />
                    </Bottom>
                </ProfileDetailContainer>
            </InnerContainer>
            <div className="to-show-in-mobile">
                <NameAndBio name={data?.username} bio={data?.bio} />
            </div>
        </Container>
    );
};

export default ProfileHeader;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 15px 15px 25px 15px;

    .to-show-in-mobile {
        display: block;
        margin-top: 15px;

        @media ${device.tabletL} {
            display: none;
        }
    }

    @media ${device.tabletL} {
        padding: 40px 0px;
    }
`;

const InnerContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ProfileImageContainer = styled.div`
    display: flex;
    justify-content: center;
    @media ${device.tabletL} {
        flex: 0.35;
    }
`;

const ProfileImage = styled.img`
    height: 85px;
    width: 85px;
    border-radius: 50%;

    @media ${device.tabletL} {
        height: 150px;
        width: 150px;
    }
`;

const ProfileDetailContainer = styled.div`
    display: flex;
    flex: 0.65;
    flex-direction: column;
    margin-left: 15px;

    .follow {
        width: 300px;
        display: none;

        @media ${device.tabletL} {
            display: block;
        }
    }

    .show-in-mobile {
        display: block;
        width: 170px;

        @media ${device.tabletL} {
            display: none;
        }
    }
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 7px;

    .setting-icon-container {
        position: relative;
    }

    .setting-icon {
        font-size: 25px;

        @media ${device.tabletL} {
            margin-left: 10px;
        }
    }

    .hide-in-mobile {
        display: none;

        @media ${device.tabletL} {
            display: block;
            width: 100px;
        }
    }
`;

const Name = styled.h2`
    text-transform: lowercase;
    margin-right: 10px;
    font-family: var(--font);
    font-weight: 100;
    width: 8rem;
    text-overflow: ellipsis;
    overflow: hidden;

    @media ${device.tablet} {
        width: 15rem;
    }
`;

const ProfileEdit = styled.button`
    padding: 6px 10px;
    border: 0.5px solid lightgray;
    border-radius: 3px;
    width: 100%;
    background-color: inherit;
    font-size: var(--textSize);
`;

const Bottom = styled.div`
    display: none;

    @media ${device.tabletL} {
        display: block;
    }
`;
