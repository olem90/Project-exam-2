import styled from "styled-components";

export const LoginFormWrapper = styled.div`
  border: 3px solid gold;
  display: flex;
`

export const LoginFormStyles = styled.form`
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
  padding: 15px;
  margin-inline: auto;
  margin-block: 40px;
   
    label {
        font-size: 18px;
        font-weight: 600;
    }

    input {
        padding: 3px;
        font-size: 15px;
    }

    span {
        color: red;
        font-weight: 700;
        font-size: 15px;
    }
`

