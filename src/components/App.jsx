import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { PopupWithForm } from "./PopupWithForm";
import { ImagePopup } from "./ImagePopup";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  // const userContext = useContext(CurrentUserContext);

  //используем хук для запроса данных.
  useEffect(() => {
    //этот код выполнится при монтировании компонента.
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then((res) => {
        const [userData, cardData] = res;
        setCurrentUser(userData);
      })
      .catch((error) => {
        console.log(error);
      });
    //передаем пустой массив зависимостей
    //без этого будут бесконечные запросы.
  }, []);

  //используем хук для запроса данных.
  useEffect(() => {
    //этот код выполнится при монтировании компонента.
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then((res) => {
        const [userData, cardData] = res;

        cardData.forEach((item) => {
          item.myId = userData._id;
        });
        setCards(cardData);
      })
      .catch((error) => {
        console.log(error);
      });
    //передаем пустой массив зависимостей
    //без этого будут бесконечные запросы.
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  //эта функция будет вызываться на каждом компоненте с попапом. Служит для закрытия по клику на крестик.
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c === card ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.cardDelete(card).then(() => {
      setCards((state) => state.filter((c) => c !== card));
      console.log(card);
    });
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header></Header>
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          // пробросили хэндлер клика по карточке через пропсы компонентов  Main -> Card
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          cards={cards}
          onCardDelete={handleCardDelete}
        />
        <Footer></Footer>
        <PopupWithForm
          name={"popup-profile"}
          title={"Редактировать профиль"}
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

        <ImagePopup onClose={closeAllPopups} card={selectedCard}></ImagePopup>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
