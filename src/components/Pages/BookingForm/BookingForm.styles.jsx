import styled from "styled-components";

export const ModalStyles = styled.div`
  border: 2px solid gold;
  width: 26%;
  z-index: 99;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  background: #fff;
  padding: 50px;

    .modal-form-container {
        padding: 5px;
        width: 75%;
        margin-inline: auto;
    }

    .booking-form {  

        label {
            font-size: 18px;
            
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
