export function ImagePopup() {
  return (
    <div className="popup popup-image">
      <div className="popup__image-box">
        <img className="popup__image" alt="картинка" />
        <h2 className="popup__image-heading"> </h2>
        <button className="popup__close-button popup__close-button_position_image-popup" type="button" aria-label="кнопка закрыть окно" />
      </div>
    </div>
  );
}
