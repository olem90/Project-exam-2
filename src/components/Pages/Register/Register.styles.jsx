import styled from "styled-components";

export const FormStylesWrapper = styled.div` 
  border:2px solid gold;
  display: flex;
`

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  border: 3px solid red;
  width: 100%;
  max-width:600px;
  margin-inline: auto;
  padding: 15px;

    input {
        font-size: 16px;
        padding: 5px;
    }

    label {
        font-size: 17px;
        font-weight: 700;
    }

    span {
        color: red;
        font-size: 14px;
    }

    button {
        background: #000;
        margin-top: 10px;
        color: #fff;
    }
`
export default FormStyles;
