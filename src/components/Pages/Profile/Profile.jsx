import "font-awesome/css/font-awesome.min.css";
import {
  ProfileWrapper,
  ProfileOptionsStyles,
  UsersVenuesInfo,
  UsersVenuesWrapper,
  UserDataStyles,
  UsersVenueCards,
  UserBookingsStyles,
  UsersBookingsCards,
  UsersBookingsInfo,
  UserBookingsWrapper,
} from "./Profile.styles";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { fetchWithToken } from "../../../fetchWithToken";
import {
  BecomeVenueManagerButton,
  MyBookingsUpdateButton,
  ViewBookedVenueButton,
  MyBookingsDeleteLink,
} from "../../Buttons/Buttons.styles";
import { Link } from "react-router-dom";
import { MyBookingsConfirmationModal } from "../../Modal/Modal";
import { useNavigate } from "react-router-dom";
import { BookVenueForm } from "../BookingForm/BookingForm";

export const Profile = () => {
  const [venueBookings, setVenueBookings] = useState([]);
  const [profileInfo, setProfileInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showBookings, setShowBookings] = useState(false);
  const [showVenues, setShowVenues] = useState(false);
  const [isVenueManager, setIsVenueManager] = useState(null);
  const [userProfileLocalStorageInfo, setUserProfileLocalStorageInfo] =
    useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [currentBookingId, setCurrentBookingId] = useState(null);
  const [isOnUpdateModal, setIsOnUpdateModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(false);
  const { loggedInUser } = useContext(AuthContext);

  const venueBookingsUrl = `https://api.noroff.dev/api/v1/holidaze/venues?_bookings=true`;
  const profileInfoUrl = loggedInUser
    ? `https://api.noroff.dev/api/v1/holidaze/profiles/${loggedInUser.name}?_venues=true&_bookings=true`
    : null;

  useEffect(() => {
    getUserProfileInfo();
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (deleteSuccess) {
      navigate("/account");
      setDeleteSuccess(false);
    }
  }, [deleteSuccess]);

  const goToVenue = (venueId) => {
    navigate(`/venue/${venueId}`);
  };

  useEffect(() => {
    getProfileInfo();
  }, [deleteSuccess]);

  useEffect(() => {
    const userProfileFromStorage = JSON.parse(localStorage.getItem("profile"));
    if (userProfileFromStorage && userProfileFromStorage.venueManager) {
      setIsVenueManager(true);
    } else {
      setIsVenueManager(false);
    }
  }, []);

  async function getProfileInfo() {
    try {
      setIsError(false);
      setIsLoading(true);
      const response = await fetchWithToken(profileInfoUrl);
      const json = await response.json();
      setProfileInfo(json);
      setIsLoading(false);
      console.log("profileInfo:", json);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }

  useEffect(() => {
    async function getUsersVenueBookings() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetchWithToken(venueBookingsUrl);
        const json = await response.json();
        setVenueBookings(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.error(error);
      }
    }
    getUsersVenueBookings();
  }, []);

  async function getUserProfileInfo() {
    
    const userProfileDataUrl = `https://api.noroff.dev/api/v1/holidaze/profiles/${loggedInUser.name}`;

    try {
      const response = await fetchWithToken(userProfileDataUrl);
      const userProfileData = await response.json();

      if (userProfileData.venueManager) {
        setUserProfileLocalStorageInfo(true);
      }
    } catch (error) {
        setIsError(true); 
    }
  }

  async function becomeAVenueManager() {
    const userProfileDataUrl = `https://api.noroff.dev/api/v1/holidaze/profiles/${loggedInUser.name}`;

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ venueManager: true }),
    };

    try {
      const response = await fetchWithToken(userProfileDataUrl, requestOptions);
      const profileData = await response.json();
      setIsVenueManager(true);
      console.log("venuemanager after response:", isVenueManager);

      if (response.ok) {
        setUserProfileLocalStorageInfo(profileData.venueManager);
        const updatedProile = { ...profileData, venueManager: true };
        localStorage.setItem("profile", JSON.stringify(updatedProile));
      } else {
        throw new Error("Failed to update venue manager");
      }
    } catch (error) {
      setIsError(true);
    }
  }

  async function deleteBooking(bookingId) {
    const myDeleteBookingsUrl = `https://api.noroff.dev/api/v1/holidaze/bookings/${bookingId}`;

    try {
      setIsError(false);
      const response = await fetchWithToken(myDeleteBookingsUrl, {
        method: "DELETE",
      });
      if (response.ok) {
        setDeleteSuccess(true);
      } else {
        throw new Error("An error occured trying to delete booking");
      }
    } catch (error) {
      setIsError(true);
      setShowModal(false);
    }
  }

  const handleUpdateBooking = (booking) => {
    setIsOnUpdateModal(true);
    setSelectedBooking(booking);
  };

  const handleDeleteClick = (bookingId) => {
    setCurrentBookingId(bookingId);
    setShowModal(true);
  };

  const confirmDeleteBooking = () => {
    if (currentBookingId) {
      deleteBooking(currentBookingId);
      setCurrentBookingId(null);
      setShowModal(false);
    }
  };

  const onCancel = () => {
    setShowModal(false);
  };

  const MyBookings = () => {
    const formattedDates = getFormattedDates();

    function getFormattedDates() {
      if (profileInfo && profileInfo.bookings) {
        return profileInfo.bookings.map((booking) => {
          const fetchedDateFrom = booking.dateFrom;
          const fetchedDateTo = booking.dateTo;
          const parsedDateFrom = new Date(fetchedDateFrom);
          const parsedDateTo = new Date(fetchedDateTo);

          const formattedDateFrom = parsedDateFrom.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          const formattedDateTo = parsedDateTo.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          return { formattedDateFrom, formattedDateTo };
        });
      }
    }

    if (isError) {
      return <div>Error loading your bookings</div>;
    }

    if (isLoading) {
      return <div>Loading your bookings...</div>;
    }

    return (
      <UserBookingsWrapper>
        <div className="users-bookings-container">
          {profileInfo.bookings.length > 0 ? (
            <h2>My Bookings ({profileInfo._count?.bookings || 0})</h2>
          ) : (
            <div className="no-bookings">
              <p>You have no bookings</p>
            </div>
          )}

          {profileInfo.bookings.map((booking, index) => (
            <UsersBookingsCards key={booking.id}>
              <div>
                {booking.venue.media && booking.venue.media.length > 0 ? (
                  <img
                    src={booking.venue.media}
                    alt={booking.venue.name}
                    onError={(event) => {
                      event.target.onerror = null;
                      event.target.src = placeholderImg;
                    }}
                  />
                ) : (
                  <img src={placeholderImg} alt="Placeholder image"></img>
                )}
              </div>
              <UsersBookingsInfo>
                <h3>{booking.venue.name}</h3>
                <span>Country: {booking.venue.location.country}</span>
                <span>City: {booking.venue.location.city}</span>
                <span>
                  From: {formattedDates[index]?.formattedDateFrom || ""}
                </span>
                <span>To: {formattedDates[index]?.formattedDateTo || ""}</span>

                <div className="my-bookings-buttons">
                  <MyBookingsUpdateButton
                    to="/account/update-booking"
                    onClick={() => handleUpdateBooking(booking)}
                  >
                    Update
                  </MyBookingsUpdateButton>
                  <ViewBookedVenueButton
                    onClick={() => goToVenue(booking.venue.id)}
                  >
                    View
                  </ViewBookedVenueButton>
                  <MyBookingsDeleteLink
                    onClick={() => handleDeleteClick(booking.id)}
                  >
                    Delete
                  </MyBookingsDeleteLink>
                </div>
              </UsersBookingsInfo>
              {isOnUpdateModal && selectedBooking && (
                <BookVenueForm
                  selectedBooking={selectedBooking}
                  setSelectedBooking={setSelectedBooking}
                  onBookingUpdate={onBookingUpdate}
                  closeModal={() => setIsOnUpdateModal(false)}
                  venueId={selectedBooking.venue.id}
                  setIsOnUpdateModal={setIsOnUpdateModal}
                  isOnUpdateModal={isOnUpdateModal}
                  getProfileInfo={getProfileInfo}
                />
              )}

              {showModal && (
                <MyBookingsConfirmationModal
                  onConfirm={() => confirmDeleteBooking()}
                  deleteSuccess={deleteSuccess}
                  onCancel={!deleteSuccess ? onCancel : null}
                  message={
                    deleteSuccess
                      ? "Your booking was successfully deleted."
                      : "Are you sure you want to delete this venue?"
                  }
                  isOpen={showModal}
                />
              )}
            </UsersBookingsCards>
          ))}
        </div>
      </UserBookingsWrapper>
    );
  };

  const handleMyBookingsOnClick = () => {
    setShowBookings(true);
    setShowVenues(false);
  };

  const handleMyVenuesOnClick = () => {
    setShowVenues(true);
    setShowBookings(false);
  };

  const placeholderImg =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Fdetail%2F233-2332677_image-500580-placeholder-transparent.png&f=1&nofb=1&ipt=e4343f78ff0f7af5109020267ce01c0c613d9fd7ad65d2b8622a4b60419c5152&ipo=images";

  const MyVenues = () => {
    console.log('Profile Info Venues gpt: ', profileInfo.venues);
    console.log('Venue Bookings gpt: ', venueBookings); 
    return (
      <UsersVenuesWrapper>
        {profileInfo && profileInfo.venues.length > 0 ? (
          <div className="users-venue-container">
            <h2>My Venues ({profileInfo._count?.venues || 0})</h2>
            <Link to="/account/create-venue">Create a new venue</Link>
            {profileInfo.venues.map((venue) => {
              // Finding the venueBooking that matches the venue.id
              const venueBooking = venueBookings.find(
                (vb) => vb.id === venue.id); 

              return (
                
                <UsersVenueCards
                  to={`/account/user-venue/${venue.id}`}   
                  key={venue.id}
                >
                    {console.log("venueBooking testing:" , venueBooking)}  
                  <div>
                    {venue.media[0] && venue.media[0].length > 0 ? (
                      <img
                        src={venue.media[0]}
                        alt={venue.name}
                        onError={(event) => {
                          event.target.onerror = null; 
                          event.target.src = placeholderImg;
                        }}
                      />
                    ) : (
                      <img src={placeholderImg} alt="Placeholder image"></img>
                    )}
                  </div>
                  <UsersVenuesInfo>
                    <h3 className="venue-name">{venue.name}</h3>
                    <div className="venue-card-info">
                    {venueBooking ? ( 
                      <>
                        <span>Country: {venueBooking.location.country || 'Unknown'}</span>
                        <span>City: {venueBooking.location.city || 'Unknown'}</span>
                        <span>Address: {venueBooking.location.address || 'Unknown'}</span>
                        <span className="booking-amount">Bookings: {venueBooking.bookings.length}</span>
                      </>
                    ) : (
                      <>
                        <span>Country: {venue.location.country || 'Unknown'}</span> 
                        <span>City: {venue.location.city || 'Unknown'}</span>
                        <span>Address: {venue.location.address || 'Unknown'}</span> 
                        <span className="booking-amount">Bookings: {venueBooking ? venueBookings.length : 0}</span>  
                      </>
                    )}
                    </div>
                  </UsersVenuesInfo>
                </UsersVenueCards>
              );
            })}
          </div>
        ) : (
          <div className="no-venues">
            <Link to="/account/create-venue">Create a new venue</Link>
            <p>You have no venues</p>
          </div>
        )}
      </UsersVenuesWrapper>
    );
  };

  return (
    <ProfileWrapper>
      {loggedInUser ? (
        <div className="profile-container">
          <UserDataStyles>
            <div className="account-info">
              <div className="profile-h1-img-link-container">
                <h1>Account</h1>
                {profileInfo.avatar && profileInfo.avatar.length > 0 ? (
                  <img
                    className="profile-image"
                    src={profileInfo.avatar}
                    alt={profileInfo.name}
                    onError={(event) => {
                      event.target.onerror = null;
                      event.target.src = placeholderImg;
                    }}
                  />
                ) : (
                  <img
                    className="profile-image"
                    src={placeholderImg}
                    alt="Placeholder image"
                  ></img>
                )}
                <Link to="/account/edit" className="edit-link">
                  Edit
                </Link>
              </div>
              <div className="profile-name-info">
                <h2>{loggedInUser.name}</h2>
                <div className="email-and-venue-manager">
                  <span className="profile-email">
                    Email: {loggedInUser.email}
                  </span>
                  <span>
                    {" "}
                    Venue Manager: {loggedInUser.venueManager ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>

            <ProfileOptionsStyles>
              <Link
                className="profile-link"
                to="/account/my-bookings"
                onClick={handleMyBookingsOnClick}
              >
                My Bookings ({profileInfo._count?.bookings || 0})
              </Link>
              {isVenueManager ? (
                <Link
                  className="profile-link"
                  to="/account/my-venues"
                  onClick={handleMyVenuesOnClick}
                >
                  My Venues ({profileInfo._count?.venues || 0})
                </Link>
              ) : (
                <BecomeVenueManagerButton onClick={becomeAVenueManager}>
                  Become a Venue Manager
                </BecomeVenueManagerButton>
              )}
            </ProfileOptionsStyles>
          </UserDataStyles>

          <UserBookingsStyles>
            {loggedInUser && showBookings && <MyBookings />}
            {isVenueManager && showVenues && <MyVenues />}
          </UserBookingsStyles>
        </div>
      ) : (
        <div className="not-logged-in">
          <p>You need to be logged in to view this page.</p>
          <div>
            You can log in <Link to="/login"> HERE</Link>
          </div>
          <div>
            Don't have an account? Register <Link to="/register"> HERE</Link>
          </div>
        </div>
      )}
    </ProfileWrapper>
  );
};
