import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { PopupWithForm } from "./PopupWithForm";
import { ImagePopup } from "./ImagePopup";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  //эта функция
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <>
      <Header></Header>
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer></Footer>
      <PopupWithForm
        name={"popup-profile"}
        title={"Редактировать профaиль"}
        buttonText={"Сохранить"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
          />
          <span className="popup-profile-input-job-error" />
        </div>
      </PopupWithForm>
      <PopupWithForm
        name={"popup-card"}
        title={"Новое место"}
        buttonText={"Создать"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__input-container">
          <input
            className="popup__input"
            type="text"
            id="popup-card-title-text"
            name="name"
            placeholder="Название"
            minLength={2}
            maxLength={30}
            required=""
          />
          <span className="popup-card-title-text-error" />
        </div>
        <div className="popup__input-container">
          <input
            type="url"
            className="popup__input"
            id="popup-card-link-value"
            name="link"
            placeholder="Ссылка на картинку"
            required=""
          />
          <span className="popup-card-link-value-error" />
        </div>
      </PopupWithForm>
      <PopupWithForm
        name={"popup-avatar"}
        title={"Обновить аватар"}
        buttonText={"Сохранить"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__input-container">
          <input
            className="popup__input"
            type="url"
            id="popup-avatar-input-name"
            name="avatar"
            minLength={2}
            required=""
            placeholder="Ссылка на картинку"
          />
          <span className="popup-avatar-input-name-error" />
        </div>
      </PopupWithForm>
      <PopupWithForm
        name={"popup-delete"}
        title={"Вы уверены?"}
        buttonText={"Да"}
        onClose={closeAllPopups}
      />
      <ImagePopup></ImagePopup>
      <div className="popup popup-profile">
        <form
          className="popup__form"
          name="profileForm"
          id="profileForm"
          noValidate=""
        >
          <h2 className="popup__heading">Редактировать профиль</h2>
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
            />
            <span className="popup-profile-input-job-error" />
          </div>
          <button
            className="popup__submit-button"
            type="submit"
            aria-label="кнопка сохранить"
          >
            Сохранить
          </button>
          <button
            className="popup__close-button"
            type="button"
            aria-label="кнопка закрыть окно"
          />
        </form>
      </div>
      <div className="popup popup-card">
        <form
          className="popup__form"
          name="cardForm"
          id="cardForm"
          noValidate=""
        >
          <h2 className="popup__heading">Новое место</h2>
          <div className="popup__input-container">
            <input
              className="popup__input"
              type="text"
              id="popup-card-title-text"
              name="name"
              placeholder="Название"
              minLength={2}
              maxLength={30}
              required=""
            />
            <span className="popup-card-title-text-error" />
          </div>
          <div className="popup__input-container">
            <input
              type="url"
              className="popup__input"
              id="popup-card-link-value"
              name="link"
              placeholder="Ссылка на картинку"
              required=""
            />
            <span className="popup-card-link-value-error" />
          </div>
          <button
            className="popup__submit-button"
            type="submit"
            aria-label="кнопка сохранить"
          >
            Создать
          </button>
          <button
            className="popup__close-button"
            type="button"
            aria-label="кнопка закрыть окно"
          />
        </form>
      </div>
      <template className="template" id="card_template" />
      <div className="popup popup-image">
        <div className="popup__image-box">
          <img className="popup__image" alt="картинка" />
          <h2 className="popup__image-heading"> </h2>
          <button
            className="popup__close-button popup__close-button_position_image-popup"
            type="button"
            aria-label="кнопка закрыть окно"
          />
        </div>
      </div>
      <div className="popup popup-delete">
        <form
          className="popup__form"
          name="popupDeleteForm"
          id="popupDeleteForm"
          noValidate=""
        >
          <h2 className="popup__heading popup__heading_place_delete">
            Вы уверены?
          </h2>
          <button
            className="popup__submit-button"
            type="submit"
            aria-label="кнопка сохранить"
          >
            Да
          </button>
          <button
            className="popup__close-button"
            type="button"
            aria-label="кнопка закрыть окно"
          />
        </form>
      </div>
      <div className="popup popup-avatar">
        <form
          className="popup__form"
          name="avatarForm"
          id="avatarForm"
          noValidate=""
        >
          <h2 className="popup__heading">Обновить аватар</h2>
          <div className="popup__input-container">
            <input
              className="popup__input"
              type="url"
              id="popup-avatar-input-name"
              name="avatar"
              minLength={2}
              required=""
              placeholder="Ссылка на картинку"
            />
            <span className="popup-avatar-input-name-error" />
          </div>
          <button
            className="popup__submit-button"
            type="submit"
            aria-label="кнопка сохранить"
          >
            Сохранить
          </button>
          <button
            className="popup__close-button"
            type="button"
            aria-label="кнопка закрыть окно"
          />
        </form>
      </div>{" "}
    </>
  );
}

export default App;
