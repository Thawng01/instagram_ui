import React from "react";
import styled from "styled-components";
import { device } from "../../breakpoints";
const Logo = () => {
    return (
        <Image
            alt="instagram"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        />
    );
};

export default Logo;

const Image = styled.img`
    height: 30px;
    width: 120px;
    object-fit: contain;

    @media ${device.laptop} {
        object-fit: fill;
    }
`;
