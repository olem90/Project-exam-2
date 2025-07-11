import { useState, useContext, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HamburgerStyles } from "./HamburgerMenu.styles";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const { loggedInUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => { 
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  function logOutUser() {
    logOut();
    navigate("/login");
  }

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HamburgerStyles ref={menuRef}>
      <div onClick={toggleMenu}>
        <FontAwesomeIcon className="faBars-icon" icon={faBars} />
      </div>

      {isOpen && (
        <div className="menu">
          <ul>
            <Link onClick={setIsOpen(false)} to="/">Home</Link>
            <Link to="/account">Account</Link>
            <Link to="/register">Register</Link>
            {!loggedInUser && <Link to="/login">Login</Link>}
            {loggedInUser && <Link onClick={logOutUser}>Log Out</Link>}
          </ul>
        </div>
      )}
    </HamburgerStyles>
  );
};


