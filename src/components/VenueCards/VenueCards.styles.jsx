import styled from "styled-components";

export const VenueCardsWrapper = styled.div`
  gap: 50px 0px;
  margin-top: 60px;
  width: 94%;
  margin-inline: auto;

  .venue-cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    box-sizing: border-box;
    gap: 50px 40px;
    color: #000;
    margin-inline: auto;
    width: fit-content;
  }

  @media (max-width: 1270px) {
    grid-template-columns: repeat(2, 1fr);
    width: 87%;

    .venue-cards-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px 60px;
    }
  }

  @media (max-width: 1000px) {
    width: 98%;

    .venue-cards-container {
      gap: 40px 60px;
    }
  }

  @media (max-width: 730px) {
    width: 100%;

    .venue-cards-container {
      grid-template-columns: repeat(1, 1fr);
      gap: 40px 0px;
    }
  }
`;

export const VenueCardsStyles = styled.div`
  box-sizing: border-box;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  max-width: 400px;
  min-width: 400px;
  max-height: 400px;
  min-height: 400px;
  background: #d5c8ad;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6); 
  overflow: hidden;

  .venue-card-info {
    display: flex;
    margin-bottom: 10px;
    width: 100%;

    .city-and-country-container,
    .price-guests-container {
      display: flex;
      flex-direction: column;
      padding-inline: 5px;
    }

    .venue-max-guests {
      color: #000;
    }

    .venue-price {
      margin-left: auto;
    }

    .price-guests-container {
      margin-left: auto;
    }
  } 

  img {
    max-width: 100%;
    min-width: 100%;
    max-height: 190px;
    min-height: 190px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  span {
    font-size: 18px;
    color: #000;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .star {
    color: gold;
  }

  h1 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 27px;
    word-wrap: break-word;
  }

  @media (max-width: 1425px) {
    max-width: 400px;
    min-width: 400px;
  }

  @media (max-width: 1350px) {
    max-width: 370px;
    min-width: 370px;

    span {
      font-size: 18px;
    }
  }

  @media (max-width: 1200px) {
    max-width: 400px;
    min-width: 400px;
  }

  @media (max-width: 1000px) {
    max-width: 340px;
    min-width: 340px;

    h1 {
      font-size: 26px;
    }

    span {
      font-size: 16px;
    }
  }

  @media (max-width: 820px) {
    max-width: 320px;
    min-width: 320px;

    h1 {
      font-size: 23px;
    }
  }

  @media (max-width: 730px) {
    width: 100%;
  }

  @media (max-width: 700px) {
    max-width: 400px;
    min-width: 400px;
    max-height: 390px;
    min-height: 390px;
  }

  @media (max-width: 440px) {
    max-width: 320px;
    min-width: 320px;

    span {
      font-size: 16px;
    }
  }

  @media (max-width: 440px) {
    max-width: 340px;
    min-width: 280px;
  }

  @media (max-width: 370px) {
    max-width: 300px;
    min-width: 286px;
  }
`;
