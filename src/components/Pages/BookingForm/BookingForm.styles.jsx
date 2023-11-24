import styled from "styled-components";

export const ModalStylesWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.80);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  z-index: 90;

    .success-message {
        color: var(--success-green);
        font-weight: 700;
        margin-top: 20px;
        border-radius: 5px;
        box-shadow: 
        padding: 15px;
        font-size: 18px;
        box-shadow: 0px 0px 10px 2px #90ee90;

          p {
            margin: 0;
            display: flex;
            padding: 10px;
            margin-inline: auto;
            justify-content: center;
          }
    }
    
    .go-back-link {
        color: #fff;
        margin-left: auto;
        margin-right: 30px;
        border-radius: 3px;
        padding: 1px 5px;
        display: flex;
        width: 60px;
        font-size: 15px;
        justify-content: center;
        align-items: center;
    }
`

export const ModalStyles = styled.div`
  width: 29%;
  z-index: 99;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  background: linear-gradient(170deg,  #072a4b 0%, #0b3d91 50%, var(--blue-950)100%);
  padding: 50px;
  border-radius: 25px;
  
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
  
    h2 {
        margin-left: 35px;
        color: #fff;
        margin-top: 0 !important;
    }

    .modal-form-container {
        box-sizing: border-box;
        padding: 5px;
        width: 84%;
        margin-inline: auto;
    }

    .booking-form {  
        width: 84%;
        margin-inline: auto;

        label {
            font-size: 18px;
            display: flex;
            margin-left: 8px;
            color: #fff;
        } 
        
        .booking-dates {
            display: flex;
            flex-direction: column;
        }
    } 

    .datePickerContainer {
        display: flex;
        justify-content: center;

            input {
                display: block;
                margin-inline: auto;
                font-size: 17px;
                padding-block: 3px;
                width: 90%;
                gap: 15px;

            }  
    }

    .guests-booking {
        margin-top: 25px;   
        position: relative;
    } 

    #guests {
        margin-left: 9px;
        font-size: 17px;
        padding: 3px;
        max-height: 120px;
        position: absolute;
        
          option {
            padding-inline: 8px;
          }
        
    }

`
