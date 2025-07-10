import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginButton = styled.button`
  background: #4B3832;
  color: #fff;
  padding: 5px;
  height: 34px;
  margin-top: 20px;
  border: none;
  font-weight: bold;
`;

export const LogOutButton = styled.button`
  background: var(--blue-980); 
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dbc18d; 
  border: 2px solid #b7963c;
  padding: 5px;
  height: 30px;
  font-weight: 500;
  font-size: 18px;
  border-radius: 8px;
  margin: auto 10px 10px auto;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 14px;
    margin: auto 6px 10px auto;
    padding: 0 4px 0 4px;
    display: none;
  }
`;

export const ViewVenueButton = styled.button`
  background: #403007;
  color: #fff;
  padding: 5px;
  margin-top: auto;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;

export const BookNowButton = styled.button`
  background: #000;
  color: #fff;
  padding: 10px;
  font-weight: bold;
  width: 400px;
  max-width: 400px;
  margin: 30px 0 20px 0;

  @media (max-width: 950px) {
    margin: 20px 0 20px 0;
  }

  @media (max-width: 800px) {
    margin: 0px 0 20px 0;
  }

  @media (max-width: 940px) {
    max-width: 350px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const RegisterButton = styled.button`
  background: #4B3832;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  border-radius: 3px;
  border: 1px solid var(--blue-970);
  height: 37px;
  padding: 5px;
  border: none;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #D6C1A7;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    height: 30px;
    font-size: 18px;
  }
`;

export const CloseModalButton = styled.button`
  display: flex;
  padding: 2px;
  font-weight: bold;
  font-size: 30px;
  background: transparent;
  border: none;
  position: absolute;
  top: 5px;
  right: 15px;

  &:hover {
    color: red;
  }
`;

export const BookingFormSubmitButton = styled.button`
  background: #000;
  color: #fff;
  width: 100%;
  margin-top: 120px; 

 &:hover{
    outline: 2px solid  #EFE0D0;
    border: none;
  }
`;

export const UpdateAvatarButton = styled.button`
  background: #362815;
  color: #fff;
  width: 130px;
  padding: 5px 8px 5px 8px;
  margin-left: 7px;
  font-size: 16px;
  white-space: nowrap;
  border-radius: 3px;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #b7963c;
    border: 1px solid transparent;
  }

  @media (max-width: 440px) {
    width: 50%;
    margin-right: auto;
    margin-left: 4px;
    margin-top: 7px;
  }
`;

export const VenueFormSubmitButton = styled.button`
  background: #000;
  color: #fff;
  width: 100%;
  margin-top: 10px;
  font-size: 18px;
`;

export const CreateVenueButton = styled.button`
  background: #000;
  color: #fff;
  font-weight: 700;
  width: 100%;
  margin-top: 18px;

  &:hover {
    color: #32cd32;
  }
`;

export const BecomeVenueManagerButton = styled.button`
  background: #000;
  color: #fff;
  max-width: 217px;
  border-radius: 0;
  border: none;
  padding: 0 15px;
  font-size: 16px;
  margin-bottom: 30px;
  border-radius: 5px;
  height: 40px;
  white-space: nowrap;

  @media (max-width: 550px) {
    min-width: 100%;
  }
`;

export const UpdateVenueButton = styled.button`
  background: #000;
  color: #fff;
  padding: 10px;
  font-weight: bold;
  width: 180px;
  margin: 20px 82px 20px 0;
  white-space: nowrap;

  &:hover{
    cursor: pointer;
    outline: transparent;
    border: 1px solid transparent;
  }

  @media (max-width: 890px) {
    width: 170px;
    margin: 20px 62px 20px 0;
  }

  @media (max-width: 400px) {
    width: 160px;
    margin: 20px 42px 20px 0;
  }

  @media (max-width: 370px) {
    width: 140px;
    margin: 20px 32px 20px 0;
  }
`;
//Buttons on the users booked venue Cards
export const ViewBookedVenueButton = styled.button`
background:  #000;
display: flex;
color: #fff;
padding-block: 2px;
padding-inline: 0;
font-weight: bold;
width: 80px;
margin-right: 10px;
font-size: 14px;
height: 30px;
border-radius: 3px;
justify-content: center;
align-items: center; 
border: none;

&:hover{
    outline: 2px solid  #EFE0D0;
    border: none;
  }

@media (max-width: 450px) {
  font-size: 14px;
  height: 25px;
  width: 52px;
  padding: 3px;
  margin-right: 6px;
}

@media (max-width: 350px) {
  font-size: 13px;
  width: 60px;
  padding: 2px;
}
`;

export const MyBookingsUpdateButton = styled.button`
  background:  #000;;
  display: flex;
  color: #fff;
  padding-block: 2px;
  padding-inline: 0;
  font-weight: bold;
  width: 80px;
  margin-right: 10px;
  font-size: 14px;
  height: 30px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  border: none;

  &:hover{
    outline: 2px solid  #EFE0D0;
    border: none;
  }

  @media (max-width: 450px) {
    font-size: 14px;
    height: 25px;
    width: 66px;
    padding: 3px;
    margin-right: 6px;
  }

  @media (max-width: 350px) {
    font-size: 13px;
    width: 60px;
    padding: 2px;
  }
`;

export const MyBookingsDeleteLink = styled(Link)`
  color: red;
  padding-inline: 4px;
  padding-block: 0;
  font-weight: bold;
  margin-left: auto;
  margin-right: 0;
  font-size: 15px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0 2px 3px 2px;
    border-radius: 6px;
    color: red;
  }

  @media (max-width: 450px) {
    font-size: 14px;
    height: 22px;

    &:hover {
      box-shadow: 0 1px 2px 1px;
      border-radius: 6px;
      color: red;
    }
  }

  @media (max-width: 350px) {
    font-size: 13px;
  }
`;
