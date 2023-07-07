export function Main() {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src="#" alt="Аватар" />
            <button className="profile__avatar-button" type="button" />
          </div>
          <h2 className="profile__title"> </h2>
          <button className="profile__edit-button" type="button" aria-label="Кнопка редактирования" />
          <p className="profile__subtitle" />
        </div>
        <button className="profile__add-button" type="button" aria-label="кнопка добавить" />
      </section>
      <section className="elements" aria-label="карточки">
        {/* тут у нас была разметка с карточками. Теперь мы получаем карточки
из массива initialCards и создаем собственные с помощью функции createCard */}
      </section>
    </main>
  );
}
