import { VenueCardsStyles, VenueCardsWrapper } from "./VenueCards.styles";
import { useNavigate } from "react-router-dom";
import { ViewVenueButton } from "../Buttons/Buttons.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const url = "https://api.noroff.dev/api/v1/holidaze/venues";

const VenueCards = ({ venues }) => {
    const navigate = useNavigate();

    const goToVenuePage = (id) => {
        navigate(`/venue/${id}`);
    };

    const placeholderImg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F233-2332677_image-500580-placeholder-transparent.png&f=1&nofb=1&ipt=e4343f78ff0f7af5109020267ce01c0c613d9fd7ad65d2b8622a4b60419c5152&ipo=images"
    
    return (
        <VenueCardsWrapper venues={venues}>
            <div className="venue-cards-container">
                {venues.map((venue) => (
                    <VenueCardsStyles key={venue.id}>
                            <h1>{venue.name}</h1>
                            {venue.media && venue.media.length > 0 ? (
                            <img src={venue.media} alt="venue" onError={(event)=>{event.target.onerror = null; event.target.src= placeholderImg}} />
                            ) : (
                            <img src={placeholderImg} alt="Placeholder"></img> 
                            )}
                            <div className="venue-card-info">
                                <div className="city-and-country-container">
                                    <span>Country: <span>{venue.location.country}</span></span>  
                                    <span>City: <span>{venue.location.city}</span></span>          
                                </div>

                                <div className="price-guests-container">
                                    <span>Price: <span className="venue-price">${venue.price}</span></span> 
                                    <span>Max guests: <span className="venue-max-guests">{venue.maxGuests}</span></span>
                                </div>   
                            
                            </div>
                            <ViewVenueButton onClick={() => goToVenuePage(venue.id)}>View venue</ViewVenueButton>
                       
                    </VenueCardsStyles>  
                ))}
            </div>
        </VenueCardsWrapper> 
    )
}
export default VenueCards;

