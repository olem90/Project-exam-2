import { useEffect, useState } from "react";
import { VenueBookingsCards } from "./UserVenueBookings.styles";
import { VenueBookingsWrapper } from "./UserVenueBookings.styles";

const venueBookingsUrl = `https://api.noroff.dev/api/v1/holidaze/venues?_bookings=true&?_owner=true`;

export const UsersVenueBookings = ({ id }) => {
    const [venueBookings, setVenueBookings] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    console.log("ProfileInfom Prop:", id);

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
    }, []);

    if (isError) {
        return <div>Oops looks like an error has occured while loading venue bookings. Please try again.</div>
    }

    if (isLoading) {
        return <div>loading venue bookings...</div>
    }

    return (
        <VenueBookingsWrapper key={venueBookings.id}>
            <h3>Bookings</h3>
            {venueBookings.map((vb) => {
                const venueBooking = venueBookings.find(vb => vb.id === id);

            return (
                <VenueBookingsCards key={vb.id}>
                   {venueBooking ? VenueBookingsArray.map((venB) => (
                    <div>
                        <span>{}</span>
                    </div>
                   )) : ""}
                </VenueBookingsCards>
            )
        })};
        </VenueBookingsWrapper>
    )
}

