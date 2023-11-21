import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ProfileWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 90%;
  margin-inline: auto;

    .profile-container {
        display: flex;
        width: 80%;
        margin-inline: auto;
    }

    .not-logged-in {
      border: 2px solid red;
      width: 420px;
      margin-inline: auto;
      padding: 5px;
      display: flex;
      flex-direction: column;
      margin-block: 30px;
    }
`











export const UserDataStyles = styled.div`
  display: flex;
  flex-direction: column;

    h1 {
        margin-top: 20px;
        padding: 0;
    }

    img {
        max-width: 220px;
        object-fit: cover;
        max-height: 220px;
    }
`

export const ProfileOptionsStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 20px 0;

    a {
        font-size: 26px;
        text-decoration: underline;
    }
`

export const UserBookingsStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
 
`

export const UserBookingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 90px;
  width: 83%;
  margin-top: 40px;

    h2 {
        margin-top: 65px;
        padding: 0;
    }
`

export const UsersBookingsCards = styled.div`
  display: flex;
  max-height: 100px;
  margin-block: 15px;
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
  width: 100%;
  padding: 10px;

    img {
        max-width: 120px;
        min-width: 120px;
        max-height: 100%;
        min-height: 100%;
        object-fit: cover;
        margin-block: auto;
    }
`

export const UsersBookingsInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

    h3 {
        margin-top: 0;
        margin-bottom: auto;
        padding: 0;
    }

    span {
        margin: 0;
        padding: 0;
        margin-top: auto;
    }
`

export const UsersVenueCards = styled(Link)`
  display: flex;
  max-height: 140px;
  min-height: 140px;
  margin-block: 25px;

  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
  width: 100%;
  padding: 10px;
  border: 2px solid red;
  transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
      text-decoration: none; 
    }

    img {
        max-width: 170px;
        min-width: 170px;
        max-height: 100%;
        min-height: 100%;
        object-fit: cover;
        margin-block: auto;
    }

    h3 {
      margin: 0;
      padding: 0;
    }
`

export const UsersVenuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 150px;
  width: 83%;
  margin-top: 40px;

    h2 {
        margin-top: 65px;
        padding: 0;
    }
`

export const UsersVenuesInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`