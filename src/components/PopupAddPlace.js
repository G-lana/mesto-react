import PopupWithForm from './PopupWithForm';
import React from 'react';

function PopupAddPlace({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="addPlace"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Создать"
    >
      <input
        type="text"
        className="popup__input popup__input_type_title"
        placeholder="Название"
        name="title"
        id="title-input"
        required
        minLength="2"
        maxLength="30"
      />
      <span className="popup__input-error title-error"></span>
      <input
        type="url"
        className="popup__input popup__input_type_link"
        placeholder="Ссылка на картинку"
        name="image"
        id="image"
        required
      />
      <span className="popup__input-error image-error"></span>
    </PopupWithForm>
  );
}

export default PopupAddPlace;
