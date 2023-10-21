import { useState } from "react";
import { LoginFormStyles, LoginFormWrapper } from "./Login.styles";

const loginUrl = "https://api.noroff.dev/api/v1/holidaze/auth/login";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    function onEmailChange(event) {
        setEmail(event.target.value);
    };

    function onPasswordChange(event) {
        setPassword(event.target.value);
    };



    return (
        <LoginFormWrapper>
            <LoginFormStyles>
                <label htmlFor="email">Email</label>
                <input value= {email}
                placeholder="Your email"
                onChange={onEmailChange}
                required />

                <label htmlFor="password">Password</label>
                <input value= {password}
                placeholder="Your password"
                onChange={onPasswordChange}
                required />

                <button>Log In</button>
            </LoginFormStyles>
        </LoginFormWrapper>
    )
}
export default Login;