import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { ModalStyles } from "./BookingForm.styles";
import "react-datepicker/dist/react-datepicker.css";
import { CloseModalButton, BookingFormSubmitButton } from "../../Buttons/Buttons.styles";
import { ModalStylesWrapper } from "./BookingForm.styles";
import { fetchWithToken } from "../../../fetchWithToken";
import moment from 'moment';
import 'moment-timezone';
import { Link } from "react-router-dom";

const bookingUrl = "https://api.noroff.dev/api/v1/holidaze/bookings";

export const BookVenueForm = ({ closeModal, venueId, setSelectedBooking, selectedBooking, onBookingUpdate, setIsOnUpdateModal, isOnUpdateModal, getProfileInfo }) => {
    const userProfileLocalStorage = JSON.parse(localStorage.getItem("profile"));
    const isLoggedIn = userProfileLocalStorage !== null;

    const [showModal, setShowModal] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [dateTo, setDateTo] = useState(moment().toDate()); 
    const [dateFrom, setDateFrom] = useState(moment().toDate());
    const [guests, setGuests] = useState("1");
    const [bookedDates, setBookedDates] = useState(new Set());
    const [maxGuests, setMaxGuests] = useState(0);
    const [isSelectDropdown, setIsSelectDropdown] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const venueBookingsUrl = `https://api.noroff.dev/api/v1/holidaze/venues/${venueId}?_bookings=true`;
    const bookedDatesArray = Array.from(bookedDates).map(dateStr => moment(dateStr).toDate());

    useEffect(() => {
      if (selectedBooking) {
        console.log("Setting up form with existing booking data:", selectedBooking);
        setDateFrom(moment(selectedBooking.dateFrom).toDate());
        setDateTo(moment(selectedBooking.dateTo).toDate());
        setGuests(selectedBooking.guests);
      }
    }, [selectedBooking]);

    function isPastDate(date) {
      const today = moment().startOf('day');
      return moment(date).isBefore(today);
    }
    
    function isBooked(date) {
        let normalizedDate = moment(date).format('YYYY-MM-DD');
        return bookedDates.has(normalizedDate);
    }

    const guestOtions = [];
    for(let i = 1; i <= maxGuests; i++) {
      guestOtions.push(<option key={i} value={i}>{i}</option>)
    }

        async function fetchBookings() {
          try {
              const response = await fetchWithToken(venueBookingsUrl, {
                  method: 'GET',
                  headers: { 
                      "Content-Type": "Application/json" 
                  },
              });
      
              if (response.ok) {
                  const venueData = await response.json();
                  const venueSpecificBookings = venueData.bookings || []; 
                  console.log("checking VenueBookings:", venueSpecificBookings);
                  setBookedDates(bookedDatesArray);
                  setMaxGuests(venueData.maxGuests);
                  const newBookedDatesSet = new Set();
                  venueSpecificBookings.forEach(booking => {
                    let startDate = moment(booking.dateFrom);
                    let endDate = moment(booking.dateTo).add(1, 'days'); // Include the end date

                    while (startDate.isBefore(endDate)) {
                      newBookedDatesSet.add(startDate.format('YYYY-MM-DD'));
                      startDate.add(1, 'days');
                    }
                  });

                  console.log("NEWBOOKEDDDDATES:", newBookedDatesSet)
                  setBookedDates(newBookedDatesSet);
              } else {
                  setIsError('Failed to fetch bookings for the venue');
              }
          } catch (error) {
              setIsError('Error fetching bookings for the venue');
          }
      }
    
      useEffect(() => {
        fetchBookings();
       }, [venueId]);

        function isDateRangeAvailable(startDate, endDate, bookedDates) {
          let start = moment(startDate);
          let end = moment(endDate);

          while (start.isBefore(end)) {
            if (bookedDates.has(start.format('YYYY-MM-DD'))) {
              return false; 
            }
            start.add(1, 'days');
          }
          return true; 
        }

        const bookingId = selectedBooking ? selectedBooking.id : null;
        const isUpdateMode = selectedBooking !== null;

async function onBookingSubmit(event) {
  event.preventDefault();

  if (!isLoggedIn) {
    setIsError( 
    <div className="not-logged-in">
        <p>You need to be logged in to make a booking.</p>
        <div>You can log in <Link to="/login"> HERE</Link></div>
        <div>Don't have an account? Register <Link to="/register"> HERE</Link></div>
    </div>);
    return;
  };

  let mDateFrom = moment(dateFrom);
  let mDateTo = moment(dateTo);

  if (mDateTo.isSameOrBefore(mDateFrom)) {
    setIsError("Oops! The end date needs to be later than the start date.");
    return;
  }

  if (!isDateRangeAvailable(mDateFrom, mDateTo, bookedDates)) {
    setIsSuccess(false); 
    setIsError("Oops! These dates are already booked.");
    return;
  }

  const payload = {
    dateFrom: mDateFrom.format(),
    dateTo: mDateTo.format(),
    guests: Number(guests),
    venueId
  };

  try {
      const response = await fetchWithToken(bookingUrl, {
          method: "POST",
          headers: { 
              "Content-Type": "Application/json" 
          },
          body: JSON.stringify(payload)
      });

      console.log('Response:', response);

      if (response.ok) {
          setIsSuccess(true);
          setIsError(false);

          let updatedBookedDatesSet = new Set(bookedDates);
          mDateTo.add(1, 'day');

          while (mDateFrom.isBefore(mDateTo)) {
            updatedBookedDatesSet.add(mDateFrom.format('YYYY-MM-DD'));
            mDateFrom.add(1, 'days');
          }

          setBookedDates(updatedBookedDatesSet);
          console.log("Booking successful");
          fetchBookings();
      } else {
          console.log("Booking failed");
          setIsSuccess(false);
          setIsError("An error occurred while booking. Please try again.");
      }

  } catch (error) {
      setIsSuccess(false);
      console.log("An error occurred:", error);
      setIsError("An error occurred while booking. Please try again.");
  }
};

const updateBookingUrl = `https://api.noroff.dev/api/v1/holidaze/bookings/${bookingId}`;
   
      async function  updateBooking() {
        const updatePayload = {
          dateFrom: moment(dateFrom).format(),
          dateTo: moment(dateTo).format(),
          guests: Number(guests),
        };
        console.log("updatePayload:", updatePayload);
        console.log("Updating booking with ID:", bookingId);

        try {
          setIsError(false);
          const response = await fetchWithToken(updateBookingUrl, {
            method: "PUT",
            headers: {
              "Content-Type": "Application/json"
          },
          body: JSON.stringify(updatePayload)
        });
          const json = await response.json();
          console.log("json response - UpdateBooking", json);

          
          if (response.ok) {
            setIsError(false);
            setUpdateSuccess(true);
            
            if (onBookingUpdate) {
              onBookingUpdate();
            }
          } else {
            setIsError("An error occured while trying to update your booking. Please try again");
          }         
        } catch (error) {
          setIsSuccess(false);
          setIsError("An error occured while trying to update your booking. Please try again");
        }
      }                                                                                                                                                                                    
    async function HandleBookingFormSubmit(event) {
      event.preventDefault();

      console.log("Form submitted. Update mode:", isOnUpdateModal);

      if (isOnUpdateModal) {
        console.log("Attempting to update booking");
        await updateBooking();
      } else {
          console.log("Attempting to create new booking");
        await onBookingSubmit(event);
      }
    };

    const closeUpdateBookingForm = () => {
      closeModal();
      getProfileInfo();
    }

    const getDayClassName = (date) => {
      const formattedDate = moment(date).format('YYYY-MM-DD');
      const formattedDateFrom = moment(dateFrom).format('YYYY-MM-DD');
      const formattedDateTo = moment(dateTo).format('YYYY-MM-DD');

      if ((formattedDate === formattedDateFrom && formattedDate !== formattedDateTo) || 
        (moment(date).isAfter(dateFrom) && moment(date).isBefore(dateTo))) {
        return "date-range";
      }
      if (moment(date).isAfter(dateFrom) && moment(date).isBefore(dateTo)) {
        return "date-range"; // Apply style to dates between dateFrom and dateTo
      }
      if (isPastDate(date)) {
        return "past-date";
      }
      if (isBooked(date)) {
        return "booked";
      }
      return "available"; 
    };

    return (
        <ModalStylesWrapper>
          <ModalStyles>
            {showModal ? (
                <div className="modal-form-container">
                    <CloseModalButton onClick={closeModal}>X</CloseModalButton>
                    <h2>Book Venue</h2>
                    <form onSubmit={HandleBookingFormSubmit} className="booking-form">
                        <div className="datePickerContainer">
                            <div className="booking-dates start-date">
                                <label>Date from:</label>
                                <DatePicker 
                                  selected={dateFrom} 
                                  onChange={date => setDateFrom(date)} 
                                  minDate={new Date()}
                                  excludeDates={bookedDatesArray}
                                  dayClassName= {getDayClassName}
                                />
                            </div>               

                            <div className="booking-dates end-date">
                                <label>Date to:</label>
                                <DatePicker className="date-to"
                                    selected={dateTo} 
                                    onChange={date => setDateTo(date)} 
                                    minDate={new Date()}
                                    excludeDates={bookedDatesArray}
                                    dayClassName= {getDayClassName}
                                    />
                            </div>
                        </div>

                        <div className="guests-booking">
                            <label>Guests</label>
                            <select name="guests" id="guests" 
                                size={isSelectDropdown ? Math.min(maxGuests, 6) : 1} 
                                onFocus={() => setIsSelectDropdown(true)}
                                onBlur={() => setIsSelectDropdown(false)}
                                onChange={event => {
                                  setGuests(event.target.value);
                                  setIsSelectDropdown(false);
                                }}
                                >
                                {guestOtions}
                            </select>
                        </div>
                        
                        <input type="hidden" name="id" value={venueId} />
                        <BookingFormSubmitButton>
                            {isOnUpdateModal ? "Update Booking" : "Book Venue"}
                        </BookingFormSubmitButton>  
                    </form>
                    {isError && <div>
                                    <p className="error-message">{isError}</p>
                                </div>}
                    {isSuccess && <div className="success-message">
                                      <p>Your booking was successful!🎉</p>
                                      <Link className="go-back-link" onClick={closeModal}>Go Back</Link>
                                  </div>}
                    {updateSuccess && <div className="success-message">
                                      <p>Your booking was successfully updated!🎉</p>
                                      <Link className="go-back-link" onClick={closeUpdateBookingForm}>Go Back</Link>
                                  </div>}
                </div>
            ) : ""}
          </ModalStyles>
        </ModalStylesWrapper>
    )
}




