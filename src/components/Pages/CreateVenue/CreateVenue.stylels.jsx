import styled from "styled-components";

export const CreateVenueWrapper = styled.div`
  box-sizing: border-box;
  border: 2px solid red;
`

export const CreateVenueForm = styled.form`
  border: 2px solid gold;
  display: flex;
  flex-direction: column;
        
    h2 {
        margin: 0;
        padding-block: 5px;

    }
`

export const VenueFacilities = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  max-height: 100px;


    .wifi-parking-container, .breakfast-pets-container {
        box-sizing: border-box;
        width: 100px;
    
        input {
            margin-bottom: 40px;
         }

         label {
            font-weight: 500;
         }
    }
`


