import styled from "styled-components";

export const ModalStylesWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  z-index: 99;
`

export const ModalStyles = styled.div`
  width: 26%;
  z-index: 99;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  background: gray;
  padding: 50px;
  border-radius: 25px;
  
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
    }
  
    h2 {
        margin-left: 17px;
    }

    .modal-form-container {
        padding: 5px;
        width: 75%;
        margin-inline: auto;
    }

    .booking-form {  
        width: 90%;
        margin-inline: auto;

        label {
            font-size: 18px;
        }   

        .error-message {
            color: red;
            font-weight: 600;
            margin-top: 15px;
            background: #fff;
            border: 1px solid red;
            padding: 5px;
        }
        
        .booking-dates {
            display: flex;
            flex-direction: column;
        }
    } 

    .datePickerContainer {
        display: flex;
    }

    input {
        font-size: 15px;
        padding-block: 3px;
        width: 80%;
    }

    .guests-booking {
        margin-top: 25px;   
    } 

    #guests {
        margin-left: 10px;
        font-size: 15px;
    }
`
