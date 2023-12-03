import styled from "styled-components";

//Using styled component SpecificVenueStyles from SpecificVenue.styles.jsx

export const UserSpecificVenueWrapper = styled.div`
  .update-venue-buttons-container {
    max-width: 400px;
    padding: 0;

    @media (max-width: 890px) {
      max-width: 360px;
    }
  }
`;
