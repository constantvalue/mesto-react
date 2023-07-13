import { Card } from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext, useEffect, useState } from "react";
import { api } from "../utils/Api";

export function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const userContext = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

  //используем хук для запроса данных.
  useEffect(() => {
    //этот код выполнится при монтировании компонента.
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then((res) => {
        const [userData, cardData] = res;


        cardData.forEach ((item) => {
          item.myId = userData._id;
        })
        setCards(cardData);
      })
      .catch((error) => {
        console.log(error);
      });
    //передаем пустой массив зависимостей
    //без этого будут бесконечные запросы.
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            {/* Линк на аватар вставляется с помощью атрибута src */}
            {/* я не стал использовать код предложенный в брифе к проектной работе, так как он слишком громоздкий и ломает логику в моем проекте */}
            {/* в брифе предлагали использовать такой код: style={{ backgroundImage: `url(${userAvatar})` }} */}
            <img
              className="profile__avatar"
              src={userContext.avatar}
              alt="Аватар"
            />
            <button
              className="profile__avatar-button"
              type="button"
              onClick={onEditAvatar}
            />
          </div>
          <h2 className="profile__title">{userContext.name}</h2>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Кнопка редактирования"
            onClick={onEditProfile}
          />
          <p className="profile__subtitle">{userContext.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="кнопка добавить"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements" aria-label="карточки">
        {cards.map((items) => {
          return (
            <Card onCardClick={onCardClick} key={items._id} card={items}></Card>
          );
        })}
      </section>
    </main>
  );
}
