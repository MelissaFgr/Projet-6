import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ id, title, cover }) => (
  <Link to={`/fichelogement/${id}`} className='card'>
    <h3 className='card_title'>{title}</h3>
    <img className='card_image' src={cover} alt={title} />
  </Link>
);

export default Card;