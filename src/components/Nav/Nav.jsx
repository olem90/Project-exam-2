import { NavStyles } from "./Nav.styles";
import { NavLink, Link } from "react-router-dom";


export function Nav() {
    return (
        <div>
            <NavStyles>
              <Link to='/home'></Link>
              <NavLink to= '/home'>Home</NavLink>
              
            </NavStyles>
        </div>
    )
}

