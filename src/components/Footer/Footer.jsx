import React from 'react';
import './Footer.scss';

import logo from '../../assets/images/footer-logo.svg';

const Footer = () => (
  <footer className='footer'>
    <img src={logo} alt="logo du footer" className='footer_logo' />
    <p className='footer_content'>© 2020 Kasa. All rights reserved</p>
  </footer>
);

export default Footer;
