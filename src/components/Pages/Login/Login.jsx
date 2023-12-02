import { useState, createContext ,useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { LoginFormStyles, LoginFormWrapper } from "./Login.styles";
import { LoginButton } from "../../Buttons/Buttons.styles";
import { useNavigate } from "react-router-dom";

const loginUrl = "https://api.noroff.dev/api/v1/holidaze/auth/login";



const Login = () => {
    const navigate = useNavigate();
    const { setInputFocused } = useInputFocus();
    const { logIn } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    function onEmailChange(event) {
        setEmail(event.target.value.toLowerCase());
    };

    function onPasswordChange(event) {
        setPassword(event.target.value);  
    };

    async function onLoginFormSubmit(event) { 
        event.preventDefault();

        try {
            setIsError(false);
            setIsLoading(true); 
            const response = await fetch(loginUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const userData = await response.json();
            console.log(userData);
            if (response.ok) {              
                localStorage.setItem("accessToken", userData.accessToken);
                logIn(userData, userData.accessToken);
                setPasswordError("");
                setEmailError("");
                navigate("/");
            } else {
                setIsError(true);
                setPasswordError("*Invalid email or password");
                setEmailError("*Invalid email or password");
            }
        } catch (error) {
            setIsError(true);
            setPasswordError("Oops! Seems like an error occured while trying to log you in")
        } finally {
            setIsLoading(false);
        }
    };  


   
    if (isLoading) {
        return <div>Hang in there while we are logging you in...</div>
    }  

    return (
        <LoginFormWrapper>
            <LoginFormStyles onSubmit={onLoginFormSubmit}>
                <label htmlFor="email">Email</label>
                <input value= {email}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                placeholder="Your email"
                onChange={onEmailChange}
                required />
                <label htmlFor="password">Password</label>
                <input value= {password}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                placeholder="Your password"
                onChange={onPasswordChange}
                required />
                <span className="login-error">{passwordError || emailError}</span>
                <LoginButton>LOG IN</LoginButton>
            </LoginFormStyles>
        </LoginFormWrapper>
    )
} 
export default Login;