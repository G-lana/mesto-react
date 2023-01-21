import PopupWithForm from './PopupWithForm';
import React from 'react';

function PopupEditAvatar({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name={'editAvatar'}
      title={'Обновить аватар'}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={'Сохранить'}
    >
      <input
        type="url"
        className="popup__input popup__input_type_avatar-link"
        placeholder={'Ссылка на новый аватар'}
        name="link"
        id="link-input"
        required
      />
      <span className="popup__input-error link-error"></span>
    </PopupWithForm>
  );
}

export default PopupEditAvatar;
