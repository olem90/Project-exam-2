import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ProfileWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-inline: auto;

    .profile-container {
        display: flex;
        width: 100%; 
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
  padding: 20px 100px 60px 100px;  
  background: var(--blue-300);   
  max-height: 544px;   
  border-radius: 0 20px 20px 0;  
 
    h1 {
        margin: 0;
        margin-bottom: 40px; 
        padding: 0;
        color: var(--blue-990);  
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

    .profile-link {
        font-size: 22px; 
        text-align: center; 
        border-radius: 5px;  
        padding: 3px 6px;          
        max-width: 200px;  
        transition: 0.3s ease-in-out;  
        background: var(--blue-200);
        color: var(--blue-990);
        border: 1px solid #000; 

          &:hover {
            background: var(--blue-200);
            color: var(--blue-990);
            border: 1px solid #000; 
          }
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
  width: 75%;
  margin-inline: auto; 

    h2 {
        margin-top: 40px; 
        padding: 0; 
    }

    .no-bookings {
        font-weight: bold;
        font-size: 22px;
        margin-top: 120px;
    }
` 

export const UsersBookingsCards = styled.div`
  display: flex;
  margin-block: 15px;
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
  width: 100%;
  max-width: 700px;
  padding: 10px; 
  height: auto; 
  background: #ffffff;  
  
    img {
        max-width: 120px;
        min-width: 120px;
        max-height: 130px;
        min-height: 120px;
        object-fit: cover;
        margin-block: auto;
    }
`

export const UsersBookingsInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 100%;

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

    .my-bookings-buttons {
      display: flex;
      min-width: 300px;
      margin-top: 15px;
    }
`

export const UsersVenueCards = styled(Link)`
  display: flex;
  max-height: 140px;
  min-height: 140px;
  margin-block: 25px;
  border: 2px solid red;
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
  width: 100%;
  max-width: 700px;
  padding: 10px;
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
  margin-left: 50px;
  width: 83%;

    h2 {
        margin-top: 40px; 
        padding: 0;
    }
`

export const UsersVenuesInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`