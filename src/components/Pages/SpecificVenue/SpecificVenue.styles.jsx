import styled from "styled-components";

export const SpecificVenueWrapper = styled.div`
  border: 2px solid pink;

  .blurred {
    filter: blur(4px);
    opacity: 0.6;
  }
`

export const SpecificVenueStyles = styled.div`
  color: #000;
  width: fit-content; 
  margin-inline: auto;
  box-sizing: border-box;

    h3  {
        margin: 30px 0 10px 0;
        margin-top: 30px;
        padding: 0;
        font-weight: 500;
    }

    .blurred {
        filter: blur(5px) !important;
        opacity: 0.5 !important;
    }

    .owner-card {
        box-sizing: border-box;
        border: 2px solid gray;
        max-width: 50%;
        display: flex;
        padding: 15px;
        border-radius: 5px;

          .owner-img-container {
            box-sizing: border-box;
            margin-block: auto;
            
            max-width: 100px; 
            height: fit-content;

                img {
                    object-fit: cover;  
                    margin: 0;
                    padding: 0;
                    min-width: 100px;
                    max-height: 100px;
                }
          }
              
          .owner-info-container {
            display: flex;
            flex-direction: column;
            margin-left: 15px;
            margin-block: auto;
          }
    }

    .price-container {
        display: flex;
        flex-direction: column;
    }

    .star {
        color: gold;
    }

    h1 {
        font-size: 40px;
        padding-block: 10px;
        margin: 0;
    }

    img {
        max-width: 100%;
        min-width: 100%;
        max-height: 360px;
        object-fit: cover;
    }

    .specific-venue-name-img {
        flex: 1;
        min-width: 470px;
        max-width: 470px;
    }
    
    .specific-venue-description {
        flex: 1;
        min-width: 440px;
        max-width: 440px;

        p {
            margin-top: 60px;
            margin-left: 18px;
        }
    }

    .img-and-description-container {
        display: flex;
    }

    .locationContainer {
        display: flex;
        flex-direction: column;
        width: 52%;
        gap: 5px;

          h2 {
            margin: 0;
            padding: 0;
            font-size: 20px;
            font-weight: 700;
          }
    }

    .location-and-facilities-container {
        display: flex;
        margin-top: 30px;
    }

    .facilities-container {
        
        display: flex; 
        flex-direction: column;
        width: 100%;

          h2 {
            margin: 0;
            padding: 0;
            font-size: 20px;
            font-weight: 700;
          }

          .icons-container {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 9px;
          }

          .wifi-icon, .parking-icon, .breakfast-icon, .pets-icon {
            max-width: 24px;
            width: 100%;
            color: gray;
            margin-right: 4px;
          }
    }
    
`