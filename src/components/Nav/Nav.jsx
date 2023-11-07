import { NavStyles } from "./Nav.styles";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function logOutUser() {
    localStorage.clear();
}
console.log(localStorage);

export function Nav() {
    const navigate = useNavigate();

    return (
        <div>
            <NavStyles>
              <Link to='/home'></Link>
              <NavLink to= '/home'>Home</NavLink>
              <NavLink to= '/register'>Register</NavLink>
              <NavLink to= '/contact'>Contact</NavLink>
              <NavLink to= '/login'>Login</NavLink>
              <NavLink to= '/account'>Account</NavLink>

              <button onClick={() => {logOutUser(); navigate("/login");}}>Log Out</button>
    
            </NavStyles>
        </div>
    )
}
export default Nav;

