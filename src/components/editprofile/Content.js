import React, { useRef, useState, useReducer, useEffect } from "react";

import GenderModal from "./GenderModal";
import { updateProfileImg, updateUserInfo } from "../../api/user";
import useApi from "../../hook/useApi";
import Loading from "../Loadings/Loading";
import BottomMessage from "../errors/BottomMessage";
import {
    Container,
    InnerContainer,
    ItemContainer,
    ImgNameContainer,
    Left,
    ProfileContainer,
    Right,
    InnerRight,
    NameContainer,
    LoadingContainer,
} from "./styles";

const reducer = (state, action) => {
    switch (action.type) {
        case "INITIAL":
            const { username, email, bio, phone, website, gender } =
                action.payload;
            const requiredValue = {
                username: username ? username : "",
                email: email ? email : "",
                bio: bio ? bio : "",
                phone: phone ? phone : "",
                website: website ? website : "",
                gender: gender ? gender : "",
            };
            return requiredValue;
        case "username":
            return { ...state, username: action.payload };
        case "website":
            return { ...state, website: action.payload };
        case "bio":
            return { ...state, bio: action.payload };
        case "email":
            return { ...state, email: action.payload };
        case "phone":
            return { ...state, phone: action.payload };

        case "gender":
            return { ...state, gender: action.payload };
        default:
            return state;
    }
};

const Content = ({ user }) => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState(null);

    const inputRef = useRef();
    const userApi = useApi(updateProfileImg);
    const userInfoApi = useApi(updateUserInfo);

    const initialState = {};

    const [state, dispatch] = useReducer(reducer, initialState);
    const { username, email, bio, phone, website, gender } = state;

    useEffect(() => {
        if (user) {
            dispatch({ type: "INITIAL", payload: user });
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: name, payload: value });
    };

    const handleSelectedGender = (item) => {
        dispatch({ type: "gender", payload: item });
    };

    const handleSubmit = async () => {
        const result = await userInfoApi.request(user._id, state);
        if (result?.status === 200) {
            setMessage("Profile saved.");
        } else {
            setMessage("There was problem updating your profile.");
        }
    };

    // change profile pic
    const handleProfileChange = () => {
        inputRef.current.click();
    };

    const handleChange = async (e) => {
        const res = await userApi.request(user._id, e.target.files[0]);
        if (res?.status === 200) {
            setMessage("Profile saved.");
        } else {
            setMessage("There was problem updating your profile.");
        }
    };

    // close gender select modal
    const handleClose = (e) => {
        const { id } = e.target;

        if (id === "modal" || id === "close-icon" || id === "btn") {
            setVisible(false);
        }
    };

    useEffect(() => {
        if (message) setTimeout(() => setMessage(null), 4000);
    }, [message, setMessage]);

    return (
        <Container>
            <GenderModal
                visible={visible}
                onClose={handleClose}
                onSelect={(item) => handleSelectedGender(item)}
            />

            <BottomMessage message={message} />
            <InnerContainer>
                <ItemContainer>
                    <ImgNameContainer>
                        <Left>
                            <ProfileContainer>
                                {userApi.loading && (
                                    <LoadingContainer>
                                        <Loading height={22} width={22} />
                                    </LoadingContainer>
                                )}
                                <img src={user?.profileImg} alt="profile" />
                            </ProfileContainer>
                        </Left>
                        <Right>
                            <p id="name">{user?.fullname}</p>
                            <input
                                ref={inputRef}
                                type="file"
                                name="profile"
                                onChange={handleChange}
                                style={{ display: "none" }}
                            />
                            <span
                                id="profile-photo"
                                onClick={handleProfileChange}
                            >
                                Change Profile photo
                            </span>
                        </Right>
                    </ImgNameContainer>

                    <NameContainer>
                        <Left>
                            <h4>Name</h4>
                        </Left>
                        <Right>
                            <input
                                value={user?.username}
                                id="input-text"
                                disabled
                            />
                            <span id="label-info">
                                You are using the same name on Instagram and
                                Facebook. Go to Facebook to change your name.
                                <span id="change-name">Change Name</span>
                            </span>
                        </Right>
                    </NameContainer>
                </ItemContainer>

                <ItemContainer>
                    <NameContainer>
                        <Left>
                            <h4>Username</h4>
                        </Left>
                        <Right>
                            <input
                                value={username}
                                id="input-text"
                                name="username"
                                onChange={handleInputChange}
                            />
                            <span id="label-info">
                                In most cases, you'll be able to change your
                                username back to salailiancungthawng for another
                                14 days.
                                <span id="change-name">Learn More</span>
                            </span>
                        </Right>
                    </NameContainer>
                </ItemContainer>

                <ItemContainer>
                    <NameContainer>
                        <Left>
                            <h4>Website</h4>
                        </Left>
                        <Right>
                            <input
                                value={website}
                                id="input-text"
                                name="website"
                                placeholder="Website"
                                onChange={handleInputChange}
                            />
                        </Right>
                    </NameContainer>
                    <NameContainer>
                        <Left>
                            <h4>Bio</h4>
                        </Left>
                        <Right>
                            <textarea
                                value={bio}
                                id="input-text"
                                placeholder="Your bio..."
                                name="bio"
                                onChange={handleInputChange}
                            />
                        </Right>
                    </NameContainer>
                </ItemContainer>

                <ItemContainer>
                    <NameContainer>
                        <Left></Left>
                        <Right>
                            <p id="personal-info">Personal Information</p>
                            <span id="label-info">
                                Provide your personal information, even if the
                                account is used for a business, a pet or
                                something else. This won't be a part of your
                                public profile.
                            </span>
                        </Right>
                    </NameContainer>

                    <NameContainer>
                        <Left>
                            <h4>Email</h4>
                        </Left>
                        <Right>
                            <input
                                value={email}
                                id="input-text"
                                name="email"
                                onChange={handleInputChange}
                            />
                        </Right>
                    </NameContainer>
                    <NameContainer>
                        <Left>
                            <h4>Phone Number</h4>
                        </Left>
                        <Right>
                            <input
                                value={phone}
                                id="input-text"
                                placeholder="Your phone number..."
                                name="phone"
                                onChange={handleInputChange}
                            />
                        </Right>
                    </NameContainer>
                    <NameContainer>
                        <Left>
                            <h4>Gender</h4>
                        </Left>
                        <Right>
                            <p id="gender" onClick={() => setVisible(true)}>
                                {gender ? gender : "Gender"}
                            </p>
                        </Right>
                    </NameContainer>

                    <NameContainer>
                        <Left>
                            <h4>Similar Accounts Suggestions</h4>
                        </Left>
                        <Right>
                            <InnerRight>
                                <input type="checkbox" id="input-checkbox" />
                                <span id="checkbox-label">
                                    Include your account when recommending
                                    similar accounts people might want to follow
                                </span>
                            </InnerRight>
                        </Right>
                    </NameContainer>
                </ItemContainer>

                <ItemContainer>
                    <NameContainer>
                        <Left></Left>
                        <Right>
                            <div className="btn-container">
                                <div id="btn" onClick={handleSubmit}>
                                    {userInfoApi.loading ? (
                                        <Loading height={22} width={22} />
                                    ) : (
                                        <span>Submit</span>
                                    )}
                                </div>
                                <span id="disable-acc">
                                    Temporarily disable my account
                                </span>
                            </div>
                        </Right>
                    </NameContainer>
                </ItemContainer>
            </InnerContainer>
        </Container>
    );
};

export default Content;
