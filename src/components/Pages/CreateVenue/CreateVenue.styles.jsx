import styled from "styled-components";

export const CreateVenueWrapper = styled.div`
  box-sizing: border-box;
  border: 2px solid transparent;
  background: #c4e3f2;
  min-height: 100%; 
  margin-bottom: -55px;

    .update-venue-h1 {
      font-size: 30px;
    }

    .successful-update-message {
      color: #1f8e00; 
      font-weight: bold; 
      margin-top: 20px;
      font-size: 22px; 
      border: 2px solid #1f8e00;
      padding: 6px; 
      border-radius: 10px;  

      @media(max-width: 600px) {
        font-size: 19px;  
      }

      @media(max-width: 400px) {
        font-size: 17px;  
      }
    }

    .error-update-message {
      color: #be0127; 
      font-weight: bold; 
      margin-top: 20px;
      font-size: 22px;  
      border: 2px solid red;
      padding: 6px; 
      border-radius: 10px;  

      @media(max-width: 600px) {
        font-size: 19px;  
      }

      @media(max-width: 400px) {
        font-size: 17px;  
      }
    }

    .create-venue-container {
      border: 1px solid var(--blue-950);  
      box-shadow: 0 3px 3px #1793e8;       
      border-radius: 8px; 
      width: 40%;
      padding: 12px;  
      background: #2e9cd1;
      background: #6fbcea; 
      margin: 20px auto 70px auto;  
    }

    h1 {
      font-size: 32px;
      margin-left: 7px;   
    }

    @media(max-width: 1200px) {
      .create-venue-container { 
        width: 510px; 
      } 

      h1 {
        font-size: 28px; 
        white-space: nowrap;   
      }
    }

    @media(max-width: 800px) {
      .create-venue-container {
        width: 480px; 
      }  
    } 

    @media(max-width: 600px) { 
      .create-venue-container { 
        width: 85%; 
      }  
    }

    @media(max-width: 400px) {
      .create-venue-container { 
        width: 90%;
      }  

      h1 {
        font-size: 25px;   
      }
    }
`

export const CreateVenueForm = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 600px; 
  min-width: 400px;    
  margin-inline: auto;
  padding-right: 10px; 
  margin-block: 30px 70px;    

    h2 {
        margin: 0;
        padding-block: 20px; 
        color: #000; 
        font-size: 26px;     
    } 

    .form-input {
        padding: 3px 0 3px 5px;  
        width: 98%;
        min-width: 300px; 
        font-size: 16px;
        margin-bottom: 8px; 
        outline: none;
        border: 2px solid #189ee7;
        background: #FFFAFA;   

        &:focus {  
          border: 2px solid var(--blue-990);   
        }
    }

    label {
      font-size: 17px;  
      font-weight: bold;   
      color: #000; 
    }

    @media(max-width: 510px) { 
      min-width: 300px; 

      h2 {
        font-size: 23px;
      }

      label { 
        font-size: 16px;     
      }

      .form-input {
        font-size: 15px; 
        min-width: 100%;    
        max-width: 100%;
      }
    }

    @media(max-width: 400px) { 
      min-width: 280px; 

      label { 
        font-size: 15px;     
      }

      h2 {
        font-size: 21px;
      }

      .form-input {
        font-size: 14px; 
        min-width: 100%;    
        max-width: 100%;
      }
    }
`

export const VenueFacilities = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  max-height: 100px;
  border: 2px solid gold;

    .facility-checkbox {
      width: 16px;
      height: 16px;   
      accent-color: var(--blue-970); 
      
    } 

    .wifi-parking-container, .breakfast-pets-container { 
        box-sizing: border-box;
        width: 110px; 
        border: 2px solid gold; 
        display: block; 
        
        gap: 20px 0px;
    
        input { 
            margin-bottom: 40px; 
            background: red; 
            white-space: nowrap;    
         }

        label {
            font-size: 17px;  
            font-weight: bold;    
            color: #000; 
            margin-right: 3px;
            margin-left: 10px;
          }
    }

    .breakfast-pets-container {
      width: 120px;
    }
    @media(max-width: 510px) {

      label {   
        font-size: 16px;   
      }

    }

    @media(max-width: 400px) {

      label {   
        font-size: 15px !important;    
      }
    }
`

