import styled from "styled-components";

export const LoginFormWrapper = styled.div`
  display: flex;
  min-height: 100vh;

  .login-error {
    color: #8b0000;
    padding-block: 7px;
  }
`;

export const LoginFormStyles = styled.form`
  border: 1px solid #A17C6B;;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  border-radius: 5px;
  box-shadow: 0 3px 5px  #A17C6B;;
  background: #D6C1A7;
  z-index: 15;
  transform: translate(0%, -50%);

  .show-hide-pw {
    color: #000;
    font-size: 12px;
    position: absolute;
    right: 40px;
    top: 113px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    margin-top: 5px;
  }

  input {
    padding: 3px;
    font-size: 16px;
    border-radius: 3px;
    color: var(--blue-990);
    font-weight: 500;
    letter-spacing: 0.3px;
    border: 1px solid #A17C6B;
    background:rgb(255, 255, 255);

    &:focus {
      border: 1px solid rgb(116, 73, 8);
      outline: 1px solid rgb(116, 73, 8);
    }
  }

  span {
    color: red;
    font-weight: 700;
    font-size: 15px;
  }

  @media (max-width: 600px) {
    width: 60%;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    width: 80%;
    margin-top: 70px;
  }
`;
