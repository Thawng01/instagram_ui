import styled from "styled-components";
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";
import { useState, useEffect, memo } from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "./Button";
import { updateBirthDay } from "../../api/user";
import BackBtn from "./BackBtn";
import Box from "./Box";
import useApi from "../../hook/useApi";
import ErrorBoundary from "../errors/ErrorBoundary";
import Wrapper from "./Wrapper";
import Error from "../errors/Error";

const BirthDay = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(
        new Date().toLocaleString("en-Us", { month: "short" })
    );
    const [day, setDay] = useState(new Date().getDate());
    const [canSign, setCanSign] = useState(false);

    const { request, data, error, loading } = useApi(updateBirthDay);
    const navigate = useNavigate();
    const { state } = useLocation();

    useEffect(() => {
        const y = new Date().getFullYear();
        const age = y - year;
        if (age >= 15) {
            setCanSign(true);
        } else {
            setCanSign(false);
        }
    }, [year]);

    useEffect(() => {
        if (data && !error) {
            navigate("/register/confirm", { state: data });
        }
    }, [data, error, navigate]);

    const handleSubmit = async () => {
        await request(state.id, { year, month, day });
    };

    return (
        <Wrapper>
            {error && <Error error={error} />}
            <Box>
                <ErrorBoundary>
                    <Container>
                        <div className="birth-container">
                            <FaBirthdayCake id="birth" />
                        </div>
                        <h5>Add Your Birthday</h5>
                        <p id="title1">
                            This won't be a part of your public profile.
                        </p>
                        <p id="title2">Why do I need to provide my birthday?</p>

                        <DateSelectContainer>
                            <MonthPicker
                                defaultValue={month}
                                endYearGiven
                                year={year}
                                required={true}
                                value={month}
                                onChange={(month) => {
                                    setMonth(month);
                                }}
                                id={"month"}
                                name={"month"}
                                classes={"classes"}
                            />

                            <DayPicker
                                defaultValue={day}
                                year={year}
                                month={month}
                                required={true}
                                value={day}
                                onChange={(day) => {
                                    setDay(day);
                                }}
                                id={"day"}
                                name={"day"}
                                classes={"classes"}
                            />

                            <YearPicker
                                defaultValue={year}
                                start={1960}
                                end={2020}
                                reverse
                                required={true}
                                value={year}
                                onChange={(year) => {
                                    setYear(year);
                                }}
                                id={"year"}
                                name={"year"}
                                classes={"classes"}
                            />
                        </DateSelectContainer>
                        <p id="title3">
                            You need to enter the date you were born
                        </p>
                        <p id="title4">
                            Use your own birthday, even if this account is for a
                            business, a pet, or something else
                        </p>

                        <Button
                            title="Next"
                            loading={loading}
                            enable={canSign}
                            onSubmit={handleSubmit}
                        />
                        <BackBtn onClick={() => navigate(-1)} />
                    </Container>
                </ErrorBoundary>
            </Box>
        </Wrapper>
    );
};

export default memo(BirthDay);

const Container = styled.div`
    .birth-container {
        display: flex;
        justify-content: center;
        margin-bottom: 15px;

        #birth {
            font-size: 60px;
            color: lightgray;
        }
    }

    h5 {
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 15px;
    }

    #title1 {
        text-align: center;
        font-size: 14px;
        margin-bottom: 6px;
    }
    #title2 {
        text-align: center;
        font-size: 14px;
    }

    #title2,
    #go-back {
        color: var(--secondary);
    }

    #title3,
    #title4 {
        color: gray;
        font-size: 13px;
        text-align: center;
    }

    #title4 {
        margin: 20px 0;
    }

    p {
        font-family: var(--font);
    }
`;

const DateSelectContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

    margin: 15px 0;
    .classes {
        padding: 10px;
        border: 0.2px solid lightgray;
        border-radius: 3px;
        color: gray;
    }
`;
