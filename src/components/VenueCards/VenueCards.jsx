import { VenueCardsStyles, VenueCardsWrapper } from "./VenueCards.styles";
import { useNavigate } from "react-router-dom";
import { ViewVenueButton } from "../Buttons/Buttons.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const url = "https://api.noroff.dev/api/v1/holidaze/venues";

const VenueCards = ({ venues }) => {
    const navigate = useNavigate();

    // navigate to the venue page
    const goToVenuePage = (id) => {
        navigate(`/venue/${id}`);
    }

    function renderStars(rating) {
        const stars = [];
        
        for (let i = 0; i < rating; i++) {
          stars.push(<FontAwesomeIcon className='star' icon={faStar} key={i} />);
        }
        return stars;
      }

    const placeholderImg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F233-2332677_image-500580-placeholder-transparent.png&f=1&nofb=1&ipt=e4343f78ff0f7af5109020267ce01c0c613d9fd7ad65d2b8622a4b60419c5152&ipo=images"
    
    return (
        <VenueCardsWrapper venues={venues}>
                {venues.map((venue) => (
                    <VenueCardsStyles key={venue.id}>
                        <h1>{venue.name}</h1>
                        {venue.media && venue.media.length > 0 ? (
                        <img src={venue.media} alt="venue" onError={(event)=>{event.target.onerror = null; event.target.src= placeholderImg}} />
                        ) : (
                        <img src={placeholderImg} alt="Placeholder"></img>
                        )}
                        <span>Price: {venue.price}</span>
                        <span>Max guests: {venue.maxGuests}</span>
                        {venue.rating > 0 ? (
                            <span className="stars">Rating: {renderStars(venue.rating)}</span>
                        ) : <span>Rating: No ratings yet</span>}
                        <p>{venue.description}</p>
                        <ViewVenueButton onClick={() => goToVenuePage(venue.id)}>View venue</ViewVenueButton>
                    </VenueCardsStyles>
                ))}
        </VenueCardsWrapper>
    )
}
export default VenueCards;

