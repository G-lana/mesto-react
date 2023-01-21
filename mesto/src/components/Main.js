import React from 'react';
import '../index.css';
import { api } from '../utils/Api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState({});
  const [userDescription, setUserDescription] = React.useState({});
  const [userAvatar, setUserAvatar] = React.useState({});

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([user, card]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(card);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="content page__content">
      <section className="profile content__profile">
        <div className="profile__card">
          <div className="profile__edit">
            <img
              className="profile__avatar"
              src={userAvatar}
              alt="Фото профиля"
            />
            <button
              onClick={onEditAvatar}
              title="Изменить аватар"
              className="profile__avatar-button"
            ></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button
              onClick={onEditProfile}
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать"
              data-id="edit-profile"
            ></button>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__add-button"
          type="button"
          aria-label="Добавить"
          data-id="addCard"
        ></button>
      </section>
      <section className="places content__places">
        {cards.map((card) => (
          <Card card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </section>
  );
}
export default Main;
