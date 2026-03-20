import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <span className="footer__logo">KK<span className="footer__dot">.</span></span>
          <p className="footer__copy">
            Designed & built by <strong>Khushwant Khatri</strong>
          </p>
        </div>
        <div className="footer__center">
          <p className="footer__built">
            Built with{' '}
            <span className="footer__heart">♥</span>
            {' '}using React.js
          </p>
        </div>
        <div className="footer__right">
          <a href="mailto:khatri.khush1998@gmail.com" className="footer__link">
            khatri.khush1998@gmail.com
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__line" />
      </div>
    </footer>
  );
}

export default Footer;
