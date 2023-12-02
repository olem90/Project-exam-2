import styled from 'styled-components';

export const FooterStyle = styled.div`
    display: flex;
    box-sizing: border-box;
    background: #362815; 
    color: white;  
    width: 100%;
    padding: 5px; 
    height: 100px; 
    margin-top: 30px;  
    position: absolute;
    bottom: 0;

      .scroll-to-top { 
        font-size: 20px;  
        font-weight: bold;     
        background: #362815;  
        color: #fff;  
        padding: 5px 14px;  
        display: flex;   
        justify-content: center;   
        margin-left: auto;
        margin-right: 15px;  
        border-radius: 3px;  
        border: 2px solid #fff;   
        transition: color 0.4s ease-in-out; 
        
          &:hover {
            background: #886535; 
          }
      }

      .footer-container {
        width: 100%; 
        display: flex; 
        align-items: center;
      }  

      .footer-name {
        margin-inline: auto; 
        font-family: 'Great Vibes', cursive;   
        font-size: 24px;  
        padding-inline: 5px; 

        @media(max-width: 420px) {   
            font-size: 20px;   

        }
      }  

    } 
`