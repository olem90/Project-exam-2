import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginButton = styled.button`
  background: var(--blue-980);
  color: #fff;
  padding: 5px;
  height: 34px;
  margin-top: 25px;
  border: none;
  font-weight: bold;
 
`

export const ViewVenueButton = styled.button`
  background: #000;
  color: #fff;
  padding: 5px;
  margin-top: auto;
  border: none;
  font-weight: bold;
  border-radius: 5px;
`

export const BookNowButton = styled.button`
  background: #000;
  color: #fff;
  padding: 10px;
  font-weight: bold;
  width: 51.7%;
  margin: 40px 0 20px 0 ;
`

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
`

export const BookingFormSubmitButton = styled.button`
  background: #000;
  color: #fff;
  width: 100%;
  margin-top: 120px !important;
`

export const BecomeVenueManagerButton = styled.button`
  background: #000;
  color: #fff;
  width: fit-content;
  border-radius: 0;
  border: none;
  margin-bottom: 30px;
`

export const UpdateVenueButton = styled.button`
  background: #000;
  color: #fff;
  padding: 10px;
  font-weight: bold;
  width: 30%;
  margin: 40px 82px 20px 0 ;
`

export const MyBookingsUpdateButton = styled.button`
  background: #000;
  color: #fff;
  padding: 2px;
  font-weight: bold;
  width: 100px;
  margin-right: auto;
  font-size: 14px;
  height: 30px;
  border-radius: 3px;
`

export const MyBookingsDeleteLink = styled(Link)`
  color: red;
  padding: 4px;
  font-weight: bold;
  margin-left: auto;
  margin-right: 0;
  font-size: 15px;

    &:hover {
      box-shadow: 0 3px 3px 2px;
      border-radius: 6px;
      color: red;
    }
`

export const ConfirmDeleteButton = styled.button`
  
`