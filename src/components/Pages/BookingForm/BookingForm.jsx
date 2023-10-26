import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ModalStyles } from "./BookingForm.styles";
import "react-datepicker/dist/react-datepicker.css";
import { CloseModalButton } from "../../Buttons/Buttons.styles";
import { ModalStylesWrapper } from "./BookingForm.styles";

export const BookVenueForm = ({ closeModal }) => {
    const [showModal, setShowModal] = useState(true);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <ModalStylesWrapper>
        <ModalStyles>
            {showModal ? (
                <div className="modal-form-container">
                    <CloseModalButton onClick={closeModal}>X</CloseModalButton>
                    <h2>Book Venue</h2>
                    <form className="booking-form">
                        <div className="datePickerContainer">
                            <div className="booking-dates">
                                <label>Date from:</label>
                                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                            </div>

                            <div className="booking-dates">
                                <label>Date to:</label>
                                <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
                            </div>
                        </div>

                        <div className="guests-booking">
                            <label>Guests</label>
                            <select name="guests" id="guests">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>            
                        </div>


                    </form>
                </div>
            ) : ""}
        </ModalStyles>
        </ModalStylesWrapper>
    )
}