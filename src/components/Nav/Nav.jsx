import { NavStyles } from "./Nav.styles";
import { NavLink, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useContext } from 'react';
import { AuthContext } from "../AuthContext/AuthContext";
import { LogOutButton } from "../Buttons/Buttons.styles";


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
                <NavLink to='/home'></NavLink>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/register'>Register</NavLink> 
                <NavLink to='/account'>Account</NavLink> 
                {!loggedInUser && (
                    <Link className="login-link" to='/login'>Login</Link>
                )}
                {loggedInUser && ( 
                    <LogOutButton onClick= {logOutUser}>Log Out</LogOutButton>   
                )}
            </NavStyles>
        </div>
    );
}

export default Nav;