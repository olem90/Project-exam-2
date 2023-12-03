import { ModalStyles, CreateVenueModalStyles } from "./Modal.styles";

export const Modal = ({
  isOpen,
  onClose,
  onCancel,
  message,
  deleteSuccess,
}) => {
  if (!isOpen) return null;

  return (
    <ModalStyles>
      <div className="modal-content">
        <p className="modal-message">{message}</p>
        <div className="modal-buttons-container">
          <button onClick={onClose}>OK</button>
          {!deleteSuccess && <button onClick={onCancel}>Cancel</button>} 
        </div>
      </div>
    </ModalStyles> 
  );
};

export const CreateVenueModal = ({
  isOpen,
  onClose,
  onCancel,
  message,
  deleteSuccess,
}) => {
  if (!isOpen) return null;

  return (
    <CreateVenueModalStyles>
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-buttons-container">
          <button onClick={onClose}>OK</button>
          {!deleteSuccess && <button onClick={onCancel}>Close</button>}
        </div>
      </div>
    </CreateVenueModalStyles> 
  );
};

export const MyBookingsConfirmationModal = ({
  message,
  onCancel,
  onConfirm,
  isOpen,
  deleteSuccess,
}) => {
  if (!isOpen) return null;

  return (
    <ModalStyles>
      <div className="modal-content">
        <p className="modal-message">{message}</p>
        <div className="modal-buttons-container">
          <button onClick={onConfirm}>OK</button>
          {!deleteSuccess && <button onClick={onCancel}>Cancel</button>}
        </div>
      </div>
    </ModalStyles>
  );
};
