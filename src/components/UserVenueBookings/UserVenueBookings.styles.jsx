import styled from "styled-components";

export const VenueBookingsCards = styled.div`
  border: 2px solid purple; 
  min-height: 100px;
  max-height: 200px;  
  display: flex;
  padding: 15px; 
  margin-bottom: 15px;
  max-width: 400px; 

    .user-venue-booking-img-container {
      border: 2px solid gold; 
      height: fit-content;   
      margin-left: 15px;  
    }

    .user-venue-bookings-img {
      max-width: 130px;    
      min-height: 100%; 
    }

    .user-venue-bookings-text {
      display: flex;
      flex-direction: column;  
      height: fit-content;  
      border: 2px solid blue;  
    }

    .image-container {
      max-width: 160px; 
    }
`

export const VenueBookingsWrapper = styled.div`
  box-sizing: border-box;
  width: 80%; 
  margin-top: 40px; 
  margin-left: 9%;   
  border: 2px solid red; 
`
