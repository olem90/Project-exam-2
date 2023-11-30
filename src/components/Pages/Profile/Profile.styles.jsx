import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ProfileWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-inline: auto;  
  min-height: calc(100vh - 80px);

    .profile-container { 
        display: flex;
        width: 100%; 
        margin-inline: auto;  
    } 

    .not-logged-in {
      border: 2px solid var(--blue-900);  
      width: 420px;
      margin-inline: auto;
      padding: 15px;
      display: flex;
      flex-direction: column;
      margin-top: 100px;  
      font-size: 18px; 
      background: var(--blue-200);     

        a{
          color: #000;
          font-weight: bold; 
          text-decoration: underline; 
        }

        p, div {
          margin: auto; 
          min-width: 80%;
          max-width: 80%;  
          text-align: left;   

        }
    }

    @media(max-width: 940px) {

      .profile-container {
        display: flex;
        flex-direction: column; 
      } 
     
      .account-info {
        display: flex;
        gap: 0 70px;  
        width: 76%;
        margin-inline: auto;  
      }

      .profile-name-info {
        margin-top: 50px;     
      }
    }
  
    @media(max-width: 600px) { 
      .account-info {
        display: flex;
        gap: 0 30px;   
        width: 76%;
        margin-inline: auto;  
        
      }
      .profile-name-info {
        margin-top: 40px;      
      }
    }
    @media(max-width: 550px) {
      .account-info {
        display: flex;
        flex-direction: column;
        gap: 0 70px;  
        width: 76%;
        margin-inline: auto;  
      }

      .profile-name-info {
        margin-top: 0px;      
      }
    }
` 
  
export const UserDataStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 100px 260px 100px;    
  background: var(--blue-300);   
  max-height: 600px;    
  border-radius: 0 0 20px 0;  
  box-sizing: border-box;  

    .edit-link {
      color: var(--blue-950); 
      font-size: 17px;
      font-weight: bold;  
      transition: 0.3s ease-in-out; 
 
      &:hover {
        text-decoration: underline;   
      }
    }

    .profile-email {
      white-space: nowrap; 
    }

    .email-and-venue-manager {  
      display: flex;
      flex-direction: column;  
    }

    .profile-image   {
      display: flex;
      max-width: 220px; 
      min-width: 220px;
      object-fit: cover;
      max-height: 180px; 
    }
 
    h1 {
        margin: 0; 
        margin-bottom: 10px; 
        padding: 0;
        color: var(--blue-990);  
    }

    @media(max-width: 1100px) {
      padding: 20px 70px 60px 70px;  
    }

    @media(max-width: 1000px) {
      padding: 20px 30px 40px 60px;
    }

    @media(max-width: 940px) { 
      padding-block: 20px;  
      padding-inline: 0px; 
      margin: 0;   
      min-width: 100%; 
      max-width: 100%; 
      border-radius: 0; 

        .profile-image {
          margin-top: 20px;  
          max-width: 200px;  
          min-width: 200px;      
        }
      } 

    @media(max-width: 700px) {

        .profile-image {
          margin-top: 20px;  
          max-width: 160px;    
          min-width: 160px;       
        } 

        h1 {
          font-size: 40px;
        }

        h2 {
          font-size: 24px;  
        }
    }

    @media(max-width: 600px) {


    }

    @media(max-width: 550px) {
      
      .profile-image {
        min-width: 300px;
      }

      .account-info {
        width: fit-content;
      }
    }
`

export const ProfileOptionsStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px; 
  gap: 10px 0;
  box-sizing: border-box;  

    .profile-link {
        font-size: 20px;   
        text-align: center; 
        border-radius: 5px;  
        padding: 3px 6px;          
        max-width: 200px;  
        transition: 0.2s ease-in-out;   
        background: var(--blue-200);
        color: var(--blue-990);
        border: 2px solid var(--blue-970);  
        font-weight: 600;    
    } 

    @media(max-width: 940px) {
      width: 77%;    
      margin-inline: auto;
      display: flex; 
      flex-direction: row;  
      justify-content: start;   
      
        :nth-child(2) {
          margin-left: 60px;
        }
    }

    @media(max-width: 550px) {
      display: flex; 
      flex-direction: column;    
      width: 300px;  
      
        .profile-link {
          font-size: 20px; 
          max-width: 100%;
          padding: 2px 4px;   
 
        }
      
        :nth-child(2) { 
          margin-left: 0;    
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

    @media(max-width: 940px) {  
      width: 130%;   
      
      .users-bookings-container { 
        width: fit-content;     
        margin-left: 12%;
      } 
    }

    @media(max-width: 600px) {
      width: 140%; 

      .users-bookings-container { 
        width: fit-content;   
        margin-inline: 19px 8px;       
      }  
    }

    @media(max-width: 500px) {

      .users-bookings-container {
        min-width: 94%;   
        margin-inline: 14px 14px;              
      }  
    }

    @media(max-width: 400px) {

      .users-bookings-container {
        margin-inline: 10px 3px;                  
      }  
    }
` 

export const UsersBookingsCards = styled.div`
  display: flex;
  margin-block: 15px;
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
  width: 100%;
  max-width: 700px;
  padding: 6px;   
  height: auto; 
  background: #FFF5EE;
  margin-bottom: 30px;  
  
    img {
        max-width: 140px;
        min-width: 140px;
        max-height: 100%;
        min-height: 100%;
        object-fit: cover; 
        margin-block: auto;  
    }

    @media(max-width: 600px) { 
      min-width: 350px;  

      img {
        max-width: 110px;
        min-width: 110px;
      }
    }
 
    @media(max-width: 400px) { 
      min-width: 300px;  

      img {
        max-width: 90px; 
        min-width: 90px; 
      }

    }
`

export const UsersBookingsInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 100%;

    h3 {
        margin-top: 0;
        margin-bottom: 10px;
        padding: 0;
        color: ##000; 
        line-height: 23px;  
    } 

    span {
        margin: 0;
        padding: 0;
        font-size: 16px;     
    }

    .my-bookings-buttons {
      display: flex;
      min-width: 300px;
      margin-top: 15px;
    }

    @media(max-width: 500px) {   
      max-width: 320px;   

      .my-bookings-buttons {
        min-width: 100%;
      } 
    } 

    @media(max-width: 400px) {
      margin-left: 5px;
      
      span {
        margin: 0;
        padding: 0;
        font-size: 14px;       
      }

      h3 {
        font-size: 18px;
        white-space: normal;
        word-wrap: break-word;
        word-break: break-all;     
      }
    }
`

export const UsersVenueCards = styled(Link)`
  display: flex;
  height: auto;
  margin-block: 25px;
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);  
  width: 100%;
  max-width: 700px; 
  min-width: 500px;
  padding: 10px;
  transition: background-color 0.3s; 
  background: #FFFAFA;
  border: 1px solid #000;  

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
      font-size: 22px;  
    }

    .venue-card-info {
      display: flex;
      flex-direction: column; 
      margin-top: 10px; 
      margin-left: 10px; 
    }

    @media(max-width: 1100px) {
      max-width: 430px; 
    }

    @media(max-width: 1000px) {
      max-width: 380px; 

      .venue-card-info {
        margin-left: 0;  
      }  

      h3 {
        margin-left: 0;  
        font-size: 20px;   
      }

      img {
        max-width: 130px;
        min-width: 130px;
        min-height: 95%;    
      }
    }
    @media(max-width: 940px) {
      min-width: 600px;
      max-width: 600px; 

    }

    @media(max-width: 700px) { 
      min-width: 460px;   
      max-width: 500px;        

    }  

    @media(max-width: 550px) {
      min-width: 400px;    
      max-width: 500px;  

      img{
        min-width: 110px;    
        max-width: 110px;     
      }
    }

    @media(max-width: 440px) {
      min-width: 300px;   
      
      .venue-name {
        font-size: 20px;    
        white-space: normal;
        word-wrap: break-word;
        word-break: break-all; 
      } 

      .venue-card-info { 
        font-size: 15px; 
      }  
    
      img{
        min-width: 90px;        
        max-width: 90px;      
      } 
    } 

    @media(max-width: 400px) {
      
      img {
        max-width: 100px;  
        min-width: 100px;
      }

    }

    @media(max-width: 350px) { 

      .venue-name {
        font-size: 18px; 
      }

      span {
        font-size: 14px;    
      }

      .profile-image {
        max-width: 100px; 
        min-width: 100px;
      }  
 
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
 
    @media(max-width: 1100px) {  
      width: 80%;    
    }

    @media(max-width: 1000px) {  
      width: 90%;    
    } 

    @media(max-width: 940px) { 
      width: 140%;  
      justify-content: center;    
      
        .users-venue-container {
          width: fit-content;   
          margin-inline: auto;   
        }
    } 

    @media(max-width: 550px) {

      .users-venue-container {   
        width: 94%;       
      }
    }

    @media(max-width: 440px) {
      .users-venue-container {
        width: 97%;  
      }

    }

    
    
`

export const UsersVenuesInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

    span {
      color: #000;
    }

    .booking-amount {
      margin-top: 20px;    
    }

    @media(max-width: 1000px) {
      .booking-amount {
        margin-top: 8px;  
      }
    }
`