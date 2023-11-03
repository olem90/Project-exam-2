import { useState } from "react"
import { CreateVenueWrapper, CreateVenueForm, VenueFacilities } from "./CreateVenue.stylels"

export const CreateVenue = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [media, setMedia] = useState("");
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

    return (
        <CreateVenueWrapper>
            <div>
                <CreateVenueForm>
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    value={name}
                    placeholder="Your name"
                    onChange={1}
                    required
                    />

                    <label htmlFor="description">Description</label>
                    <input 
                    type="text" 
                    value={description}
                    placeholder="Your description of the venue"
                    onChange={1}
                    required
                    />

                    <label htmlFor="price">price</label>
                    <input 
                    type="text" 
                    value={price}
                    placeholder="Your price"
                    onChange={1}
                    required
                    />

                    <label htmlFor="maxGuests">Maximum Guests</label>
                    <input 
                    type="text" 
                    value={maxGuests}
                    placeholder="enter maximum number of guests"
                    onChange={1}
                    required
                    />

                    <label htmlFor="media">Images</label>
                    <input 
                    type="text" 
                    value={media}
                    placeholder="insert your image url"
                    onChange={1}
                    />
                    
                    <h2>Facilities</h2>
                <VenueFacilities>
                    <div className="wifi-parking-container">
                        <label>Wifi</label>
                        <input 
                        type="checkbox" 
                        value={wifi}
                        onChange={() => setWifi(!wifi)}
                        />

                        <label>Parking</label>
                        <input 
                        type="checkbox" 
                        value={parking}
                        onChange={() => setParking(!parking)}
                        />
                    </div>

                    <div className="breakfast-pets-container">
                        <label>Breakfast</label>
                        <input 
                        type="checkbox"
                        value={breakfast}
                        onChange={() => setBreakfast(!breakfast)}
                        />

                        <label>Pets</label>
                        <input 
                        type="checkbox" 
                        value={pets}
                        onChange={() => setPets(!pets)}
                        />
                    </div>
                </VenueFacilities>
                   

                    

                    <h2>Location</h2>

                    <label>Address</label>
                    <input 
                    type="text" 
                    value={address}
                    placeholder="Your address"
                    onChange={1}
                    />

                    <label>City</label>
                    <input 
                    type="text" 
                    value={city}
                    placeholder="The venues city"
                    onChange={1}
                    />

                    <label>Zip</label>
                    <input 
                    type="text" 
                    value={zip}
                    placeholder="The venues zip code"
                    onChange={1}
                    />

                     <label>Country</label>
                    <input 
                    type="text" 
                    value={country}
                    placeholder="The venues country"
                    onChange={1}
                    />

                    <label>Continent</label>
                    <input 
                    type="text" 
                    value={continent}
                    placeholder="The venues continent"
                    onChange={1}
                    />

                    <label>Latitude</label>
                    <input 
                    type="text" 
                    value={latitude}
                    placeholder="The venues latitude"
                    onChange={1}
                    />

                    <label>Longitude</label>
                    <input 
                    type="text" 
                    value={longitude}
                    placeholder="The venues longitude"
                    onChange={1}
                    />

                    <button>Create Venue</button>

                </CreateVenueForm>

            </div>

        </CreateVenueWrapper>
    )
}