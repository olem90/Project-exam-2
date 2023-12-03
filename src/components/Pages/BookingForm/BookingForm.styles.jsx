import styled from "styled-components";

export const ModalStylesWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.80);
  backdrop-filter: blur(10px);
   
  z-index: 90; 

    .success-message {
        box-sizing: border-box;
        color: var(--success-green);
        font-weight: 700;
        margin-top: 20px;
        border-radius: 5px;
        padding: 12px; 
        font-size: 17px;
        box-shadow: 0px 0px 10px 2px #90ee90;
        background: var(--blue-100);
        min-width: 100%;   

          p {
            margin: 0;
            display: flex;
            padding: 10px;
            margin-inline: auto;
            justify-content: center;
          }
    }

    .update-success-message {
        box-sizing: border-box;
        color: var(--success-green);
        font-weight: 700;
        margin-top: 20px;
        border-radius: 5px;
        padding: 2px;
        font-size: 17px;
        box-shadow: 0px 0px 10px 2px #90ee90;
        background: var(--blue-100);
        min-width: 100%;  

          p {
            margin: 0;
            display: flex;
            padding: 3px 3px 3px 8px; 
            margin-inline: auto; 
            justify-content: center;
          }
    }
    
    .go-back-link {
        color: var(--blue-950);
        margin-left: auto;
        margin-right: 30px;
        border-radius: 3px;
        padding: 1px 5px;
        display: flex;
        width: 60px;
        font-size: 15px;
        font-weight: bold;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`

export const ModalStyles = styled.div`
  width: 29%;
  z-index: 99;
  height: 360px; 
  top: 50%;  
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  background: linear-gradient(170deg, var(--blue-600)0%, var(--blue-400)50%, var(--blue-200)100%); 
  padding: 20px;
  border-radius: 10px;
  border: none;

    .error-message {
        color: red;
        font-weight: 700;
        margin-top: 20px;
        border: none;
        border-radius: 5px; 
        padding: 15px;
        font-size: 18px;
        box-shadow: 0px 0px 10px 2px #ff0000;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--blue-100);
    }
    
    .date-range {
        color: white;
        background: #006400;
    }

    .past-date {
        pointer-events: none;
        cursor: not-allowed;
    }
    
    .booked {
        color: #000;
        background: #FF9999;
    }
    
    .available {
        color: green;
        background: #90EE90;
        cursor: pointer;
    }

    .h2-container {
        min-width: 250px;
        max-width: 320px;
        margin-inline: auto; 
    }
  
    h2 {
        color: var(--blue-990); 
        margin-top: 0 !important;
    }

    .modal-form-container {
        box-sizing: border-box;
        padding: 5px;
        min-width: 98%;  
        margin-inline: auto;
    }

    .booking-form {  
        width: fit-content;  
        margin-inline: auto;  

            label {
                font-size: 18px; 
                display: flex;
                margin-left: 5px; 
                color: #000;
                font-weight: 600;  
            }

            .guest-label {
                margin-left: 4px;
            }
        
            .booking-dates {
                display: flex;
                flex-direction: column;
            }
    }

    .datePickerContainer {
        display: flex;
        justify-content: center;
        min-width: 220px;
        max-width: 320px;  
        margin-inline: auto; 
 
            input {
                margin-inline: auto;
                font-size: 17px;
                height: 16px;            
                padding: 5px 0 3px 3px;     
                line-height: 24px; 
                width: 90%;
                
                gap: 15px;
                color: var(--blue-990);
                font-weight: 700;
                display: flex;
                align-content: center;
                justify-content: center;
                border: 1px solid var(--blue-500);
            }  
    }

    .guests-booking {
        margin-top: 25px;   
        position: relative;
        color: var(--blue-990);
    } 

    #guests {
        margin-left: 4px;
        font-size: 17px;
        padding: 3px;
        max-height: 120px;
        position: absolute;
        color: var(--blue-990);
        
          option {
            padding-inline: 8px;
            color: var(--blue-990);
            font-weight: 700;
          }
    }

    @media(max-width: 1200px) {
        width: 400px;   

        .modal-form-container {
            width: 100%;    
        } 

        .h2-container {
            min-width: 220px;
            max-width: 300px;  
        }

        .datePickerContainer {
            display: flex; 
            justify-content: center;
            max-width: 300px;  
    
                input {
                    width: 90%;
                    gap: 15px;  
                    
                }  
        }
    }

    @media(max-width: 850px) {  
        width: 370px;
    }

    @media(max-width: 600px) {
        width: 320px;  
    }

    @media(max-width: 480px) {
        top: 45%;
    }
 
    @media(max-width: 400px) {
        width: 80%;   
    }

`
