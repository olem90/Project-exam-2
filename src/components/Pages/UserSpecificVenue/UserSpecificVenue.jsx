import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserSpecificVenueWrapper } from "./UserSpecificVenue.styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { SpecificVenueStyles } from "../SpecificVenue/SpecificVenue.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faWifi, faCar, faCoffee, faPaw, faExpand  } from '@fortawesome/free-solid-svg-icons';
import { UsersVenueBookings } from "../../UserVenueBookings/UserVenueBookings";
import { UpdateVenueButton } from "../../Buttons/Buttons.styles";
import { RemoveVenue } from "../RemoveVenue/RemoveVenue";

const userProfileLocalStorage = JSON.parse(localStorage.getItem("profile"));
const isVenueManager = userProfileLocalStorage.venueManger;
const placeholderImg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F233-2332677_image-500580-placeholder-transparent.png&f=1&nofb=1&ipt=e4343f78ff0f7af5109020267ce01c0c613d9fd7ad65d2b8622a4b60419c5152&ipo=images";

console.log("localStorage :" , userProfileLocalStorage);

export const UserSpecificVenue = () => {
    const [managerVenue, setManagerVenue] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { id } = useParams();
    console.log("Venue ID:", id);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleThumbnailClick = (index) => {
        setActiveImageIndex(index);
    };

    const navigate = useNavigate();

    const goToUpdateVenuePage = (id) => {
        navigate(`/account/update-venue/${id}`);
    };

    function renderStars(rating) {
        const stars = [];
        
        for (let i = 0; i < rating; i++) {
          stars.push(<FontAwesomeIcon className='star' icon={faStar} key={i} />);
        }
        return stars;
    };

    useEffect(() => {
        const userSpecificVenueUrl = `https://api.noroff.dev/api/v1/holidaze/venues/${id}?_bookings=true`;

        async function getUserSpecificVenue() {
            try {
                setIsError(false);
                setIsLoading(true);
                const response = await fetch(userSpecificVenueUrl);
                const json = await response.json();
                console.log(json);
                setManagerVenue(json);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        getUserSpecificVenue();
    }, [id]);

    if (isLoading) {
        return <div>Loading venue...</div>
    }

    if (isError) {
        return <div>Error loading venue. Please try again.</div>
    }

    return (
        <UserSpecificVenueWrapper>
            <div>
            {managerVenue ? (
                <SpecificVenueStyles>
                    <h1 className="specific-venue-name">{managerVenue.name}</h1>
                    <div className="img-and-description-container">
                        <div className="specific-venue-name-img">
                            {managerVenue.media && managerVenue.media.length > 0 ? (
                            <img className="main-img" src={managerVenue.media[activeImageIndex]} alt="venue" onError={(event)=>{event.target.onerror = null; event.target.src= placeholderImg}} />
                            ) : (
                            <img className="main-img" src={placeholderImg} alt="Placeholder image"></img>
                            )}
                            <Swiper 
                                spaceBetween={10}
                                slidesPerView={'auto'}
                                freeMode={true}
                                className="all-thumbnails-container"
                                onSwiper={(swiper) => console.log(swiper)}
                            >             
                                <SwiperSlide>
                                    <div className="all-thumbnails-container">
                                        {managerVenue.media && managerVenue.media.length > 1 ? (
                                            <div  className="thumbnail-container">
                                                {managerVenue.media.map((image, index) => (
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
                                </SwiperSlide>
                            </Swiper>                                 
                        </div>
                        <div className="specific-venue-description">
                            <p>{managerVenue.description}</p>
                        </div>
                    </div>
                    <div className="venue-content">
                        <div className="price-container">
                            <span>Price: ${managerVenue.price}</span>
                            <span>Maximum guests: {managerVenue.maxGuests}</span>
                            {managerVenue.rating > 0 ? (
                            <span>Rating: {renderStars(managerVenue.rating)}</span>
                            ) : <span>Rating: No ratings yet</span>}
                            </div>
                            <UpdateVenueButton onClick={() => goToUpdateVenuePage(id)}>Update Venue</UpdateVenueButton>
                            <RemoveVenue />
                            <div className="location-and-facilities-container">
                                <div className="locationContainer">
                                    <h2>Location:</h2>
                                    <span>Address: {managerVenue.location.address}</span>
                                    <span>City: {managerVenue.location.city}</span>
                                    <span>Zip: {managerVenue.location.zip}</span>
                                    <span>Country: {managerVenue.location.country}</span>
                                    <span>Continent: {managerVenue.location.continent}</span>
                                </div>
                                
                                <div className="facilities-container">
                                    <h2>Facilities</h2>                                
                                    <div className="icons-container">
                                        <div>
                                            <FontAwesomeIcon className="wifi-icon" icon={faWifi} />
                                            <span>Wifi:</span>{managerVenue.meta.wifi ? " Yes" : " No"}
                                        </div>

                                         <div>
                                            <FontAwesomeIcon className="parking-icon" icon={faCar} />
                                            <span>Parking:</span>{managerVenue.meta.parking ? " Yes" : " No"}
                                        </div>
                                                                   
                                        <div>
                                            <FontAwesomeIcon className="breakfast-icon" icon={faCoffee} />
                                            <span>Breakfast:</span>{managerVenue.meta.breakfast ? " Yes" : " No"}
                                        </div> 

                                        <div>
                                            <FontAwesomeIcon className="pets-icon" icon={faPaw} />
                                            <span>Pets:</span>{managerVenue.meta.pets ? " Yes" : " No"}
                                        </div>                                  
                                    </div>                      
                                </div>
                            </div>
                        </div>   
                    </SpecificVenueStyles>
                ) : <p>Product not found</p>
                }        
            </div> 
             <UsersVenueBookings id={id} />
        </UserSpecificVenueWrapper>
    )
}




