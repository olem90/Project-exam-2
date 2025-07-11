import styled from "styled-components";

export const FormStylesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #003;
  width: 100%;
  max-width: 420px;
  margin-inline: auto;
  border-radius: 5px;
  padding: 22px 30px;
  margin-top: 150px;
  background: #D6C1A7;
  z-index: 15;
  color: #000;

  .success-message {
    color: #32cd32;
    font-size: 20px;
    font-weight: bold;
  }

  input {
    font-size: 16px;
    padding: 4px;
    border: 1px solid #A17C6B;
    margin-bottom: 5px;
    border-radius: 3px;
    background: #fffafa;
    outline: none;
    color: #000;
    letter-spacing: 0.8px;
  }

  input:focus {
    border: 2px solid rgb(116, 73, 8);
  }

  label {
    font-size: 18px;
    font-weight: 700;
    color: #000;
  }

  span {
    color: red;
    font-size: 14px;
  }

  @media (max-width: 700px) {
    max-width: 370px;
  }

  @media (max-width: 450px) {
    max-width: 80%;
    margin-top: 90px;

    label {
      font-size: 16px;
    }

    input {
      font-size: 15px;
      padding: 3px;
    }
  }
`;
export default FormStyles;
