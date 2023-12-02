import styled from "styled-components";

export const EditAvatarWrapper = styled.div`
  min-height: calc(100dvh - 80px);
  margin-bottom: -130px;
  display: flex;
  justify-content: center;
`

export const EditAvatarForm = styled.form`
  border: 2px solid brown;
  width: fit-content;; 
  padding: 10px;
  height: 40px;
  margin-top: 100px;

  label {
    font-size: 19px;
    margin-right: 7px; 
  }

  input {
    font-size: 16px;
    border: 1px solid #000;
    border-radius: 4px;
    padding: 3px 0 3px 3px;
  }
`
