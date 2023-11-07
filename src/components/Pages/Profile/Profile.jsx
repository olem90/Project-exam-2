import 'font-awesome/css/font-awesome.min.css';
import { ProfileWrapper, ProfileOptionsStyles, UsersVenuesWrapper, UserDataStyles, UsersVenueCards, UserBookingsStyles, UsersBookingsCards, UsersBookingsInfo, UserBookingsWrapper } from './Profile.styles';
import { useEffect, useState } from 'react';
import { fetchWithToken } from '../../../fetchWithToken';
import { BecomeVenueManagerButton } from '../../Buttons/Buttons.styles';
import { Link } from 'react-router-dom';

const userProfile = JSON.parse(localStorage.getItem("profile"));

console.log(localStorage.getItem("profile"));

const profileBookingsUrl = `https://api.noroff.dev/api/v1/holidaze/profiles/${userProfile.name}?_bookings=true`;
const managerVenuesUrl = `https://api.noroff.dev/api/v1/holidaze/profiles/${userProfile.name}?_venues=true`;

export const Profile = () => {
    const [user, setUser] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [venues, setVenues] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [showBookings, setShowBookings] = useState(false);
    const [showVenues, setShowVenues] = useState(false);
    const [isVenueManager, setIsVenueManager] = useState(null);
    const [userProfileInfo, setUserProfileInfo] = useState(null);

    useEffect(() => {
        getUserProfileInfo();
    }, []);
    
    useEffect(() => {
        async function getManagerVenues() {
            try {
                setIsError(false);
                setIsLoading(true);
                const response = await fetchWithToken(managerVenuesUrl);
                const json = await response.json();
                setVenues(json);
                setIsLoading(false);
                console.log("IM JSOOON", json);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        getManagerVenues();
    }, []);

    useEffect(() => {
        async function getUsersBookings() {
            try {
                setIsError(false);
                setIsLoading(true);
                const response = await fetchWithToken(profileBookingsUrl);
                const json = await response.json();
                setBookings(json);
                setIsLoading(false);   
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
                console.error(error); 
            }
        }
        getUsersBookings(); 
    }, []);

    async function getUserProfileInfo() {
        const userProfileDataUrl = `https://api.noroff.dev/api/v1/holidaze/profiles/${userProfile.name}`;

        try {
            const response = await fetchWithToken(userProfileDataUrl);
            const userProfileData = await response.json();
            console.log("THIS IS USERPROFILEDATA ", userProfileData.venueManager);

            if (userProfileData.venueManager) {
                setUserProfileInfo(true);
            };

        } catch (error) {
            console.log(error);
        }
    }

    async function becomeAVenueManager() {
        const userProfileDataUrl = `https://api.noroff.dev/api/v1/holidaze/profiles/${userProfile.name}`;

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
            console.log("ProfileDATA", profileData);

        } catch (error) {
            setIsError(true);
        }
    }

    const MyBookings = () => {
        const formattedDates = getFormattedDates();

        function getFormattedDates() {
            if (bookings && bookings.bookings) {
                return bookings.bookings.map(
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
                {bookings.bookings.map((booking, index) => (
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
    
    const MyVenues = () => {

        return (
            <UsersVenuesWrapper>
                <h2>My Venues</h2>
                {venues && venues.venues.length > 0 ? (
                    <div>
                        <Link to="/account/create-venue">Create a new venue</Link>
                        {venues.venues.map((venue) => (
                            <UsersVenueCards key={venue.id}>
                                <div>
                                    <img src={venue.media[0]}></img>
                                </div>

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

    
    return (
        <ProfileWrapper>
            <div className="profile-container">
             
                <UserDataStyles>
                    <h1>Account</h1>
                    <img src={userProfile.avatar}></img>
                    <Link to= "/account/edit" className="edit-link">Edit</Link>
                    <h2>{userProfile.name}</h2>
                    <span>Email: {userProfile.email}</span>
                    <span> Venue Manager: {userProfile.venueManager ? "Yes" : "No"}</span>

                    <ProfileOptionsStyles>
                        <Link onClick={handleMyBookingsOnClick}>My Bookings</Link>
                        {userProfileInfo ? <Link onClick={handleMyVenuesOnClick}>My Venues</Link> 
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



