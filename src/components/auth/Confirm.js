import styled from "styled-components";
import { IoMail } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "./Button";
import BackBtn from "./BackBtn";
import useAuth from "../../hook/useAuth";
import Box from "./Box";
import ErrorBoundary from "../errors/ErrorBoundary";
import Wrapper from "./Wrapper";
import { getCode } from "../../api/user";
import useFetch from "../../hook/useFetch";

const Confirm = () => {
    const [code, setCode] = useState("");
    const { confirm, loading, error } = useAuth();
    const { state } = useLocation();
    useFetch(getCode, state.id);

    useEffect(() => {
        if (state.id) {
            getCode(state.id);
        }
    }, [state.id]);

    const navigate = useNavigate();

    return (
        <Wrapper>
            <Box>
                <ErrorBoundary>
                    <Container>
                        <IoMail id="mail-icon" />
                        <h5>Enter confirmation code</h5>
                        <p id="text">
                            Enter the confirmation code we sent to{" "}
                            <span>{state?.email}</span>.{" "}
                            <span>Resend code</span>
                        </p>

                        <Input
                            placeholder="Confirmation code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                        <Button
                            title="Next"
                            enable={code}
                            loading={loading}
                            onSubmit={() => confirm(state.id, code)}
                        />
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <BackBtn onClick={() => navigate(-1)} />
                    </Container>
                </ErrorBoundary>
            </Box>
        </Wrapper>
    );
};

export default Confirm;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    #mail-icon {
        font-size: 100px;
        text-align: center;
        color: lightgray;
    }

    h5 {
        font-size: 17px;
        text-align: center;
        font-weight: 500;
    }

    #text {
        margin: 15px 0;
        user-select: none;
    }

    span {
        color: var(--secondary);
        cursor: pointer;
    }
`;

const Input = styled.input.attrs({ type: "text" })`
    padding: 12px;
    width: 100%;
    background-color: #f9f9f9;
    border: 0.2px solid lightgray;
    border-radius: 3px;
    margin: 10px 0;

    &:focus {
        outline: none;
    }
`;
