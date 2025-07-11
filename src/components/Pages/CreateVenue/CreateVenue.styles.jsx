import styled from "styled-components";

export const CreateVenueWrapper = styled.div`
  box-sizing: border-box;
  border: 2px solid transparent;
  background: #D6C1A7;
  min-height: 100%;
  margin-bottom: -55px;
  color: #000;

  .update-venue-h1 {
    font-size: 30px;
  }

  .successful-update-message {
    color: #1f8e00;
    font-weight: bold;
    margin-top: 20px;
    font-size: 22px;
    border: 2px solid #1f8e00;
    padding: 6px;
    border-radius: 10px;

    @media (max-width: 600px) {
      font-size: 19px;
    }

    @media (max-width: 400px) { 
      font-size: 17px;
    }
  }

  .error-update-message {
    color: #be0127;
    font-weight: bold;
    margin-top: 20px;
    font-size: 22px;
    border: 2px solid red;
    padding: 6px;
    border-radius: 10px;

    @media (max-width: 600px) {
      font-size: 19px;
    }

    @media (max-width: 400px) {
      font-size: 17px;
    }
  }

  .create-venue-container {
    box-shadow: 0 3px 3px  #EFE0D0;
    border-radius: 8px;
    width: 50%;
    padding: 12px;
    background:  #EFE0D0;
    margin: 50px auto 70px auto;
    color: #000;
  }

  h1 {
    font-size: 32px;
    margin-left: 7px;
    text-align: center;
    color: #000;
  }

  @media (max-width: 1200px) {
    .create-venue-container {
      width: 510px;
    }

    h1 {
      font-size: 28px;
      white-space: nowrap;
    }
  }

  @media (max-width: 800px) {
    .create-venue-container {
      width: 480px;
    }
  }

  @media (max-width: 600px) {
    .create-venue-container {
      width: 85%;
    }
  }

  @media (max-width: 400px) {
    .create-venue-container {
      width: 90%;
    }

    h1 {
      font-size: 25px;
    }
  }
`;

export const CreateVenueForm = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  min-width: 400px;
  margin-inline: auto;
  padding-right: 10px;
  margin-block: 30px 70px;

  h2 {
    margin: 0;
    padding-block: 20px;
    color: #000;
    font-size: 26px;
  }

  .form-input {
    padding: 3px 0 3px 5px;
    width: 98%;
    min-width: 300px;
    font-size: 16px;
    margin-bottom: 8px;
    outline: transparent;
    border: 1px solid #A17C6B;
    background: #fffafa;

    &:focus {
      outline: 1px solid #A17C6B;
    }
  }

  label {
    font-size: 17px;
    font-weight: bold;
    color: #000;
  }

  @media (max-width: 510px) {
    min-width: 300px;

    h2 {
      font-size: 23px;
    }

    label {
      font-size: 16px;
    }

    .form-input {
      font-size: 15px;
      min-width: 100%;
      max-width: 100%;
    }
  }

  @media (max-width: 400px) {
    min-width: 280px;

    label {
      font-size: 15px;
    }

    h2 {
      font-size: 21px;
    }

    .form-input {
      font-size: 14px;
      min-width: 100%;
      max-width: 100%;
    }
  }
`;

export const VenueFacilities = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 100px;

  .facility-checkbox {
    width: 16px;
    height: 16px;
    accent-color: #fff;
    background: #fff;
  }

  .wifi-parking-container,
  .breakfast-pets-container {
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    input {
      margin-bottom: 40px;
      background: red;
    }

    label {
      font-size: 17px;
      font-weight: bold;
      color: #000;
      margin: 0 3px 36px 0;
    }
  }
  .breakfast-pets-container label:nth-of-type(2) {
    margin-left: 30px;
  }
  .wifi-parking-container label:nth-of-type(2) {
    margin-left: 74px;
  }

  @media (max-width: 510px) {
    label {
      font-size: 16px;
    }
  }

  @media (max-width: 400px) {
    label {
      font-size: 15px !important;
    }
  }
`;
