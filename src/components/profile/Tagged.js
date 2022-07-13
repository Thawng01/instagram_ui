import React from "react";

import { MdPermContactCalendar } from "react-icons/md";
import styled from "styled-components";

const Tagged = () => {
    return (
        <Container>
            <IconContainer>
                <MdPermContactCalendar id="icon" />
            </IconContainer>
            <p id="title">Photos of you</p>
            <p id="subTitle">
                When people tag you in photos, they'll appear here.
            </p>
        </Container>
    );
};

export default Tagged;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;

    #title {
        font-size: 23px;
        font-weight: 300;
    }

    #subTitle {
        font-weight: 300;
        padding: 12px 7px;
        text-align: center;
    }
`;

const IconContainer = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 18px 0;

    #icon {
        font-size: 35px;
        color: gray;
    }
`;
