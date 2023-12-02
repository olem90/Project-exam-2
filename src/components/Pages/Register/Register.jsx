import { useState, useContext } from "react";
import { FormStylesWrapper } from "./Register.styles";
import FormStyles from "./Register.styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { RegisterButton } from "../../Buttons/Buttons.styles";
import { useInputFocus } from "../../OnInputFocus/OnInputFocus";

const url = "https://api.noroff.dev/api/v1/holidaze/auth/register";

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [password, setPassword] = useState("");
    const { setInputFocused } = useInputFocus();

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [avatarError, setAvatarError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isValid, setIsValid] = useState(false); 

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [regIsSuccess, setRegIsSuccess] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {
        if (showSuccessMessage) {
            const timer = setTimeout(() => {
                navigate("/login");
            }, 5000);

            return () => clearTimeout(timer); 
        }
    }, [showSuccessMessage, navigate]);

    function onNameChange(event) {
        setName(event.target.value)
    };

    function onEmailChange(event) {
        setEmail(event.target.value.toLowerCase())
    };

    function onAvatarChange(event) {
        setAvatar(event.target.value)
    };

    function onPasswordChange(event) {
        setPassword(event.target.value)
    };

    function validateForm() {
        let valid = true;

        const emailPattern= /^[\w\-.]+@(stud.)?noroff.no$/;
    
        if (!emailPattern.test(email)) {
            setEmailError("*Only @stud.noroff.no domains are allowed to register");
            valid = false;
        } else {
            setEmailError("");
        };

        if (name.length < 3) {
            setNameError("* Name must be at least 3 charachters long");
            valid = false;
            } else {
            setNameError("");
            };

        if (password.length < 8) {
            setPasswordError("* Your password must be at least 8 charachters long");
            valid = false;
        } else {
            setPasswordError("");
            };
        
        return valid;
    }

    function onRegisterFormSubmit(event) {
        event.preventDefault();

        const formIsValid = validateForm();

        if (formIsValid) {
            PostRegisterForm();
        }
    }

    async function PostRegisterForm() {
        try {
            setIsError(false);
            setIsLoading(true);
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, avatar, password }),  
            });
            const formData = await response.json();
            console.log(formData);
            console.log("API Response Status: ", response.ok);

            if (response.ok) {
                setRegIsSuccess(true);
                setShowSuccessMessage(true);
                console.log("setRegisSuccess: ", regIsSuccess ) ;
            } else {
                setRegIsSuccess(false);
                setIsError("Failed to register. Please try again.")
            }
            
        } catch (error) { 
            setIsError(true); 
        } 
        finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <div>Registering...</div>
    }

    if (isError) { 
        return <div>Error registering</div>
    }

    return(
        <FormStylesWrapper>
            <FormStyles onSubmit={onRegisterFormSubmit}>
                <label htmlFor="name">Name</label>
                <input value={name}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                placeholder="Your name"
                onChange={onNameChange}
                required/>
                <span>{nameError}</span>

                <label htmlFor="email">Email</label>
                <input value={email}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                placeholder="Your email"
                onChange={onEmailChange}
                required/>
                <span>{emailError}</span>

                <label htmlFor="avatar">Avatar</label>
                <input value={avatar}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                placeholder="Insert image url" 
                onChange={onAvatarChange}/>
                <span>{avatarError}</span>

                <label htmlFor="password">Password</label>
                <input value={password}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                placeholder="Type a password"
                onChange={onPasswordChange}
                required/>
                <span>{passwordError}</span>  

                <RegisterButton disabled={showSuccessMessage}>Register</RegisterButton>
                {showSuccessMessage && <p className="success-message">Welcome {name}. You've successfully registered!</p>}
                {isError && <p>{isError}</p>}
            </FormStyles>
        </FormStylesWrapper> 
    );
};
    export default Register;
                