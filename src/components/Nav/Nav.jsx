import { NavStyles } from "./Nav.styles";
import { NavLink, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useContext } from 'react';
import { AuthContext } from "../AuthContext/AuthContext";
import { LogOutButton } from "../Buttons/Buttons.styles";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";

export function Nav() {
    const navigate = useNavigate();
    const { loggedInUser, logOut } = useContext(AuthContext);

    console.log("LoggedInUser: ", loggedInUser); 

    useEffect(() => {
       
    }, [loggedInUser]); 

    function logOutUser() { 
      logOut();
      navigate("/login"); 
    };

    return ( 
        <div>
            <NavStyles>
                <Link className="page-name" to="/">Holidaze</Link>
                <NavLink className="nav-link" to='/home'>Home</NavLink>
                <NavLink className="nav-link" to='/register'>Register</NavLink>  
                <NavLink className="nav-link" to='/account'>Account</NavLink>  
                {!loggedInUser && (
                    <Link className="login-link" to='/login'>Login</Link> 
                )}
                {loggedInUser && ( 
                    <LogOutButton onClick= {logOutUser}>Log Out</LogOutButton>   
                )}
                <HamburgerMenu />
            </NavStyles>
        </div>
    );
}

export default Nav;