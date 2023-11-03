import { useState } from "react";
import { fetchWithToken } from "../../../fetchWithToken";

const userProfile = JSON.parse(localStorage.getItem("profile"));

export const EditAvatar = () => {
    const [updatedAvatar, setUpdatedAvatar] = useState("");


    function onAvatarChange(event) {
        setUpdatedAvatar(event.target.value);
    };
    
    async function UpdateAvatar(event) {
        event.preventDefault();
        const userProfileDataUrl = `https://api.noroff.dev/api/v1/holidaze/profiles/${userProfile.name}/media`;

        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({avatar: updatedAvatar}),
        };

        console.log("AVATAR:", updatedAvatar);

        try {
            const response = await fetchWithToken(userProfileDataUrl, requestOptions);
            if (response.ok) {
                const profileData = await response.json();
                console.log("MYPROFILE DATA: ", profileData);

                localStorage.setItem("profile", JSON.stringify({ ...userProfile, avatar: updatedAvatar }));
                window.location.reload();
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={UpdateAvatar}>
            <label>Avatar</label>
            <input placeholder="type your avatar url"
            onChange={onAvatarChange}
            />
            <button onClick={UpdateAvatar}>Update Avatar</button>
        </form>
    )
}