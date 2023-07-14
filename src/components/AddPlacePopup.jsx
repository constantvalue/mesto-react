import { useState } from "react";
import { PopupWithForm } from "./PopupWithForm";

//этот компонент делаем по аналогии с editProfilePopup
export function AddPlacePopup({ onClose, isOpen, onAddPlace }) {
  const [name, setName] = useState();
  const [link, setLink] = useState();

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      name,
      link,
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }
  return (
    <PopupWithForm
      name={"popup-card"}
      title={"Новое место"}
      buttonText={"Создать"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-container">
        <input
          onChange={handleNameChange}
          className="popup__input"
          type="text"
          id="popup-card-title-text"
          name="name"
          placeholder="Название"
          minLength={2}
          maxLength={30}
          required=""
          //решение было найдено здесь https://stackoverflow.com/questions/47012169/a-component-is-changing-an-uncontrolled-input-of-type-text-to-be-controlled-erro
          value={name || ""}
        />
        <span className="popup-card-title-text-error" />
      </div>
      <div className="popup__input-container">
        <input
          onChange={handleLinkChange}
          type="url"
          className="popup__input"
          id="popup-card-link-value"
          name="link"
          placeholder="Ссылка на картинку"
          required=""
          //решение было найдено здесь https://stackoverflow.com/questions/47012169/a-component-is-changing-an-uncontrolled-input-of-type-text-to-be-controlled-erro
          value={link || ""}
        />
        <span className="popup-card-link-value-error" />
      </div>
    </PopupWithForm>
  );
}
