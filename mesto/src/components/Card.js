import React from 'react';
import '../index.css';

function Card({ card, onCardClick }) {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <article class="place places__place">
      <input
        type="image"
        class="place__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button class="place__delete" type="button" aria-label="Удалить"></button>
      <div class="place__item">
        <h2 class="place__title">{card.name}</h2>
        <div class="place__like-area">
          <button
            class="place__like"
            type="button"
            aria-label="Нравится"
          ></button>
          <span class="place__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
