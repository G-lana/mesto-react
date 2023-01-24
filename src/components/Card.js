import React from 'react';
import '../index.css';

function Card({ card, onCardClick }) {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <article className="place places__place">
      <input
        type="image"
        className="place__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button
        className="place__delete"
        type="button"
        aria-label="Удалить"
      ></button>
      <div className="place__item">
        <h2 className="place__title">{card.name}</h2>
        <div className="place__like-area">
          <button
            className="place__like"
            type="button"
            aria-label="Нравится"
          ></button>
          <span className="place__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
