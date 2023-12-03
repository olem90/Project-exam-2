import styled from "styled-components";

export const VenueBookingsCards = styled.div`
  border: 2px solid gray;
  min-height: 100px;
  max-height: 200px;
  display: flex;
  padding: 5px 2px;
  margin-bottom: 15px;
  max-width: 388px;
  min-width: 388px;
  background: #e0cfa0;

  .user-venue-booking-img-container {
    height: fit-content;
    margin-left: 15px;
  }

  .user-venue-bookings-img {
    max-width: 130px;
    min-height: 100%;
    object-fit: cover;
  }

  .user-venue-bookings-text {
    display: flex;
    flex-direction: column;
    height: fit-content;
    min-width: 241px;
    max-width: 241px;
    font-size: 16px;
  }

  .image-container {
    max-width: 160px;
  }

  @media (max-width: 500px) {
    max-width: 328px;
    min-width: 328px;
  }

  @media (max-width: 400px) {
    max-width: 300px;
    min-width: 300px;
  }

  @media (max-width: 350px) {
    max-width: 283px;
    min-width: 283px;
  }
`;

export const VenueBookingsWrapper = styled.div`
  box-sizing: border-box;
  width: 80%;
  margin-top: 40px;
  margin-left: 9%;

  .venue-bookings-container {
    width: 72%;
    margin-inline: auto;
  }

  @media (max-width: 1200px) {
    margin-inline: auto;

    .venue-bookings-container {
      margin-right: auto;
      margin-left: 15px;
    }
  }

  @media (max-width: 1050px) {
    width: 92%;

    .venue-bookings-container {
      margin-right: auto;
      margin-left: 32px;
    }
  }

  @media (max-width: 950px) {
    width: 93%;

    .venue-bookings-container {
      margin-right: auto;
      margin-left: 0;
    }
  }

  @media (max-width: 800px) {
    width: 87%;

    .venue-bookings-container {
      margin-right: auto;
      margin-left: 5px;
    }
  }

  @media (max-width: 700px) {
    .venue-bookings-container {
      margin-right: auto;
      margin-left: 5px;
      width: 96%;
    }
  }

  @media (max-width: 600px) {
    width: 94%;

    .venue-bookings-container {
      margin-right: auto;
      margin-left: 5px;
    }
  }

  @media (max-width: 500px) {
    width: 96%;

    .venue-bookings-container {
      margin-right: auto;
      margin-left: 5px;
    }

    .user-venue-bookings-img {
      max-width: 80px;
      min-height: 100%;
      margin-left: 5px;
    }

    .user-venue-booking-img-container {
      height: 134px;
      margin-left: 2px;
    }
  }

  @media (max-width: 400px) {
    width: 100%;

    .venue-bookings-container {
      margin-inline: auto;
    }

    .user-venue-bookings-text {
      font-size: 14px;
      margin-right: 0;
      min-width: 215px;
      max-width: 215px;
    }

    .user-venue-booking-img-container {
      height: 120px;
      margin-left: 0;
    }
  }

  @media (max-width: 350px) {
    .user-venue-bookings-text {
      min-width: 198px;
      max-width: 198px;
      font-size: 13px;
    }

    .venue-bookings-container {
      margin-inline: auto;
    }

    .user-venue-booking-img-container {
      max-height: 110px;
    }
  }
`;
 