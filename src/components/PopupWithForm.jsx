export function PopupWithForm({ title, name, buttonText, children, isOpen }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <form className="popup__form" name={name} id="profileForm" noValidate="">
        <h2 className="popup__heading">{title}</h2>
        {children}
        <button className="popup__submit-button" type="submit" aria-label="кнопка сохранить">
          {buttonText}
        </button>
        <button className="popup__close-button" type="button" aria-label="кнопка закрыть окно" />
      </form>
    </div>
  );
}
