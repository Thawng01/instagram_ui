import styled from "styled-components";
import { FaFacebookSquare } from "react-icons/fa";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useNavigate } from "react-router-dom";

import { loginWithFacebook } from "../../api/auth";

const Facebook = ({ background = "#0095f6", color = "#fff" }) => {
    const navigate = useNavigate();

    const responseFacebook = async (response) => {
        const info = {
            email: response.email,
            username: response.name,
            picture: response.picture.data.url,
        };

        const result = await loginWithFacebook(info);
        localStorage.setItem("x-auth-token", result.headers.x_auth_token);
        navigate("/", { replace: true });
    };

    return (
        <FacebookLogin
            appId="5118475251554210"
            autoLoad={false}
            fields="name, email, picture"
            callback={responseFacebook}
            render={(renderProp) => (
                <Container
                    style={{ backgroundColor: background }}
                    onClick={renderProp.onClick}
                >
                    <FaFacebookSquare style={{ color: color }} id="fb-icon" />
                    <span style={{ color: color }}>Log in with Facebook</span>
                </Container>
            )}
        />
    );
};

export default Facebook;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 6px;
    height: 35px;
    margin: 15px 0;
    cursor: pointer;

    #fb-icon {
        margin-right: 8px;
        font-size: 22px;
    }

    span {
        font-size: var(--textSize);
        font-family: var(--font);
    }
`;
