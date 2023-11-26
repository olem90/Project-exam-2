import { ModalStyles } from "./Modal.styles";
import { ConfirmDeleteButton } from "../Buttons/Buttons.styles";

export const Modal = ({isOpen, onClose, onCancel, message, deleteSuccess}) => {
    if (!isOpen) return null;

    return (
        <ModalStyles>
            <div className="modal-content">
                <p>{message}</p>
                <div className="modal-buttons-container" >
                    <ConfirmDeleteButton onClick={onClose}>OK</ConfirmDeleteButton>
                    {!deleteSuccess && <button onClick={onCancel}>Cancel</button>}
                </div>
            </div>
        </ModalStyles>
    )
}

export const MyBookingsConfirmationModal = ({message, onCancel, onConfirm, isOpen, deleteSuccess}) => {
    if (!isOpen) return null;

    return (
        <ModalStyles>
            <div className="modal-content">
                <p>{message}</p>
                <div className="modal-buttons-container" >
                    <ConfirmDeleteButton onClick={onConfirm}>OK</ConfirmDeleteButton>
                    {!deleteSuccess && <button onClick={onCancel}>Cancel</button>}
                </div>
            </div>
        </ModalStyles>
    )
}

