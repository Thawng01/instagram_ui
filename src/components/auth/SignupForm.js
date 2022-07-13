import ErrorBoundary from "../errors/ErrorBoundary";
import Facebook from "./Facebook";
import Input from "./Input";

const SignupForm = () => {
    return (
        <ErrorBoundary>
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
            <h4>Sign up to seee photos and videos from your friends</h4>
            <Facebook />

            <Input signup title="Sign up" />

            <p id="term">
                By signing up, you agree to our Terms , Data Policy and Cookies
                Policy .
            </p>
        </ErrorBoundary>
    );
};

export default SignupForm;
