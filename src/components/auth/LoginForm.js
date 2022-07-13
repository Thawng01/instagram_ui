import React from "react";
import Input from "./Input";
import Line from "./Line";
import Facebook from "./Facebook";
import ErrorBoundary from "../errors/ErrorBoundary";

const LoginForm = () => {
    return (
        <ErrorBoundary>
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
            <Input title="Sign up" />
            <Line />
            <div id="fb-container">
                <Facebook color="#0095f6" background="none" />
                <p id="forgot-pw">Forgot password?</p>
            </div>
        </ErrorBoundary>
    );
};

export default LoginForm;
