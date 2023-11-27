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
  box-sizing: border-box;
 
    h1 {
        margin: 0; 
        margin-bottom: 10px; 
        padding: 0;
        color: var(--blue-990);  
    }

    img {
        max-width: 220px;
        object-fit: cover;
        max-height: 120px;
    }
`

export const ProfileOptionsStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 20px 0; 
  box-sizing: border-box;

    .profile-link {
        font-size: 22px; 
        text-align: center; 
        border-radius: 5px;  
        padding: 3px 6px;          
        max-width: 200px;  
        transition: 0.2s ease-in-out;   
        background: var(--blue-200);
        color: var(--blue-990);
        border: 2px solid var(--blue-970);    

          &:hover {
            border: 2px solid var(--blue-100);  
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
  background: #FFF5EE;
  
    img {
        max-width: 140px;
        min-width: 140px;
        max-height: 130px;
        min-height: 130px;
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
        color: ##000;
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
  max-height: 170px;
  min-height: 170px;
  margin-block: 25px;
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8); 
  width: 100%;
  max-width: 700px; 
  padding: 10px;
  transition: background-color 0.3s; 
  background: #FFFAFA;

    &:hover {
      box-shadow: 0 2px 5px var(--blue-800);   
      text-decoration: none;     
    }

    img {
        max-width: 160px;
        min-width: 160px;
        max-height: 140px;
        min-height: 100%;
        object-fit: cover;
        margin-block: auto;
    }

    h3 {
      margin: 0;
      padding: 0;
      color: #000;
      margin-left: 10px;
    }

    .venue-card-info {
      display: flex;
      flex-direction: column; 
      margin-top: 10px; 
      margin-left: 10px;
    }
`

export const UsersVenuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: auto; 
  width: 75%;

    h2 {
        margin-top: 40px; 
        padding: 0;
        color: #000;
    }
`

export const UsersVenuesInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

    span {
      color: #000;
    }
`