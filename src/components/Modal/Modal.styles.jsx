import styled from "styled-components";

export const ModalStyles = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 18px;
  height: 120px;
  width: 420px;
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  z-index: 99;
  background: linear-gradient(
    170deg,
    #EFE0D0 0%,
    #D2B1A3 25%,
    #8E735B 50%,
    #8E735B 75%,
    #836953 100%
  );
  padding: 18px;
  box-shadow: 0 1px 1px 0 #3B2F2F;
  border-radius: 5px;
  border: 2px solid #3B2F2F;

  .modal-message {  
    color: #000; 
  }  

  .modal-content { 
    display: flex;
    flex-direction: column;
    color: #000;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 6px;

    p {
      padding: 0; 
      margin: 0;
    }
  }

  .modal-buttons-container {
    margin-top: 20px;
    width: 90%;
    display: flex;
    flex-direction: row;

    button {
      color: #fff;
      background: #3B2F2F;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 120px;
      margin-inline: auto;
      border: 3px solid var(--blue-930);
      border-radius: 4px;

      &:hover {
        border: 2px solid #F6EEE4;
      }
    }
  }

  button:hover {
    border: var(--blue-400);
  }

  @media (max-width: 600px) {
    width: 350px;
    font-size: 17px;

    .modal-buttons-container {
      button {
        height: 36px;
        width: 120px;
      }
    }

    .modal-content {
      p {
        width: 100%;
      }
    }
  }

  @media (max-width: 450px) {
    width: 300px;
    height: 110px;
    font-size: 15px;

    .modal-buttons-container {
      width: 100%;

      button {
        height: 30px;
        width: 100px;
      }
    }

    .modal-content {
      p {
        padding: 0;
        margin: 0;
        width: 100%;
      }
    }
  }

  @media (max-width: 400px) {
    width: 260px;
  }
`;

export const CreateVenueModalStyles = styled(ModalStyles)`
  background: #b9e3a2;  
  border: 2px solid #488127; 
 
  .modal-buttons-container {
    

    button {
      
    }
  }
` 
  