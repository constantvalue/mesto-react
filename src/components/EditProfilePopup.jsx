import { PopupWithForm } from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext, useEffect } from "react";

export function ImagePopup({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const userContext = useContext(CurrentUserContext);

  useEffect(() => {
    setName(userContext.name);
    setDescription(userContext.about);
  }, [userContext]);

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }
  return (
    <PopupWithForm
      name={"popup-profile"}
      title={"Редактировать профиль"}
      buttonText={"Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="popup__input-container">
        <input
          className="popup__input"
          type="text"
          id="popup-profile-input-name"
          name="name"
          minLength={2}
          maxLength={40}
          required=""
          placeholder="Имя"
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup-profile-input-name-error" />
      </div>
      <div className="popup__input-container">
        <input
          className="popup__input"
          type="text"
          id="popup-profile-input-job"
          name="job"
          minLength={2}
          maxLength={200}
          required=""
          placeholder="Должность"
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup-profile-input-job-error" />
      </div>
    </PopupWithForm>
  );
}
