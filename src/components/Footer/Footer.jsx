import { FooterStyle } from "./Footer.styles.jsx";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function Footer() {

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
        <FooterStyle>
            <Link to={"/contact"}>Contact Us</Link>
            <div>
               <i className="scroll-to-top fas fa-arrow-up"></i>
            </div>
        </FooterStyle>
    );
}

