import { useState } from "react";
import { fetchWithToken } from "../../../fetchWithToken";
import { EditAvatarWrapper, EditAvatarForm } from "./EditAvatar.styles";
import { UpdateAvatarButton } from "../../Buttons/Buttons.styles";

const userProfile = JSON.parse(localStorage.getItem("profile"));

export const EditAvatar = () => {
  const [updatedAvatar, setUpdatedAvatar] = useState("");

  function onAvatarChange(event) {
    setUpdatedAvatar(event.target.value);
  }

  async function UpdateAvatar(event) {
    event.preventDefault();
    const userProfileDataUrl = `https://api.noroff.dev/api/v1/holidaze/profiles/${userProfile.name}/media`;

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ avatar: updatedAvatar }),
    };

    try {
      const response = await fetchWithToken(userProfileDataUrl, requestOptions);
      if (response.ok) {
        const profileData = await response.json();

        localStorage.setItem(
          "profile",
          JSON.stringify({ ...userProfile, avatar: updatedAvatar }),
        );
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <EditAvatarWrapper>
      <div className="edit-avatar-container">
        <h1>Update Avatar</h1>
        <EditAvatarForm onSubmit={UpdateAvatar}>
          <input placeholder="Insert avatar url.." onChange={onAvatarChange} />
          <UpdateAvatarButton onClick={UpdateAvatar}>
            Update Avatar
          </UpdateAvatarButton>
        </EditAvatarForm>
      </div>
    </EditAvatarWrapper>
  );
};
