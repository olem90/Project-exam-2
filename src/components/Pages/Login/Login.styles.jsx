import styled from "styled-components";

export const LoginFormWrapper = styled.div`
  display: flex;
  min-height: 100vh;    
  
    .login-error {
      background: #fff;

    }
` 
  
export const LoginFormStyles = styled.form`
  border: 2px solid var(--blue-500);
  display: flex;
  flex-direction: column;
  width: 400px;
  height: fit-content;; 
  padding: 15px;
  margin-inline: auto;  
  margin-top: 80px;   
  border-radius: 5px;   
  box-shadow: 0 3px 5px var(--blue-400); 
  background: #609bee;
  z-index: 15; 
   
    label {
        font-size: 18px; 
        font-weight: 600;
        margin-top: 5px;  
    }

    input {
        padding: 3px;
        font-size: 16px;
        border-radius: 5px; 
        color: var(--blue-990); 
        font-weight: 500;
        letter-spacing: 0.3px;
        background: #FFFAFA; 

        &:focus {
          border: 2px solid var(--blue-700);
          outline: 1px solid var(--blue-700);   
        }
    }

    span {
        color: red;
        font-weight: 700;
        font-size: 15px;
    }
  
  @media(max-width: 600px) {
    width: 60%; 
    max-width: 400px; 
  }

  @media(max-width: 480px) {
    margin-top: 70px;
  }

` 