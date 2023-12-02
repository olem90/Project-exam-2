import { useEffect, useState, useRef } from "react";
import { VenueFacilities } from "../CreateVenue/CreateVenue.styles";
import { CreateVenueWrapper, CreateVenueForm } from "../CreateVenue/CreateVenue.styles";
import { useParams, useNavigate } from "react-router-dom";
import { fetchWithToken } from "../../../fetchWithToken";
import { VenueFormSubmitButton } from "../../Buttons/Buttons.styles"; 

export const UpdateVenue = () => { 
    
    const [formData, setFormData] = useState({});
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [media, setMedia] = useState([]);
    const [price, setPrice] = useState("");
    const [maxGuests, setMaxGuests] = useState(""); 
    const [rating, setRating] = useState("");
    //meta
    const [wifi, setWifi] = useState(false);
    const [parking, setParking] = useState(false);
    const [breakfast, setBreakfast] = useState(false);
    const [pets, setPets] = useState(false);
    //location
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");
    const [continent, setContinent] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { id } = useParams();
    const [isSuccessfullUpdate, setIsSuccessfullUpdate] = useState(null);
    const successMessageRef = useRef(null);
    const navigate = useNavigate();

    const updateVenueUrl = `https://api.noroff.dev/api/v1/holidaze/venues/${id}`; 

    useEffect(() => {
        async function getVenueData() {
            try {
                const response = await fetch(updateVenueUrl);
                const json = await response.json();
                console.log('MyUpdateVenueData:', json);
                setName(json.name);
                setDescription(json.description);
                setMedia(json.media);
                setPrice(json.price);
                setMaxGuests(json.maxGuests);
                setRating(json.rating);
                setWifi(json.meta.wifi);
                setParking(json.meta.parking);
                setBreakfast(json.meta.breakfast);
                setPets(json.meta.pets);
                setAddress(json.location.address);
                setCity(json.location.city);
                setZip(json.location.zip);
                setCountry(json.location.country);
                setContinent(json.location.continent);
                setLatitude(json.location.latitude);
                setLongitude(json.location.longitude); 

            } catch (error) {
            }
        }
        getVenueData();
    }, [id]);

    useEffect(() => {
        if (isSuccessfullUpdate) {
            successMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isSuccessfullUpdate]);

    async function onUpdateVenueFormSubmit(event) {
        event.preventDefault();
    
        const requestBody = {
            name: name,
            description: description,
            media: media,
            price: Number(price), 
            maxGuests: parseInt(maxGuests, 10), 
            rating: Number(rating), 
            meta: {
                wifi: wifi,
                parking: parking,
                breakfast: breakfast,
                pets: pets,
            },
            location: {
                address: address,
                city: city,
                zip: zip,
                country: country,
                continent: continent,
                latitude: parseFloat(latitude), 
                longitude: parseFloat(longitude), 
            } 
        }

        try {
            setIsError(false);
            setIsLoading(true);
            const response = await fetchWithToken(updateVenueUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });
            const json = await response.json();
            setFormData(json);
            setIsLoading(false);
            console.log("Update venue info:", json); 
            setName(json.name);
            setDescription(json.description);
            
            if(response.ok) {
                setIsSuccessfullUpdate(true);
                successMessageRef.current?.scrollIntoView({ behavior: "smooth" });  
 
                setTimeout(() => {
                    navigate(-1);  
                }, 2500);

            } else {
                setIsSuccessfullUpdate(false);
                successMessageRef.current?.scrollIntoView({ behavior: "smooth" });  
            }

        } catch (error) {
            setIsLoading(false);
            setIsError(true);
            setIsSuccessfullUpdate(false);
            console.error(error);
        }
    };
    
    function onNameChange(event) {
        setName(event.target.value);
    };

    function onDescriptionChange(event) {
        setDescription(event.target.value);
    };

    function onMediaChange(event) {
        const mediaUrls = event.target.value.split(",").map(mediaUrl => mediaUrl.trim()) 
        setMedia(mediaUrls);
    };

    function onPriceChange(event) {
        setPrice(event.target.value);
    };
    
    function onMaxGuestsChange(event) {
        setMaxGuests(event.target.value);
    };

    function onRatingChange(event) {
        setRating(event.target.value);
    };

    function onWifiChange() {
        setWifi(!wifi);
    };
    
    function onBreakfastChange() {
        setBreakfast(!breakfast);
    };

    function onParkingChange() {
        setParking(!parking);
    };

    function onPetsChange() {
        setPets(!pets);
    };

    function onAddressChange(event) {
        setAddress(event.target.value);
    };

    function onCityChange(event) {
        setCity(event.target.value);
    };

    function onZipChange(event) {
        setZip(event.target.value);
    };

    function onCountryChange(event) {
        setCountry(event.target.value);
    };

    function onContinentChange(event) {
        setContinent(event.target.value);
    };

    function onLatitudeChange(event) {
        setLatitude(event.target.value);
    };

    function onLongitudeChange(event) {
        setLongitude(event.target.value);
    };

    const SuccessfullUpdate = () => {
        if(isSuccessfullUpdate === true){
            return(
                <div className="successful-update-message" ref={successMessageRef}>
                    <p>You successfully updated your venue!🎉</p>
                </div>
            );
        }else if(isSuccessfullUpdate === false) {
            return ( 
                <div className="error-update-message" ref={successMessageRef}>
                    <p>Oops! An error occured while trying to update your venue. Please try again.</p>  
                </div>
            );
        };
    };

    if (isError) {
        return <div>Oops an error occured submitting the form</div>
    }

    if (isLoading) {
        return <div>Submitting the form...</div>
    }

   return (
        <CreateVenueWrapper>
            <div className="create-venue-container">
                <CreateVenueForm onSubmit={onUpdateVenueFormSubmit}>  
                    <label htmlFor="name">Name</label>
                    <input className="form-input"
                    type="text" 
                    value={name}
                    placeholder="Your name"
                    onChange={onNameChange}
                    required
                    />

                    <label htmlFor="description">Description</label>
                    <input className="form-input"
                    type="text" 
                    value={description}
                    placeholder="Your description of the venue"
                    onChange={onDescriptionChange}
                    required
                    />

                    <label htmlFor="price">price</label>
                    <input className="form-input"
                    type="text" 
                    value={price}
                    placeholder="Your price"
                    onChange={onPriceChange}
                    required
                    />

                    <label htmlFor="maxGuests">Maximum Guests</label>
                    <input className="form-input"
                    type="text" 
                    value={maxGuests}
                    placeholder="enter maximum number of guests"
                    onChange={onMaxGuestsChange}
                    required
                    />

                    <label htmlFor="rating">Rating</label>
                    <input className="form-input"
                    type="text" 
                    value={rating || ""}
                    placeholder="rating"
                    onChange={onRatingChange}
                    />

                    <label htmlFor="media">Images</label>
                    <input className="form-input"
                    type="text" 
                    value={media || []}
                    placeholder="insert your image url and separate each url with a comma for more images"
                    onChange={onMediaChange}
                    />
                         
                    <h2>Facilities</h2>
                    <VenueFacilities>
                        <div className="wifi-parking-container">
                            <label htmlFor="wifi">Wifi</label>
                            <input className="facility-checkbox"
                            type="checkbox" 
                            checked={wifi}
                            onChange={onWifiChange}
                            />

                            <label htmlFor="parking">Parking</label>
                            <input className="facility-checkbox"
                            type="checkbox"  
                            checked={parking} 
                            onChange={onParkingChange}
                            />
                        </div>

                        <div className="breakfast-pets-container">
                            <label htmlFor="breakfast">Breakfast</label>
                            <input className="facility-checkbox"
                            type="checkbox"
                            checked={breakfast}
                            onChange={onBreakfastChange}
                            />

                            <label htmlFor="pets">Pets</label>
                            <input className="facility-checkbox"
                            type="checkbox" 
                            checked={pets}
                            onChange={onPetsChange}
                            />
                        </div>
                    </VenueFacilities>

                    <h2>Location</h2>

                    <label htmlFor="address">Address</label>
                    <input className="form-input"
                    type="text" 
                    value={address || ""}
                    placeholder="Your address"
                    onChange={onAddressChange}
                    />

                    <label htmlFor="city">City</label>
                    <input className="form-input"
                    type="text" 
                    value={city || ""}
                    placeholder="The venues city"
                    onChange={onCityChange}
                    />

                    <label htmlFor="zip">Zip</label>
                    <input className="form-input"
                    type="text" 
                    value={zip || ""}
                    placeholder="The venues zip code"
                    onChange={onZipChange}
                    />

                     <label htmlFor="country">Country</label>
                    <input className="form-input"
                    type="text" 
                    value={country || ""}
                    placeholder="The venues country"
                    onChange={onCountryChange}
                    />

                    <label htmlFor="continent">Continent</label>
                    <input className="form-input"
                    type="text" 
                    value={continent || ""}
                    placeholder="The venues continent" 
                    onChange={onContinentChange}
                    />

                    <label htmlFor="latitude">Latitude</label>
                    <input className="form-input"
                    type="text" 
                    value={latitude || ""}
                    placeholder="The venues latitude"
                    onChange={onLatitudeChange}
                    />

                    <label htmlFor="longitude">Longitude</label> 
                    <input className="form-input"
                    type="text" 
                    value={longitude || ""}
                    placeholder="The venues longitude"
                    onChange={onLongitudeChange} 
                    />

                    <VenueFormSubmitButton type="submit">Update Venue</VenueFormSubmitButton>           
                    {SuccessfullUpdate()}
                </CreateVenueForm>
            </div>
        </CreateVenueWrapper>
    )
}




