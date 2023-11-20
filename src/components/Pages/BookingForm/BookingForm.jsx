import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { ModalStyles } from "./BookingForm.styles";
import "react-datepicker/dist/react-datepicker.css";
import { CloseModalButton, ModalSubmitButton } from "../../Buttons/Buttons.styles";
import { ModalStylesWrapper } from "./BookingForm.styles";
import { fetchWithToken } from "../../../fetchWithToken";
import moment from 'moment';
import 'moment-timezone';

const bookingUrl = "https://api.noroff.dev/api/v1/holidaze/bookings";

export const BookVenueForm = ({ closeModal, venueId }) => {
    const [showModal, setShowModal] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [dateTo, setDateTo] = useState(moment().toDate()); // This will use the current time in Norway
    const [dateFrom, setDateFrom] = useState(moment().toDate());
    const [guests, setGuests] = useState("1");
    const [bookedDates, setBookedDates] = useState(new Set());

    const venueBookingsUrl = `https://api.noroff.dev/api/v1/holidaze/venues/${venueId}?_bookings=true`;

    const bookedDatesArray = Array.from(bookedDates).map(dateStr => moment(dateStr).toDate());

    function isPastDate(date) {
      const today = moment().startOf('day');
      return moment(date).isBefore(today);
    }
    
    function isBooked(date) {
      let normalizedDate = moment(date).format('YYYY-MM-DD');
      console.log("Checking if booked:", normalizedDate, bookedDates.has(normalizedDate));
      return bookedDates.has(normalizedDate);
    }

  /*
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

                    console.log("Fetched bookings:", bookings);

                      const newBookedDatesSet = new Set();
                      bookings.forEach(booking => {
                        const dateFrom = new Date(booking.dateFrom);
                        const dateTo = new Date(booking.dateTo);

                        for (let date = new Date(dateFrom); date <= dateTo; date.setDate(date.getDate() + 1)) {
                          newBookedDatesSet.add(date.toISOString().split('T')[0]); // Store date in YYYY-MM-DD format
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
       */
      
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
                  const newBookedDatesSet = new Set();
                /*    venueSpecificBookings.forEach(booking => {
                      let dateFrom = new Date(booking.dateFrom);
                      let dateTo = new Date(booking.dateTo);
                      dateTo.setUTCDate(dateTo.getUTCDate() + 1);
      
                      for (let date = new Date(dateFrom); date <= dateTo; date.setDate(date.getDate() + 1)) {
                          newBookedDatesSet.add(date.toISOString().split('T')[0]); // Store date in YYYY-MM-DD format
                      }
                  });
*/
             
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
                  // Handle errors
                  setIsError('Failed to fetch bookings for the venue');
              }
          } catch (error) {
              // Handle errors
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
              return false; // Found a booked date in the range
            }
            start.add(1, 'days');
          }
          return true; // No booked dates found in the range
        }

/*
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
                setBookedDates(new Set(bookedDates));
                setIsSuccess(true);
                setIsError(false);

                let newBookedDatesSet = new Set(bookedDates);
                let dateFrom = new Date(dateFrom);
                let dateTo = new Date(dateTo);
                dateTo.setDate(dateTo.getDate() + 1); // Include the end date

                for (let date = new Date(dateFrom); date < dateTo; date.setDate(date.getDate() + 1)) {
                  newSet.add(date.toISOString().split('T')[0]);
                }

                setBookedDates(newBookedDatesSet);

                //setBookedDates(bookedDatesArray);

                console.log("Booking successful");
                fetchBookings();
            } else {
                console.log("Booking failed");
                setIsError("An error occurred while booking. Please try again.");
            }

        } catch (error) {
            console.log("An error occurred:", error);
            setIsError("An error occurred while booking. Please try again.");
        }
    };
*/


async function onBookingSubmit(event) {
  event.preventDefault();

  let mDateFrom = moment(dateFrom);
  let mDateTo = moment(dateTo);

  if (mDateTo.isSameOrBefore(mDateFrom)) {
    setIsError("Oops! The end date needs to be later than the start date.");
    return;
  }

  if (!isDateRangeAvailable(mDateFrom, mDateTo, bookedDates)) {
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
          setIsError("An error occurred while booking. Please try again.");
      }

  } catch (error) {
      console.log("An error occurred:", error);
      setIsError("An error occurred while booking. Please try again.");
  }
};

    const getDayClassName = (date) => {
      console.log(`Checking class for date: ${moment(date).format('YYYY-MM-DD')}`);
      if (isPastDate(date)) {
        console.log('Assigning past-date');
        return "past-date";
      }
      if (isBooked(date)) {
        console.log('Assigning booked');
        return "booked";
      }
      console.log('Assigning available');
      return "available"; 
    };

      console.log("Booked Dates Array: ", bookedDatesArray);
      console.log("useState Booked:", bookedDates);

    return (
        <ModalStylesWrapper>
          <ModalStyles>
            {showModal ? (
                <div className="modal-form-container">
                    <CloseModalButton onClick={closeModal}>X</CloseModalButton>
                    <h2>Book Venue</h2>
                    <form onSubmit={onBookingSubmit} className="booking-form">
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
                    </form>
                    {isError && <p className="error-message">{isError}</p>}
                    {isSuccess && <div className="success-message">Booking Successful!🎉</div>}
                </div>
            ) : ""}
          </ModalStyles>
        </ModalStylesWrapper>
    )
}