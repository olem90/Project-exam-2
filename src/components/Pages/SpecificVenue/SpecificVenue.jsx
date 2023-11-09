import { useState, useEffect } from "react";
import { SpecificVenueWrapper, SpecificVenueStyles } from "./SpecificVenue.styles";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faWifi, faCar, faCoffee, faPaw } from '@fortawesome/free-solid-svg-icons';
import { BookNowButton } from "../../Buttons/Buttons.styles";
import { BookVenueForm } from "../BookingForm/BookingForm";


export const SpecificVenue = () => {
    const [venue, setVenue] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { id } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    useEffect(() => {
        const specificVenueUrl = `https://api.noroff.dev/api/v1/holidaze/venues/${id}?_owner=true`;

        async function getSpecificVenue() {
            try {
                setIsError(false);
                setIsLoading(true);
                const response = await fetch(specificVenueUrl);
                const json = await response.json();
                setVenue(json);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        getSpecificVenue();
    }, [id]);

    const handleThumbnailClick = (index) => {
        setActiveImageIndex(index);
    }

    function renderStars(rating) {
        const stars = [];
        
        for (let i = 0; i < rating; i++) {
          stars.push(<FontAwesomeIcon className='star' icon={faStar} key={i} />);
        }
        return stars;
      }

    if (isLoading) {
        return <div>Loading venue...</div>
    }

    if (isError) {
        return <div>Error loading venue. Please try again.</div>
    }

    const placeholderImg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F233-2332677_image-500580-placeholder-transparent.png&f=1&nofb=1&ipt=e4343f78ff0f7af5109020267ce01c0c613d9fd7ad65d2b8622a4b60419c5152&ipo=images";
    const ownerPlaceholderImg = "https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjI5MS1iYXRjaDUtbnVub29uLTQwLWJlYXV0eV8yLmpwZw.jpg"
    return (
        <SpecificVenueWrapper className={isModalOpen ? "blurred" : ""}>
            {isModalOpen && <BookVenueForm closeModal={toggleModal} venueId={id} />}
            <div>
                {venue ? (
                    <SpecificVenueStyles>
                        <h1 className="specific-venue-name">{venue.name}</h1>
                        <div className="img-and-description-container">
                            <div className="specific-venue-name-img">
                                    {venue.media && venue.media.length > 0 ? (
                                    <img className="main-img" src={venue.media[activeImageIndex]} alt="venue" onError={(event)=>{event.target.onerror = null; event.target.src= placeholderImg}} />
                                    ) : (
                                    <img className="main-img" src={placeholderImg} alt="Placeholder image"></img>
                                    )}

                                    {venue.media && venue.media.length > 1 ? (
                                        <div className="thumbnail-container">
                                        {venue.media.map((image, index) => (
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`thumbnail ${index}`}
                                                onClick={() => handleThumbnailClick(index)}
                                                className={index === activeImageIndex ? "active-thumbnail" : "thumbnail"}
                                            />
                                        ))}
                                    </div> 

                                    ) : ""}                
                                    
                            </div>

                            <div className="specific-venue-description">
                                <p>{venue.description}</p>
                            </div>
                        </div>
                        <BookNowButton onClick={toggleModal}>BOOK NOW</BookNowButton>

                        <div className="venue-content">
                            <div className="price-container">
                              <span>Price: ${venue.price}</span>
                              <span>Maximum guests: {venue.maxGuests}</span>
                              {venue.rating > 0 ? (
                                    <span>Rating: {renderStars(venue.rating)}</span>
                                ) : <span>Rating: No ratings yet</span>}
                                <hr></hr>
                            </div>

                            <div className="location-and-facilities-container">
                                <div className="locationContainer">
                                  <h2>Location:</h2>
                                  <span>Address: {venue.location.address}</span>
                                  <span>City: {venue.location.city}</span>
                                  <span>Zip: {venue.location.zip}</span>
                                  <span>Country: {venue.location.country}</span>
                                  <span>Continent: {venue.location.continent}</span>
                                </div>
                                
                                <div className="facilities-container">
                                    <h2>Facilities</h2>                                
                                        <div className="icons-container">
                                            <div>
                                                <FontAwesomeIcon className="wifi-icon" icon={faWifi} />
                                                <span>Wifi:</span>{venue.meta.wifi ? " Yes" : " No"}
                                            </div>

                                            <div>
                                                <FontAwesomeIcon className="parking-icon" icon={faCar} />
                                                <span>Parking:</span>{venue.meta.parking ? " Yes" : " No"}
                                            </div>
                                                                   
                                            <div>
                                                <FontAwesomeIcon className="breakfast-icon" icon={faCoffee} />
                                                <span>Breakfast:</span>{venue.meta.breakfast ? " Yes" : " No"}
                                            </div> 

                                            <div>
                                                <FontAwesomeIcon className="pets-icon" icon={faPaw} />
                                                <span>Pets:</span>{venue.meta.pets ? " Yes" : " No"}
                                            </div>                                  
                                        </div>                      
                                </div>
                            </div>
                            <h3>Owner Information</h3>
                            <div className="owner-card">
                                <div className="owner-img-container">
                                {venue.owner.avatar && venue.owner.avatar.length > 0 ? (
                              <img src={venue.owner.avatar} alt="venue" onError={(event)=>{event.target.onerror = null; event.target.src= ownerPlaceholderImg}} />
                              ) : (
                              <img src={placeholderImg} alt="Placeholder image"></img>
                              )}
                                </div>
                                <div className="owner-info-container">
                                    <span>Name: {venue.owner.name}</span>
                                    <span>Email: {venue.owner.email}</span>
                                </div> 
                            </div>
                        </div>   
                    </SpecificVenueStyles>
                ) : <p>Product not found</p>
                }        
            </div>
        </SpecificVenueWrapper>
    )
}
