import styled from "styled-components";

export const EditAvatarWrapper = styled.div`
  min-height: calc(100dvh - 80px);
  margin-bottom: -130px;
  display: flex;
  justify-content: center;

    h1 {
      font-size: 40px;  
    }

  @media(max-width: 500px) {

    h1 {
      font-size: 35px;    
      width: fit-content;  
      margin-inline: auto;    
    }

    .edit-avatar-container { 
      width: 96%; 
    }

  }
`

export const EditAvatarForm = styled.form`
  display: flex;
  width: fit-content;
  padding: 14px 30px 14px 30px;   
  height: 40px; 
  margin-top: 60px;  
  background: #9e7651;  
  border-radius: 30px;      
  align-items: center;
  border: 2px solid #000;
 
  input {
    font-size: 16px;
    border: 1px solid #000;
    border-radius: 4px; 
    padding: 5px 9px 3px 3px;    
    height: 20px;  
    width: 350px;     
  
    &:focus {  
      border: 1px solid #5e4630;     
      outline: 2px solid #5e4630;   
    }
   
  }

  @media(max-width: 600px) { 

    input {
      width: 270px;    
    } 
  }

  @media(max-width: 500px) { 
    width: 80%;  
    margin-inline: auto;  

  }

  @media(max-width: 440px) { 
    padding: 14px 20px 14px 20px;    
    flex-direction: column; 
    width: 84%;   
    margin-inline: auto;    
    height: 90px;   
    justify-content: center;     
 
    input { 
      min-width: 94%;   
    } 
  }
`
