import { useEffect, useState } from "react";
import { api } from "../utils/Api";
import { Card } from "./Card";

export function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  //используем хук для запроса данных.
  useEffect(() => {
    //этот код выполнится при монтировании компонента.
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then((res) => {
        const [userData, cardData] = res;
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardData);
      })
      .catch((error) => {
        console.log(error);
      });
    //передаем пустой массив зависимостей
    //без этого будут бесконечные запросы.
  }, []);

  // пробросили хэндлер клика по карточке через пропсы компонентов  Main -> Card
  const initialCards = cards.map((items) => {
    // Для каждого элемента (для каждой карточки) запишем ключ. Значением ключа будет являться уникальный id каждой карточки.
    return <Card onCardClick={onCardClick} key={items._id} card={items}></Card>;
  });

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            {/* Линк на аватар вставляется с помощью атрибута src */}
            {/* я не стал использовать код предложенный в брифе к проектной работе, так как он слишком громоздкий и ломает логику в моем проекте */}
            {/* в брифе предлагали использовать такой код: style={{ backgroundImage: `url(${userAvatar})` }} */}
            <img className="profile__avatar" src={userAvatar} alt="Аватар" />
            <button
              className="profile__avatar-button"
              type="button"
              onClick={onEditAvatar}
            />
          </div>
          <h2 className="profile__title">{userName}</h2>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Кнопка редактирования"
            onClick={onEditProfile}
          />
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="кнопка добавить"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements" aria-label="карточки">
        {initialCards}
      </section>
    </main>
  );
}
