import styled from "styled-components";

import { device } from "../../breakpoints";

const Caption = ({ value, onChange, username, profile }) => {
    return (
        <Container>
            <div className="user-info">
                <img src={profile} alt="user" />
                <p>{username}</p>
            </div>

            <InputContainer>
                <textarea
                    placeholder="Write a caption..."
                    rows={8}
                    value={value}
                    onChange={onChange}
                />
            </InputContainer>
        </Container>
    );
};

export default Caption;

const Container = styled.div`
    background-color: #fff;
    width: 100%;
    padding: 15px;
    height: 100%;
    border-left: 0.4px solid lightgray;

    .user-info {
        display: flex;
        align-items: center;

        img {
            height: 30px;
            width: 30px;
            border-radius: 50%;
        }

        p {
            font-weight: 600;
            padding: 0 10px;
        }
    }

    @media ${device.tablet} {
        width: 45%;
    }
`;

const InputContainer = styled.div`
    padding: 15px 0;
    width: 100%;

    textarea {
        width: 100%;
        resize: none;
        border: none;

        &:focus {
            outline: none;
        }
    }
`;
