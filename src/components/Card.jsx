export function Card({ card, onCardClick }) {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <div className="element" id="card">
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button
        className="element__trash-button"
        type="button"
        aria-label="кнопка мусорка"
      />
      <div className="element__whitebox">
        <h2 className="element__title" name="name" id="title">
          {card.name}
        </h2>
        <div className="element__like-button-container">
          <button
            className="element__like-button"
            type="button"
            aria-label="кнопка лайк"
          />
          <span className="element__like-button-counter">
            {/* в брифе не сказано сделать, но я все же подставил длину масива лайков в качестве значения каунтера */}
            {card.likes.length}
          </span>
        </div>
      </div>
    </div>
  );
}
