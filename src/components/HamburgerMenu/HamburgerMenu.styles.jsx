import styled from "styled-components";

export const HamburgerStyles = styled.div`
  display: none; 
  margin-right: 20px;
  margin-left: auto;  
  margin-bottom: 8px; 
  
  .faBars-icon { 
    color: #fff;
    font-size: 30px;  
    width: 30px;
    margin: auto; 
  }

  .menu {  
    position: absolute;
    top: 99%;  
    right: 0;
    width: 170px;   
    height: fit-content; 
    z-index: 99;  
    border-radius: 0 0 0 10px;       
    background: #211b0b; 
    opacity: 0.96;    

        ul {
          display: flex; 
          flex-direction: column;      
          gap: 10px 0;        
        }
   
        a { 
          color: #fff; 
          margin: 0;

          &:hover {
            color: #b7963c;
          }
        }
  }

  @media(max-width: 600px) {
    display: block; 
  }
` 