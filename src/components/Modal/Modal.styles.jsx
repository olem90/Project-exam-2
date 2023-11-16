import styled from "styled-components";

export const ModalStyles = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #000;
  font-size: 18px;
  height: 180px;
  width: 460px;
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  z-index: 99;
  background: #fff;
  padding: 10px;
  box-shadow: 0 4px 8px 0 blue;

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
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            width: 40%;
            border: 2px solid purple;
            margin-inline: auto;

          }
    }
`


