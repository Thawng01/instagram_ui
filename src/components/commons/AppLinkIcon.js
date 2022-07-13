import styled from "styled-components";

const AppLinkIcon = () => {
    return (
        <ApplinkContainer>
            <Appimage
                src="https://www.instagram.com/static/images/appstore-i…l-badges/badge_ios_french-fr.png/485fcccb52dc.png"
                alt="apple"
            />
            <Appimage
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                alt="android"
            />
        </ApplinkContainer>
    );
};

export default AppLinkIcon;

const ApplinkContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

const Appimage = styled.img`
    margin: 0 7px;
    width: 100px;
    height: 30px;
`;
