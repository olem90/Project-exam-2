import { NavStyles } from "./Nav.styles";
import { NavLink, Link } from "react-router-dom";


export function Nav() {
    return (
        <div>
            <NavStyles>
              <Link to='/home'></Link>
              <NavLink to= '/home'>Home</NavLink>
              <NavLink to= '/register'>Register</NavLink>
              <NavLink to= '/contact'>Contact</NavLink>
              <NavLink to= '/login'>Login</NavLink>
              
            </NavStyles>
        </div>
    )
}

