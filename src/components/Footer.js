import React from 'react';
import '../index.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className="footer page__footer">
        <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
      </footer>
    );
  }
}
export default Footer;
