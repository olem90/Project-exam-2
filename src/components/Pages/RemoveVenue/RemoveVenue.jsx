import { useParams, useNavigate } from "react-router-dom";
import { fetchWithToken } from "../../../fetchWithToken";
import { useState } from "react";
import { RemoveVenueLink} from "./RemoveVenue.styles";
import { Modal } from "../../Modal/Modal";

export const RemoveVenue = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const deleteVenueUrl = `https://api.noroff.dev/api/v1/holidaze/venues/${id}`;
    
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    async function deleteVenue() {
            setIsLoading(true);
            try {
                const response = await fetchWithToken(deleteVenueUrl, {
                    method: "DELETE",
                });
                if (response.ok) {
                    setDeleteSuccess(true);
                    setShowModal(true);
                } else {
                    console.error("Failed to delete the venue");
                    setShowModal(false);
                }
            } catch (error) {
                setDeleteSuccess(false);
                setShowModal(false);
                console.error("Error deleting the venue:", error);
            } finally {
                setIsLoading(false);
            }
    };

    const closeModal = () => {
        setShowModal(false);
        deleteVenue();
        if (deleteSuccess) {
            navigate("/account");
        }
    }


    const onCancel = () => {
        setShowModal(false);
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return(
        <>
            <RemoveVenueLink onClick={() => setShowModal(true)} >Delete Venue</RemoveVenueLink>
            
            {showModal && (
                <Modal 
                    isOpen = {showModal}
                    message = {deleteSuccess ? "Your venue was successfullly deleted." : "Are you sure you want to delete this venue?"}
                    onClose = {closeModal}
                    onCancel = {!deleteSuccess ? onCancel : null}
                    deleteSuccess = {deleteSuccess}
            />
            )}
        </>
    )
}

