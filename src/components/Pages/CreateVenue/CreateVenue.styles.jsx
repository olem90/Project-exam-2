import styled from "styled-components";

export const CreateVenueWrapper = styled.div`
  box-sizing: border-box;
  border: 2px solid red;
`

export const CreateVenueForm = styled.form`
  border: 2px solid gold;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin-inline: auto;
  padding: 15px;

    h2 {
        margin: 0;
        padding-block: 20px;
    }

    input {
        padding-block: 5px;
    }

    .form-input {
        padding-top: 5px;
        width: 80%;
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


