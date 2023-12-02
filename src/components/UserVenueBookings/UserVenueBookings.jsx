import { useEffect, useState } from "react";
import { VenueBookingsCards, VenueBookingsWrapper } from "./UserVenueBookings.styles";

export const UsersVenueBookings = ({ id }) => {
    const [venueBookings, setVenueBookings] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const venueBookingsUrl = `https://api.noroff.dev/api/v1/holidaze/venues/${id}?_bookings=true`;
    const bookings = venueBookings.bookings || {};

    useEffect(() => {
        async function getVenueBookings() {
            try {
                setIsError(false);
                setIsLoading(true);
                const response = await fetch(venueBookingsUrl);
                const json = await response.json();
                setVenueBookings(json);
                console.log("VenueBookings from sep component:", json);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        getVenueBookings();
    }, [id]);

    const getFormattedDates = (dateFrom, dateTo, dateCreated, dateUpdated) => {
        const parsedDateFrom = new Date(dateFrom);
        const parsedDateTo = new Date(dateTo);
        const parsedDateCreated = new Date(dateCreated)
        const parsedDateUpdated = new Date(dateUpdated)
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
        const formattedDateCreated = parsedDateCreated.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        const formattedDateUpdated = parsedDateUpdated.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        return { formattedDateFrom, formattedDateTo, formattedDateCreated, formattedDateUpdated };
    };

    if (isError) {
        return <div>Oops looks like an error has occured while loading venue bookings. Please try again.</div>
    }

    if (isLoading) {
        return <div>loading venue bookings...</div>
    }

    return (
       
        <VenueBookingsWrapper>
            <div className="venue-bookings-container">
                <h3>Bookings({bookings.length})</h3>
                {bookings.length > 0 ? (
                    bookings.map((booking) => {
                        const { 
                            formattedDateFrom, 
                            formattedDateTo, 
                            formattedDateCreated, 
                            formattedDateUpdated } = getFormattedDates(booking.dateFrom, booking.dateTo, booking.created, booking.updated);
                        return ( 
                            <VenueBookingsCards key={booking.id}>
                                <div className="user-venue-bookings-text">
                                    <span>From: {formattedDateFrom}</span>
                                    <span>To: {formattedDateTo}</span>
                                    <span>Number of guests: {booking.guests}</span> 
                                    <hr />        
                                    <span>Created: {formattedDateCreated}</span>
                                    <span>Last Updated: {formattedDateUpdated}</span>   
                                </div>
                                <div className="user-venue-booking-img-container">
                                    <img className="user-venue-bookings-img" src={venueBookings.media}></img> 
                                </div>
                            </VenueBookingsCards>
                        );   
                    })
                ) : (
                    <p>No bookings available for this venue.</p>
                )}
            </div>
        </VenueBookingsWrapper>
        
    )
}




