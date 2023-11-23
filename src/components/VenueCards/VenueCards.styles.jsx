import styled from "styled-components";

export const VenueCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 4px solid red;
  box-sizing: border-box;
  gap: 20px 0px; npm run dev
`

export const VenueCardsStyles = styled.div`
  box-sizing: border-box;
  border: 2px solid purple;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  min-width: 500px;
  max-height: 460px;
  min-height: 460px;
  margin-inline: auto;

    img {
        max-width: 300px;
        min-width: 100%;
        max-height: 200px;
        min-height: 200px;
        object-fit: cover;
    }

    p {
        padding: 9px;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .star {
      color: gold;
    }

    h1 {
      margin: 0;
      margin-block: 5px;
      font-size: 29px;
    }
`
