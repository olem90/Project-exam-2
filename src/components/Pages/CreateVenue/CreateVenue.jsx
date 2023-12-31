import { useState } from "react";
import {
  CreateVenueWrapper,
  CreateVenueForm,
  VenueFacilities,
} from "./CreateVenue.styles";
import { fetchWithToken } from "../../../fetchWithToken";
import { Modal } from "../../Modal/Modal";
import { useNavigate } from "react-router-dom";
import { CreateVenueButton } from "../../Buttons/Buttons.styles";

const createVenueUrl = "https://api.noroff.dev/api/v1/holidaze/venues";

export const CreateVenue = () => {
  const [showModal, setShowModal] = useState(false);
  const [createVenueSuccess, setCreateVenueSuccess] = useState(false);

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

  function onNameChange(event) {
    setName(event.target.value);
  }

  function onDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function onMediaChange(event) {
    const mediaUrls = event.target.value
      ? event.target.value.split(",").map(url => url.trim())
      : [];
    setMedia(mediaUrls); 
  }

  function onPriceChange(event) {
    setPrice(event.target.value); 
  }

  function onMaxGuestsChange(event) {
    setMaxGuests(event.target.value);
  }

  function onRatingChange(event) {
    setRating(event.target.value);
  }

  function onWifiChange() {
    setWifi(!wifi);
  }

  function onBreakfastChange() {
    setBreakfast(!breakfast);
  }

  function onParkingChange() {
    setParking(!parking);
  }

  function onPetsChange() {
    setPets(!pets);
  }

  function onAddressChange(event) {
    setAddress(event.target.value);
  }

  function onCityChange(event) {
    setCity(event.target.value);
  }

  function onZipChange(event) {
    setZip(event.target.value);
  }

  function onCountryChange(event) {
    setCountry(event.target.value);
  }

  function onContinentChange(event) {
    setContinent(event.target.value);
  }

  function onLatitudeChange(event) {
    setLatitude(event.target.value);
  }

  function onLongitudeChange(event) {
    setLongitude(event.target.value);
  }

  async function onCreateVenueFormSubmit(event) {
    event.preventDefault();

    

    const defaultMediaUrl = "https://images.pexels.com/photos/321552/pexels-photo-321552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    const requestBody = {
      name: name,
      description: description,
      media: media.length > 0 ? media : [defaultMediaUrl], 
      price: Number(price),
      maxGuests: parseInt(maxGuests, 10), 
      rating: rating ? parseFloat(rating) : 0,
      meta: {
        wifi: wifi,
        parking: parking,
        breakfast: breakfast,
        pets: pets,
      },
      location: {
        address: address || "Unknowwn",
        city: city || "Unknowwn",
        zip: zip,
        country: country || "Unknowwn", 
        continent: continent || "Unknowwn",
        latitude: latitude ? parseFloat(latitude) : 0,
        longitude: longitude ? parseFloat(longitude) : 0, 
      },
    };

    try {
      setIsError(false);
      setIsLoading(true);
      const response = await fetchWithToken(createVenueUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const json = await response.json();
      setFormData(json);
      setIsLoading(false);

      if (response.ok) {
        setCreateVenueSuccess(true);
        setShowModal(true);
      } else {
        setCreateVenueSuccess(false);
        setShowModal(true);
        setIsError(
          "Oops! An error occured while creating the venue. Please try again.", 
        );
      } 

     
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.error(error);
    }
  }

  const navigate = useNavigate();

  const closeModal = () => {
    setShowModal(false);
    if (createVenueSuccess) {
      navigate("/account");
    }
  };

  const onCancel = () => {
    setShowModal(false);
  };

  if (isError) {
    return <div>Oops an error occured submitting the form</div>;
  }

  if (isLoading) {
    return <div>Submitting the form...</div>;
  }

  return (
    <CreateVenueWrapper>
      <div className="create-venue-container">
        <h1>Create a new venue</h1>
        <CreateVenueForm onSubmit={onCreateVenueFormSubmit}>
          <label htmlFor="name">Name</label>
          <input
            className="form-input"
            type="text"
            value={name}
            placeholder="Your name"
            onChange={onNameChange}
            required
          />

          <label htmlFor="description">Description</label> 
          <input
            className="form-input"
            type="text"
            value={description}
            placeholder="Your description of the venue"
            onChange={onDescriptionChange}
            required
          />

          <label htmlFor="price">Price (number)</label> 
          <input
            className="form-input"
            type="text"
            value={price} 
            placeholder="Your price"
            onChange={onPriceChange}
            required
          />

          <label htmlFor="maxGuests">Maximum Guests (number)</label>  
          <input
            className="form-input"
            type="text"
            value={maxGuests}
            placeholder="Enter maximum number of guests"
            onChange={onMaxGuestsChange}
            required
          />

          <label htmlFor="rating">Rating (number)</label>
          <input
            className="form-input"
            type="text"
            value={rating}
            placeholder="Rating"
            onChange={onRatingChange}
          />

          <label htmlFor="media">Images (url(s))</label>
          <input
            className="form-input"
            type="text"
            value={media}
            placeholder="Insert url, separate with a comma for more images"
            onChange={onMediaChange}
          />

          <h2>Facilities</h2>
          <VenueFacilities>
            <div className="wifi-parking-container">
              <label htmlFor="wifi">Wifi</label>
              <input
                className="facility-checkbox"
                type="checkbox"
                checked={wifi}
                onChange={onWifiChange}
              />

              <label htmlFor="parking">Parking</label>
              <input
                className="facility-checkbox"
                type="checkbox"
                checked={parking}
                onChange={onParkingChange}
              />
            </div>

            <div className="breakfast-pets-container">
              <label htmlFor="breakfast">Breakfast</label>
              <input
                className="facility-checkbox"
                type="checkbox"
                checked={breakfast}
                onChange={onBreakfastChange}
              />

              <label htmlFor="pets">Pets</label>
              <input
                className="facility-checkbox"
                type="checkbox"
                checked={pets}
                onChange={onPetsChange}
              />
            </div>
          </VenueFacilities>

          <h2>Location</h2>

          <label htmlFor="address">Address</label>
          <input
            className="form-input"
            type="text"
            value={address}
            placeholder="Your address"
            onChange={onAddressChange}
          />

          <label htmlFor="city">City</label>
          <input
            className="form-input"
            type="text"
            value={city}
            placeholder="The venues city"
            onChange={onCityChange}
          />

          <label htmlFor="zip">Zip</label>
          <input
            className="form-input"
            type="text"
            value={zip}
            placeholder="The venues zip code"
            onChange={onZipChange}
          />

          <label htmlFor="country">Country</label>
          <input
            className="form-input"
            type="text"
            value={country}
            placeholder="The venues country"
            onChange={onCountryChange}
          />

          <label htmlFor="continent">Continent</label>
          <input
            className="form-input"
            type="text"
            value={continent}
            placeholder="The venues continent"
            onChange={onContinentChange}
          />

          <label htmlFor="latitude">Latitude (number)</label>
          <input
            className="form-input"
            type="text"
            value={latitude}
            placeholder="The venues latitude"
            onChange={onLatitudeChange}
          />

          <label htmlFor="longitude">Longitude (number)</label>
          <input
            className="form-input"
            type="text"
            value={longitude} 
            placeholder="The venues longitude" 
            onChange={onLongitudeChange}
          />

          <CreateVenueButton type="submit">
            Create Venue  
          </CreateVenueButton>
          {showModal && (
            <Modal
              isOpen={showModal}
              message={
                createVenueSuccess && "Your venue was successfullly created."
              }
              onClose={closeModal}
              createVenueSuccess={createVenueSuccess}
            />
          )}
        </CreateVenueForm>
      </div>
    </CreateVenueWrapper>
  );
};
