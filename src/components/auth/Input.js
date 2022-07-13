import { useState, useEffect } from "react";
import styled from "styled-components";

import InputContainer from "./InputContainer";
import useAuth from "../../hook/useAuth";
import Button from "./Button";

const Input = ({ signup, title }) => {
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPw, setShowPw] = useState(false);
    const [enable, setEnable] = useState(false);

    const { error, loading, authenticate } = useAuth();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleFullnameChange = (e) => setFullname(e.target.value);
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    useEffect(() => {
        if (signup) {
            if (email && fullname && username && password) {
                setEnable(true);
            } else {
                setEnable(false);
            }
        } else {
            if (email && password) {
                setEnable(true);
            } else {
                setEnable(false);
            }
        }
    }, [signup, email, fullname, username, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (signup) {
            // register new user
            authenticate({ username, fullname, email, password }, signup);
        } else {
            // login
            authenticate({ email, password });
        }
    };

    return (
        <Container>
            {error && <p id="error">{error}</p>}
            <InputContainer label="Email" value={email}>
                <Inputs value={email} onChange={handleEmailChange} />
            </InputContainer>

            {signup && (
                <>
                    <InputContainer label="Full name" value={fullname}>
                        <TextInput
                            value={fullname}
                            onChange={handleFullnameChange}
                        />
                    </InputContainer>

                    <InputContainer label="Username" value={username}>
                        <TextInput
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </InputContainer>
                </>
            )}

            <InputContainer label="Password" value={password}>
                <Password
                    value={password}
                    show={showPw}
                    onChange={handlePasswordChange}
                />
                {password && (
                    <span id="pw-show" onClick={() => setShowPw(!showPw)}>
                        {showPw ? "Hide" : "Show"}
                    </span>
                )}
            </InputContainer>

            <Button
                enable={enable}
                title={title}
                loading={loading}
                onSubmit={handleSubmit}
            />
        </Container>
    );
};

export default Input;

const Container = styled.form`
    width: 100%;
    margin: 15px 0;

    #pw-show {
        position: absolute;
        right: 10px;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
    }

    #error {
        color: red;
        text-align: center;
        font-size: 13px;
    }
`;

const Inputs = styled.input.attrs({ type: "email" })`
    width: 100%;
    border: none;
    background-color: inherit;
    position: absolute;
    bottom: ${(prop) => (prop.value ? "5px" : "")};
    padding: 0px 8px;
    transition: all 150m ease;

    &:focus {
        outline: none;
    }
`;

const TextInput = styled(Inputs).attrs({ type: "text" })``;

const Password = styled(Inputs).attrs((prop) => ({
    type: prop.show ? "text" : "password",
}))``;
