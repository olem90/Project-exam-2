import { NavStyles } from "./Nav.styles";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function logOutUser() {
    localStorage.clear();
}

const isLoggedIn = localStorage.getItem("profile");

console.log("User is logged in", isLoggedIn);

export function Nav() { 
    const navigate = useNavigate();

    return (
        <div>
            <NavStyles>
              <Link to='/home'></Link>
              <NavLink to= '/home'>Home</NavLink> 
              <NavLink to= '/register'>Register</NavLink> 
              <NavLink to= '/contact'>Contact</NavLink>
              <NavLink to= '/account'>Account</NavLink>
              {isLoggedIn ? null : (
                <NavLink className="login-link" to= '/login'>Login</NavLink> 
              )}
              {isLoggedIn ? (
                 <button onClick={() => {logOutUser(); navigate("/login");}}>Log Out</button> 
              ) : null}
            </NavStyles>
        </div>
    )
}
export default Nav;

