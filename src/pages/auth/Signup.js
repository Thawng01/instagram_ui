import Bottom from "../../components/auth/Bottom";
import Wrapper from "../../components/auth/Wrapper";

import Box from "../../components/auth/Box";
import SignupForm from "../../components/auth/SignupForm";

const Signup = () => {
    return (
        <Wrapper>
            <Box>
                <SignupForm signup={true} />
            </Box>
            <Bottom text="Have an account?" signin="Log in" path="/login" />
        </Wrapper>
    );
};

export default Signup;
