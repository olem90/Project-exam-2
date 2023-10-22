import { useEffect, useState } from "react";
import { VenueCardsStyles, VenueCardsWrapper } from "./VenueCards.styles";
import { useNavigate } from "react-router-dom";
import { ViewVenueButton } from "../Buttons/Buttons.styles";

const url = "https://api.noroff.dev/api/v1/holidaze/venues";

const VenueCards = () => {
    const [venues, setVenues] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const navigate = useNavigate();

    // navigate to the venue page
    const goToVenuePage = (id) => {
        navigate(`/venue/${id}`);
    }

    // Fetch venues from the API
    useEffect(() => {
        async function GetVenues() {
            try {
                setIsError(false);
                setIsLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                setVenues(json);
                console.log(venues);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
                setIsError(true);
            }
        }
        GetVenues();
    }, []);
  
    if (isLoading) {
        return <div>Loading venues...</div>
    }

    if (isError) {
        return <div>Error loading venues...</div>
    }

    return (
        <VenueCardsWrapper>
                {venues.map((venue) => (
                    <VenueCardsStyles key={venue.id}>
                        <h2>{venue.name}</h2>
                        <img src={venue.media}></img>
                        <p>{venue.description}</p>
                        <ViewVenueButton onClick={() => goToVenuePage(venue.id)}>View venue</ViewVenueButton>
                    </VenueCardsStyles>
                ))}
        </VenueCardsWrapper>
    )
}
export default VenueCards;