import styled from "styled-components";

export const VenueCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  box-sizing: border-box;
  gap: 50px 0px;
  margin-top: 60px; 
  width: 90%; 
  margin-inline: auto; 

  @media(max-width: 1550px) {
    width: 100%; 
  }

  @media(max-width: 1200px) { 
    grid-template-columns: repeat(2, 1fr);   
    width: 87%;
  }

  @media(max-width: 1000px) { 
    width: 96%;
  } 

  @media(max-width: 820px) {  
    width: 100%; 
  } 

  @media(max-width: 730px) {  
    width: 100%;
  } 

  @media(max-width: 700px) {   
    grid-template-columns: repeat(1, 1fr);
  } 
`
 
export const VenueCardsStyles = styled.div`
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  flex-direction: column;  
  padding: 20px;
  max-width: 420px;
  min-width: 420px; 
  max-height: 460px;
  min-height: 460px;
  margin-inline: auto;
  background: var(--blue-200);     
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);  
  overflow: hidden;

    .venue-card-info {
      display: flex; 
      margin-bottom: 10px; 
      width: 100%;

        .city-and-country-container, .price-guests-container { 
          display: flex; 
          flex-direction: column;    
        }  

        .venue-max-guests {  
          color: red;
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
      font-size: 29px; 
      word-wrap: break-word;
    }

@media(max-width: 1425px) {
  max-width: 400px;
  min-width: 400px;  
}
 
@media(max-width: 1350px) { 
  max-width: 370px;
  min-width: 370px;    

    span {
      font-size: 18px;
    }

}

@media(max-width: 1200px) { 
  max-width: 400px;
  min-width: 400px;  

}

@media(max-width: 1000px) { 
  max-width: 340px; 
  min-width: 340px;    

    h1 { 
      font-size: 26px;  
    }

    span {
      font-size: 16px;
    }

}

@media(max-width: 820px) {  
  max-width: 320px; 
  min-width: 320px;  

    h1 {
      font-size: 23px;   
    }
}  

@media(max-width: 730px) {  
  width: 100%;
} 

@media(max-width: 700px) {    
  max-width: 400px;   
  min-width: 400px;  
  max-height: 4330px;   
  min-height: 430px;    
} 
   
@media(max-width: 440px) {   
  max-width: 320px;  
  min-width: 320px;   

    span {
      font-size: 16px; 
    } 
}

@media(max-width: 440px) {   
  max-width: 300px;   
  min-width: 300px;   
}   
`  
