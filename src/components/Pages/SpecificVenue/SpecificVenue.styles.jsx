import styled from "styled-components";

export const SpecificVenueWrapper = styled.div`
   min-width: 94%;
   max-width: 94%;
   margin-inline: auto;   
   min-width: calc(100dvh - 80px); 
  
   @media(max-width: 800px) {  
    max-width: 80%; 
    min-width: 80%;  
   } 

   @media(max-width: 600px) {  
    max-width: 90%; 
    min-width: 90%;  
   } 

   @media(max-width: 450px) {  
    max-width: 100%; 
    min-width: 100%;   
   } 
`

export const SpecificVenueStyles = styled.div`
  color: #000;
  width: 60%;  
  margin-inline: auto;
  box-sizing: border-box;
  padding: 6px;

    .all-thumbnails-container {
      min-width: 400px;
      max-width: 400px; 
      overflow-x: auto;
    }

    .price-container-carousel { 
      margin-top: 40px;  
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
        max-width: 500px;
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
        white-space: normal;
        word-wrap: break-word;
    }

    .specific-venue-name-img {
        flex: 1;
        min-width: 400px;
        max-width: 400px;
        position: relative;  
    }

    .main-img {
        max-width: 100%;
        min-width: 100%;
        max-height: 360px;
        min-height: 360px;
        object-fit: cover;
        transition: filter 0.3s ease;
    }

    .specific-venue-description {
        flex: 1.5; 
        min-width: 400px;
        max-width: 500px;  
        line-height: 30px;
        height: fit-content;
        white-space: normal;
        word-wrap: break-word;
        word-break: break-all; 

        p {
            margin-top: 0;
            margin-left: 18px;
        }
    }

    .img-and-description-container {
        display: flex;
        margin-top: 20px;
        min-width: 90%; 
        position: relative; 
    }

    .locationContainer {
        display: flex;
        flex-direction: column;
        width: 52%;
        gap: 5px;

          h2 {
            margin: 0;
            padding: 0;
            font-size: 24px;
            font-weight: 700;
          }
    }

    .location-and-facilities-container {
        display: flex;
        margin-top: 30px;   
        gap: 20px 90px; 
    }

    .facilities-container {
        display: flex; 
        flex-direction: column;
        width: 100%;

          h2 {
            margin: 0;
            padding: 0;
            font-size: 24px;
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

    @media(max-width: 1200px) {
      width: 78%;   
    }

    @media(max-width: 1050px) {
      width: 86%;
    }

    @media(max-width: 950px) {
      width: 94%;  
      
      h1 {
        font-size: 38px; 
        padding-block: 0; 
        margin: 4px; 
      }

      .price-container-carousel { 
        margin-top: 100px;  
      }

      .book-now-with-carousel {
        margin-top: 90px;
        max-width: 400px;  
        width: 46%;   
      }

      .specific-venue-name-img {
        min-width: 350px; 
        max-width: 400px;  
        max-height: 340px;      
        min-height: 340px; 
      }

      .specific-venue-description {
        max-width: 420px; 
        min-width: 320px;
        line-height: 26px; 
        height: fit-content;  
      }

      .main-img {
        max-height: 100%;
        min-height: 100%;     
      }

      .all-thumbnails-container { 
        max-width: 350px; 
        min-width: 100%;
      }

      .owner-card {
        max-width: 450px; 
        min-width: 450px;     
      }
    }

    @media(max-width: 800px) { 
      width: 88%; 

      .price-container-carousel { 
        margin-top: 20px;    
      }
      
      .main-img-with-no-carousel { 
        min-height: 400px;
        max-width: 400px;  
        min-width: 300px; 
      }

      .specific-venue-with-no-carousel {   
        max-width: 500px; 
        min-width: 300px; 

      }

      .location-and-facilities-container { 
        display: flex;
        margin-top: 20px;      
        gap: 16px 150px;   
        white-space: nowrap;  
      }

      h1 {
        font-size: 32px;  
      }

      .book-now-with-carousel {  
        margin-top: 10px;
        max-width: 400px;   
        width: 60%;   
      }

      .specific-venue-description {
        margin-top: 18px;     
        
        p {
          margin-left: 0; 
        }
      }

      .specific-venue-name-img {
        min-width: 100%; 
        max-height: 400px;  
      } 

      .main-img {
        max-height: 320px; 
        min-height: 320px;     
        min-width: 100%;  
        max-width: 100%;
      } 

      .img-and-description-container {
        flex-direction: column;
        margin-top: 20px; 
        width: 100%;
      }

      .all-thumbnails-container {
        min-width: 300px;
        max-width: 400px; 
        margin-left: 0; 
      }

      .owner-card {
        max-width: 450px;
        min-width: 450px;    
      }
    }

    @media(max-width: 600px) {
      width: 94%; 

      .book-now-with-carousel {  
        max-width: 280px;  
        min-width: 280px;  
      }

      .owner-card { 
        max-width: 450px; 
        min-width: 360px;       
      }

      .location-and-facilities-container {    
        gap: 16px 80px;   
        white-space: nowrap;  
      }

      .main-img {
        max-height: 300px; 
        min-height: 300px;     
        min-width: 100%;  
        max-width: 100%;
      } 

      .specific-venue-with-no-carousel {      
        max-height: fit-content; 
        min-height: fit-content;
      }

      .owner-info-container {
        white-space: normal;
        word-wrap: break-word;
        word-break: break-all;  
        
      }
    }

    @media(max-width: 450px) {

      .all-thumbnails-container {
        min-width: 200px;
        max-width: 400px; 
      }

      .book-now-with-carousel {  
        max-width: 300px; 
      }

      .main-img {
        max-height: 280px; 
        min-height: 280px;      
        min-width: 100%;  
        max-width: 100%;
      } 

      .location-and-facilities-container {   
        display: flex;
        flex-direction: column; 
        gap: 16px 70px;             
 
          h2 {
            font-size: 22px;
          }
      }

      .specific-venue-description {
        min-width: 250px; 
      }

      .owner-card {
        min-width: 90%; 

        .owner-img-container {
          max-width: 100px;   
          max-height: 100px;     

            img {
              min-width: 100%;
              min-height: 100%; 
              max-height: 100px; 
            }
        }   
      }

      

    }
`

