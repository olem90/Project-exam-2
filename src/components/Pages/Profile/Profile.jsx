import 'font-awesome/css/font-awesome.min.css';
import { ProfileWrapper, ProfileOptionsStyles, UsersVenuesInfo, UsersVenuesWrapper, UserDataStyles, UsersVenueCards, UserBookingsStyles, UsersBookingsCards, UsersBookingsInfo, UserBookingsWrapper } from './Profile.styles';
import { useEffect, useState } from 'react';
import { fetchWithToken } from '../../../fetchWithToken';
import { BecomeVenueManagerButton } from '../../Buttons/Buttons.styles';
import { Link } from 'react-router-dom';

const userProfileLocalStorage = JSON.parse(localStorage.getItem("profile"));
const venueBookingsUrl = `https://api.noroff.dev/api/v1/holidaze/venues?_bookings=true`;
const profileInfoUrl = `https://api.noroff.dev/api/v1/holidaze/profiles/${userProfileLocalStorage.name}?_venues=true&_bookings=true`;

export const Profile = () => {
    const [venueBookings, setVenueBookings] = useState([]);
    const [profileInfo, setProfileInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [showBookings, setShowBookings] = useState(false);
    const [showVenues, setShowVenues] = useState(false);
    const [isVenueManager, setIsVenueManager] = useState(null);
    const [userProfileLocalStorageInfo, setUserProfileLocalStorageInfo] = useState(null);

    useEffect(() => {
        getUserProfileInfo();
    }, []);
    
    useEffect(() => {
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
        getProfileInfo();
    }, []);

    useEffect(() => {
        async function getUsersVenueBookings() {
            try {
                setIsError(false);
                setIsLoading(true);
                const response = await fetchWithToken(venueBookingsUrl);
                const json = await response.json();
                setVenueBookings(json);
                console.log("VenueBookings:" , json)
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
        const userProfileDataUrl = `https://api.noroff.dev/api/v1/holidaze/profiles/${userProfileLocalStorage.name}`;

        try {
            const response = await fetchWithToken(userProfileDataUrl);
            const userProfileData = await response.json();

            if (userProfileData.venueManager) {
                setUserProfileLocalStorageInfo(true);
            };

        } catch (error) {
            console.log(error);
        }
    }
    
    async function becomeAVenueManager() {
        const userProfileDataUrl = `https://api.noroff.dev/api/v1/holidaze/profiles/${userProfileLocalStorage.name}`;

        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({venueManager: true}),
        };

        try {
            const response = await fetchWithToken(userProfileDataUrl, requestOptions);
            const profileData = await response.json();
            setIsVenueManager(profileData.venueManager);

        } catch (error) {
            setIsError(true);
        }
    }

    const MyBookings = () => {
        const formattedDates = getFormattedDates();

        function getFormattedDates() {
            if (profileInfo && profileInfo.bookings) {
                return profileInfo.bookings.map(
                    (booking) => {
                        const fetchedDateFrom = booking.dateFrom;
                        const fetchedDateTo = booking.dateTo;
                        const parsedDateFrom = new Date(fetchedDateFrom);
                        const parsedDateTo = new Date(fetchedDateTo);
                        const formattedDateFrom = parsedDateFrom.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        });
                        const formattedDateTo = parsedDateTo.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        });
                        return {formattedDateFrom, formattedDateTo};
                    }                
                )
            } 
        };

        if (isError) {
            return <div>Error loading your bookings</div>
        }

        if (isLoading) {
            return <div>Loading your bookings...</div>
        }

        return (
            <UserBookingsWrapper>
                <h2>My Bookings</h2>
                {profileInfo.bookings.map((booking, index) => (
                    <UsersBookingsCards key={booking.id}>
                        <div>
                            <img src={booking.venue.media[0]}></img>
                        </div>

                        <UsersBookingsInfo>
                            <h3>{booking.venue.name}</h3>
                            <span>From: {formattedDates[index]?.formattedDateFrom || ''}</span>
                            <span>To: {formattedDates[index]?.formattedDateTo || ''}</span>
                        </UsersBookingsInfo>
                    </UsersBookingsCards>
                ))};
            </UserBookingsWrapper>
        )
    }

    const handleMyBookingsOnClick = () => {
        setShowBookings(true);
        setShowVenues(false); 
    };

    const handleMyVenuesOnClick = () => {
        setShowVenues(true);
        setShowBookings(false); 
    };
/*
        const MyVenues = () => {
            
        return (
            <UsersVenuesWrapper>
                <h2>My Venues</h2>
                {profileInfo && profileInfo.venues.length > 0 ? (
                    <div>
                        <Link to="/account/create-venue">Create a new venue</Link>
                        {profileInfo.venues.map((venue) => (
                            <UsersVenueCards key={venue.id}>
                                <div>
                                    <img src={venue.media[0]}></img>
                                </div>
                                <UsersVenuesInfo>
                                    <h3>{venue.name}</h3>
                                    <div>
                                        <span>Bookings: {venueBooking ? venueBooking.bookings.length : 0}</span>
                                    </div>
                                </UsersVenuesInfo>
                            </UsersVenueCards>
                        ))}
                    </div>
                ) : ( 
                    <div>
                        <Link to="/account/create-venue">Create a new venue</Link>
                        <p>You have no venues</p>
                    </div>)}
            </UsersVenuesWrapper>
        )
    }
*/

    const MyVenues = () => {
        return (
            <UsersVenuesWrapper>
                <h2>My Venues</h2>
                {profileInfo && profileInfo.venues.length > 0 ? (
                    <div>
                        <Link to="/account/create-venue">Create a new venue</Link>
                        {profileInfo.venues.map((venue) => { 
                            // Finding the venueBooking that matches the venue.id
                            const venueBooking = venueBookings.find(vb => vb.id === venue.id);

                            return (
                                <UsersVenueCards to="/user-venues/" key={venue.id}>
                                    <div>
                                        <img src={venue.media[0]} alt={venue.name} />
                                    </div>
                                    <UsersVenuesInfo>
                                        <h3>{venue.name}</h3>
                                        <div>
                                            {/* Displaying the number of bookings for the venue */}
                                            <span>Bookings: {venueBooking ? venueBooking.bookings.length : 0}</span>
                                        </div>
                                    </UsersVenuesInfo>
                                </UsersVenueCards>
                            );
                        })}
                    </div>
                ) : (
                    <div>
                        <Link to="/account/create-venue">Create a new venue</Link>
                        <p>You have no venues</p>
                    </div>
                )}
            </UsersVenuesWrapper>
        );
    };
    
    return (
        <ProfileWrapper>
            <div className="profile-container">
             
                <UserDataStyles>
                    <h1>Account</h1>
                    <img src={userProfileLocalStorage.avatar}></img>
                    <Link to= "/account/edit" className="edit-link">Edit</Link>
                    <h2>{userProfileLocalStorage.name}</h2>
                    <span>Email: {userProfileLocalStorage.email}</span>
                    <span> Venue Manager: {userProfileLocalStorage.venueManager ? "Yes" : "No"}</span>

                    <ProfileOptionsStyles>
                        <Link onClick={handleMyBookingsOnClick}>My Bookings ({profileInfo._count?.bookings || 0})</Link>
                        {userProfileLocalStorageInfo ? <Link onClick={handleMyVenuesOnClick}>My Venues ({profileInfo._count?.venues || 0})</Link> 
                        : <BecomeVenueManagerButton onClick={becomeAVenueManager}>Become a Venue Manager</BecomeVenueManagerButton>}   
                    </ProfileOptionsStyles>
                </UserDataStyles>

                <UserBookingsStyles>
                   {showBookings && <MyBookings />}
                   {showVenues && <MyVenues />}
                </UserBookingsStyles>
            </div>
        </ProfileWrapper>
    )
}
