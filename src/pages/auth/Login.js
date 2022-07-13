import Bottom from "../../components/auth/Bottom";
import Box from "../../components/auth/Box";
import LoginForm from "../../components/auth/LoginForm";
import Wrapper from "../../components/auth/Wrapper";

const Login = () => {
    return (
        <Wrapper>
            <Box>
                <LoginForm />
            </Box>
            <Bottom
                text="Don't have an account?"
                signin="Sign up"
                path="/register"
            />
        </Wrapper>
    );
};

export default Login;
