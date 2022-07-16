import styled from "styled-components";
import { device } from "../../breakpoints";

export const Container = styled.div`
    width: 100%;

    @media ${device.tabletL} {
        width: 75%;
    }
`;

export const InnerContainer = styled.div`
    padding: 20px 10px;
    width: 100%;

    @media ${device.tabletL} {
        margin: 20px auto 20px auto;
        width: 80%;
    }
`;

export const ItemContainer = styled.div`
    margin-bottom: 30px;
`;

export const ImgNameContainer = styled.div`
    display: flex;
    margin-bottom: 15px;
`;

export const Left = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-top: 5px;

    h4 {
        font-weight: 500;
    }

    @media ${device.tabletL} {
        justify-content: flex-end;
        text-align: right;
        width: 140px;
    }
`;

export const ProfileContainer = styled.div`
    height: 40px;
    width: 40px;
    position: relative;
    margin-right: 12px;

    img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }

    @media ${device.tabletL} {
        margin-right: 0;
    }
`;

export const Right = styled.div`
    width: 100%;

    #input-text {
        padding: 9px;
        border-radius: 4px;
        display: block;
        width: 100%;
        margin-bottom: 10px;
        border: 0.3px solid lightgray;
        font-size: var(--textSize);
    }

    #label-info {
        color: gray;
        font-size: 14px;
        font-weight: 400;
    }

    #change-name {
        color: var(--secondary);
        padding-left: 7px;
    }

    #name {
        font-weight: 600;
        font-size: var(--sTSize);
    }

    #Name {
        background-color: lightgray;
        padding: 6px 10px;
    }

    #profile-photo {
        color: var(--secondary);
        font-weight: 600;
        font-size: var(--textSize);
        cursor: pointer;
    }

    #personal-info {
        font-size: var(--TitleSize);
        color: gray;
    }

    .btn-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #btn {
        width: 70px;
        height: 35px;
        background-color: var(--secondary);
        color: #fff;
        border: transparent;
        border-radius: 5px;
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--textSize);
        font-family: var(--font);
    }

    #disable-acc {
        color: var(--secondary);
        font-weight: 600;
        font-family: var(--font);
        font-size: 14px;
    }

    #gender {
        color: gray;
        font-family: var(--font);
        border: 0.5px solid lightgray;
        padding: 9px;
        border-radius: 5px;
    }

    @media ${device.xMobile} {
        width: 70%;
    }

    @media ${device.tabletL} {
        margin-left: 35px;
        width: 60%;
    }
`;

export const InnerRight = styled.div`
    display: flex;
    align-items: center;
    width: 80%;

    #input-checkbox {
        margin-right: 8px;
    }

    #checkbox-label {
        font-weight: 600;
        font-size: var(--textSize);
    }
`;

export const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    @media ${device.tabletL} {
        flex-direction: row;
    }
`;

export const LoadingContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
`;
