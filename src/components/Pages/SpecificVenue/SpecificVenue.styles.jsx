import styled from "styled-components";

export const SpecificVenueWrapper = styled.div`
  border: 2px solid pink; 
`

export const SpecificVenueStyles = styled.div`
  color: #000;
  width: fit-content; 
  margin-inline: auto;
  box-sizing: border-box;

    .faExpand {
      position: absolute;
      top: 17px;
      right: 15px;
      font-size: 24px;
      font-weight: bold;
      color: transparent;
      transition: color 0.3s ease;
      z-index: 99;
    }

    .all-thumbnails-container {
      min-width: 470px;
      max-width: 470px;
      overflow-x: auto;
    }

    .thumbnail-container {
      display: flex;
      gap: 5px;
      max-width: 60px;
      min-width: 60px;
      max-height: 60px;
      object-fit: cover;
      cursor: pointer;
      opacity: 0.6;
      transition: opacity 0.3s;

        img {
          width: 100%;
          min-height: 100%;
        }
    }

    .thumbnail-container img.active-thumbnail {
      border: 2px solid #000;
      opacity: 1;
    }

    h3  {
        margin: 30px 0 10px 0;
        margin-top: 30px;
        padding: 0;
        font-weight: 500;
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
                    max-width: 100px;
                    max-height: 100px;
                    min-height: 100px;
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

    .specific-venue-name-img {
        flex: 1;
        min-width: 470px;
        max-width: 470px;
        position: relative;
    }
    
    .specific-venue-name-img:hover .main-img{
      filter: brightness(50%);
    }

    .specific-venue-name-img:hover .faExpand {
      color: #fff;
    }

    .main-img {
        max-width: 100%;
        min-width: 100%;
        max-height: 360px;
        min-height: 360px;
        object-fit: cover;
        transition: filter 0.3s ease;
    }

    .main-img:hover .faExpand {
      display: block;
      color: red;
    }

    .specific-venue-description {
        flex: 1;
        min-width: 440px;
        max-width: 440px;
        line-height: 30px;

        p {
            margin-top: 0;
            margin-left: 18px;
        }
    }

    .img-and-description-container {
        display: flex;
        margin-top: 20px;
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

