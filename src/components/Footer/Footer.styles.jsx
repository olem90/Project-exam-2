import styled from 'styled-components';

export const FooterStyle = styled.div`
    display: flex;
    box-sizing: border-box;
    background: var(--blue-980); 
    color: white;  
    width: 100%;
    padding: 5px; 
    height: 100px; 
    margin-top: 30px;  

      .scroll-to-top { 
        font-size: 20px;  
        font-weight: bold;     
        background: var(--blue-600);
        color: #fff; 
        padding: 5px 14px;  
        display: flex;   
        justify-content: center;   
        margin-left: auto;
        margin-right: 15px;  
        border-radius: 3px;      
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