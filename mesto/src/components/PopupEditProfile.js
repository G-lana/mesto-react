import PopupWithForm from './PopupWithForm';
import React from 'react';

function PopupEditProfile({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name={'editProfile'}
      title={'Редактировать профиль'}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={'Сохранить'}
    >
      <input
        type="text"
        className="popup__input popup__input_type_name"
        placeholder={'Имя'}
        name="name"
        id="name-input"
        required
        minLength="2"
        maxLength="40"
      />
      <span className="popup__input-error name-error"></span>
      <input
        type="text"
        className="popup__input popup__input_type_job"
        placeholder={'О себе'}
        name="job"
        id="job-input"
        required
        minLength="2"
        maxLength="200"
      />
      <span className="popup__input-error job-error"></span>
    </PopupWithForm>
  );
}

export default PopupEditProfile;
