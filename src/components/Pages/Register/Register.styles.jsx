import styled from "styled-components";

export const FormStylesWrapper = styled.div` 
  display: flex;
  flex-direction: column; 
  min-height: 100vh;   
  background: #F5F5DC;        

  @media(max-width: 320px) { 
    margin-bottom: -70px;        
  } 
`

export const FormStyles = styled.form`  
  display: flex;
  flex-direction: column; 
  border: 1px solid #003;
  width: 100%;
  max-width: 420px;  
  margin-inline: auto;     
  border-radius: 5px;  
  padding: 20px; 
  margin-top: 120px;  
  background: #3963c6;     
   
    .success-message {
        color: #66BB6A;     
        font-size: 20px;
        font-weight: bold; 
    }
   
    input {
        font-size: 16px;
        padding: 4px; 
        border: 2px solid #003;  
        margin-bottom: 5px;     
        background: #FFFAFA;        
        outline: none; 
        letter-spacing: .8px;     
    } 

    input:focus {
        border: 2px solid #ADD8E6;    
    }
 
    label {
        font-size: 17px;
        font-weight: 700;  
        color: #fff;   
    } 

    span {
        color: red;
        font-size: 14px;
    }

    @media(max-width: 700px) {
        max-width: 370px;    
    }

    @media(max-width: 450px) {
        max-width: 80%; 
        margin-top: 90px;

        label {
            font-size: 16px; 
            font-weight: 700;  
            color: #fff;   
        } 

        input {
            font-size: 15px; 
            padding: 3px;     
        } 
    }
`
export default FormStyles;
