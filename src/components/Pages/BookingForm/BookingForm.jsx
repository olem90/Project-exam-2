import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { ModalStyles } from "./BookingForm.styles";
import "react-datepicker/dist/react-datepicker.css";
import { CloseModalButton, ModalSubmitButton } from "../../Buttons/Buttons.styles";
import { ModalStylesWrapper } from "./BookingForm.styles";
import { fetchWithToken } from "../../../fetchWithToken";

const bookingUrl = "https://api.noroff.dev/api/v1/holidaze/bookings?limit=100";

export const BookVenueForm = ({ closeModal, venueId }) => {
    const [showModal, setShowModal] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [dateTo, setDateTo] = useState(new Date());
    const [dateFrom, setDateFrom] = useState(new Date());
    const [guests, setGuests] = useState("1");
    const [bookedDates, setBookedDates] = useState(new Set());

    function isPastDate(date) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
      
        const comparingDate = new Date(date);
        comparingDate.setHours(0, 0, 0, 0);
      
        return today.getTime() > comparingDate.getTime();
      };
    
    function isBooked(date) {
        console.log("Booked dates: ", date.toISOString());
        return bookedDates.has(date.toISOString());
    };

        async function fetchBookings() {
            try {
                const response = await fetchWithToken(bookingUrl, {
                  method: 'GET',
                  headers: { 
                    "Content-Type": "Application/json" 
                },
                });
                if (response) {
                    const bookings = await response.json();

                      const newBookedDatesSet = new Set();
                      bookings.forEach(booking => {
                        const dateFrom = new Date(booking.dateFrom);
                        const dateTo = new Date(booking.dateTo);

                        for (let date = new Date(dateFrom); date.getTime() <= dateTo.getTime(); ) {
                            newBookedDatesSet.add(date.toISOString());
                            date = new Date(date.setDate(date.getDate() + 1));
                        }
                      });
                    
                    setBookedDates(newBookedDatesSet);
                    console.log("Updated bookedDates: ", Array.from(newBookedDatesSet));
                  } else {
                    setIsError('Failed to fetch bookings');
                    console.error('Failed to fetch bookings:', response);
                  }
            } catch (error) {
                console.error('Could not fetch bookings:', error);
            }
        };
        
      useEffect(() => {
        fetchBookings();
        console.log(venueId)
       }, [venueId]);

       function isDateRangeAvailable(dateFrom, dateTo, bookedDates) {
        for (let date = new Date(dateFrom); date <= dateTo; date.setDate(date.getDate() + 1)) {
          if (bookedDates.has(date.toISOString())) {
            return false; // Date is already booked
          }
        }
        return true; // Date range is available
       }

    async function onBookingSubmit(event) {
        event.preventDefault();

        if (dateTo <= dateFrom) {
           setIsError("Oops! The end date needs to be later than the start date.");
            return;
        }

        if (!isDateRangeAvailable(dateFrom, dateTo, bookedDates)) {
            setIsError("Oops! These dates are already booked.");
            return;
        }  

        const payload = {
            dateFrom: dateFrom.toISOString(),
            dateTo: dateTo.toISOString(),
            guests: Number(guests),
            venueId
        };

        console.log("this is payload", payload);

        try {
            const response = await fetchWithToken(bookingUrl, {
                method: "POST",
                headers: { 
                    "Content-Type": "Application/json" 
                },
                body: JSON.stringify(payload)
            }); 
            const json = await response.json();
            console.log("this is json", json);
            console.log('Initial response:', response);

            if (response.ok) {
                setIsSuccess(true);
                setIsError(false);
                console.log("Booking successful");
                fetchBookings();
            } else {
                console.log("Booking failed");
                setIsError("An error occurred while booking. Please try again.");
            }

            if (response.status === 201) {
                console.log("yeeeeey success");
            } else {
                console.log("buuuuu failed!", response.status);
            }

        } catch (error) {
            console.log("An error occurred:", error);
            setIsError("An exception occurred while booking. Please try again.");
        }
    };

    return (
        <ModalStylesWrapper>
          <ModalStyles>
            {showModal ? (
                <div className="modal-form-container">
                    <CloseModalButton onClick={closeModal}>X</CloseModalButton>
                    <h2>Book Venue</h2>
                    <form onSubmit={onBookingSubmit} className="booking-form">
                        <div className="datePickerContainer">
                            <div className="booking-dates">
                                <label>Date from:</label>
                                <DatePicker 
                                  selected={dateFrom} 
                                  onChange={date => setDateFrom(date)} 
                                  minDate={new Date()}
                                  dayClassName={date => {
                                    if (isPastDate(date)) {
                                        return "past-date";
                                    } if (isBooked(date)) {
                                      return "booked" ;
                                    } else {
                                      return "available";
                                    }
                                  }} 
                                />
                            </div>

                            <div className="booking-dates">
                                <label>Date to:</label>
                                <DatePicker 
                                  selected={dateTo} 
                                  onChange={date => setDateTo(date)} 
                                  minDate={new Date()}
                                  dayClassName={date => {
                                    if (isPastDate(date)) {
                                        return "past-date";
                                    } if (isBooked(date)) {
                                      return "booked" ;
                                    } else {
                                      return "available";
                                    }
                                  }} 
                                  />
                            </div>
                        </div>

                        <div className="guests-booking">
                            <label>Guests</label>
                            <select name="guests" id="guests" onChange={event => setGuests(event.target.value)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        
                        <input type="hidden" name="id" value={venueId} />
                        <ModalSubmitButton>Book Venue</ModalSubmitButton> 
                        {isError && <p className="error-message">{isError}</p>}
                        {isSuccess && <p className="success-message">Booking Successful!🎉</p>}
                    </form>
                </div>
            ) : ""}
          </ModalStyles>
        </ModalStylesWrapper>
    )
}