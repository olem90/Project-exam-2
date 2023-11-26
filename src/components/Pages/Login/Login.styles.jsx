import styled from "styled-components";

export const LoginFormWrapper = styled.div`
  display: flex;
  min-height: 43vh;
` 
  
export const LoginFormStyles = styled.form`
  border: 2px solid var(--blue-500);
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
  padding: 15px;
  margin: auto; 
  border-radius: 5px;  
  box-shadow: 0 3px 5px var(--blue-400); 
  
    label {
        font-size: 18px;
        font-weight: 600;
    }

    input {
        padding: 3px;
        font-size: 16px;
        border-radius: 5px; 
        color: var(--blue-990); 
        font-weight: 500;
        letter-spacing: 0.3px;

        &:focus {
          border: 2px solid var(--blue-700);
          outline: none;
        }
    }

    span {
        color: red;
        font-weight: 700;
        font-size: 15px;
    }

`
