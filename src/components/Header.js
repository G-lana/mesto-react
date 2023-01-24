import React from 'react';
import logo from '../images/logo.svg';
import '../index.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="header page__header">
        <img className="header__logo" src={logo} alt="Логотип" />
      </header>
    );
  }
}
export default Header;
