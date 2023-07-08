export function PopupWithForm({ title, name, buttonText }) {
  return (
    <div className={`popup popup_type_${name}`}>
      <form className="popup__form" name="profileForm" id="profileForm" noValidate="">
        <h2 className="popup__heading">{title}</h2>
        <button className="popup__submit-button" type="submit" aria-label="кнопка сохранить">
          {buttonText}
        </button>
        <button className="popup__close-button" type="button" aria-label="кнопка закрыть окно" />
      </form>
    </div>
  );
}
