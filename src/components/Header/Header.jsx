import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './Header.scss';

const Header = () => (
    <header className='header'>
        <Link to="/"><img className='header_logo' src={logo} alt="logo" /></Link>
        <nav className='header_nav'>
            <Link to="/">Accueil</Link>
            <Link to="/apropos">A Propos</Link>
        </nav>
    </header>
);

export default Header;
