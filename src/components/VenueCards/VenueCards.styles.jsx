import styled from "styled-components";

export const VenueCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 2px solid red;
  box-sizing: border-box;

    
`

export const VenueCardsStyles = styled.div`
  border: 2px solid purple;
  display: flex;
  flex-direction: column;
  width: 500px;

    img {
        max-width: 300px;
        min-width: 300px;
        max-height: 300px;
        min-height: 300px;
    }
`