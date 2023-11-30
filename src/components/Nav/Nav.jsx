import { NavStyles } from "./Nav.styles";
import { NavLink, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../AuthContext/AuthContext";


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
                <Link to='/home'></Link>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/register'>Register</NavLink> 
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/account'>Account</NavLink> 
                {!loggedInUser && (
                    <NavLink className="login-link" to='/login'>Login</NavLink>
                )}
                {loggedInUser && ( 
                    <button onClick= {logOutUser}>Log Out</button> 
                )}
            </NavStyles>
        </div>
    );
}

export default Nav;