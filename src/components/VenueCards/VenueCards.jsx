import { useEffect, useState } from "react";
import { VenueCardsStyles, VenueCardsWrapper } from "./VenueCards.styles";
import { useNavigate } from "react-router-dom";
import { ViewVenueButton } from "../Buttons/Buttons.styles";

const url = "https://api.noroff.dev/api/v1/holidaze/venues";

const VenueCards = ({ venues }) => {
    // const [venues, setVenues] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [isError, setIsError] = useState(false);

    const navigate = useNavigate();

    // navigate to the venue page
    const goToVenuePage = (id) => {
        navigate(`/venue/${id}`);
    }

    /*
    // Fetch venues from the API
    useEffect(() => {
        async function GetVenues() {
            try {
                setIsError(false);
                setIsLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                setVenues(json);
                console.log(json);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
                setIsError(true);
            }
        }
        GetVenues();
    }, []);
  */

    // if (isLoading) {
    //     return <div>Loading venues...</div>
    // }

    // if (isError) {
    //     return <div>Error loading venues...</div>
    // }

    const placeholderImg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F233-2332677_image-500580-placeholder-transparent.png&f=1&nofb=1&ipt=e4343f78ff0f7af5109020267ce01c0c613d9fd7ad65d2b8622a4b60419c5152&ipo=images"
    
    return (
        <VenueCardsWrapper venues={venues}>
                {venues.map((venue) => (
                    <VenueCardsStyles key={venue.id}>
                        <h2>{venue.name}</h2>
                        {venue.media && venue.media.length > 0 ? (
                        <img src={venue.media} alt="venue" onError={(event)=>{event.target.onerror = null; event.target.src= placeholderImg}} />
                        ) : (
                        <img src={placeholderImg} alt="Placeholder"></img>
                        )}
                        <p>{venue.description}</p>
                        <ViewVenueButton onClick={() => goToVenuePage(venue.id)}>View venue</ViewVenueButton>
                    </VenueCardsStyles>
                ))}
        </VenueCardsWrapper>
    )
}
export default VenueCards;