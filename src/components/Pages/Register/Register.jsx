import { useState } from "react";
import { FormStylesWrapper } from "./Register.styles";
import FormStyles from "./Register.styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const url = "https://api.noroff.dev/api/v1/holidaze/auth/register";

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [password, setPassword] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [avatarError, setAvatarError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isValid, setIsValid] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [regIsSuccess, setRegIsSuccess] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {
        if (regIsSuccess) {
            const timer = setTimeout(() => {
                navigate("/login");
            }, 4000);

            return () => clearTimeout(timer); 
        }
    }, [regIsSuccess, navigate]);


    function onNameChange(event) {
        setName(event.target.value)
    };

    function onEmailChange(event) {
        setEmail(event.target.value)
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
            setEmailError("*Only @(stud.)noroff.no domains are allowed to register");
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

            if (response.ok) {
                setRegIsSuccess(true);
                setTimeout(() => {
                    navigate("/login");
                }, 4000);
            } else {
                setIsError("Failed to register. Please try again.")
            }
            
            const formData = await response.json();
            console.log(formData);
            
            
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
                placeholder="Your name"
                onChange={onNameChange}
                required/>
                <span>{nameError}</span>

                <label htmlFor="email">Email</label>
                <input value={email}
                placeholder="Your email"
                onChange={onEmailChange}
                required/>
                <span>{emailError}</span>

                <label htmlFor="avatar">Avatar</label>
                <input value={avatar}
                placeholder="insert image url.."
                onChange={onAvatarChange}/>
                <span>{avatarError}</span>

                <label htmlFor="password">Password</label>
                <input value={password}
                placeholder="Type a password"
                onChange={onPasswordChange}
                required/>
                <span>{passwordError}</span>

                <button>Register</button>
                {regIsSuccess && (
                <div> 
                    <p>Welcome {name}.You've successfully registered!</p>
                </div>
                )}
            </FormStyles>

        </FormStylesWrapper>
    )
    }
    export default Register;
                