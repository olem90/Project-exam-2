import { FooterStyle } from "./Footer.styles.jsx";
import React, { useEffect, useState } from "react";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInputFocus } from "../OnInputFocus/OnInputFocus.jsx";


export function Footer() {
    const { isinputfocused } = useInputFocus();

    useEffect(() => {
        const scrollToTopButton = document.querySelector(".scroll-to-top"); 
        
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                scrollToTopButton.style.display = "block";
            } else {
                scrollToTopButton.style.display = "none";
            }
        });

        scrollToTopButton.addEventListener("click", () => { 
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    })

    return ( 
        <FooterStyle isinputfocused={isinputfocused} className="footer">
            <div className="footer-container">
                <span className="footer-name"> Made by Ole Marius Sandø Rognan </span>
                <button className="scroll-to-top"> 
                   <FontAwesomeIcon icon={faArrowUp} />
                </button>
            </div>
        </FooterStyle>
    );
}

