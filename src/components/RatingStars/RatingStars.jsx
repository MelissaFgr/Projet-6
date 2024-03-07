import React from 'react';
import './RatingStars.scss';
import pinkStar from '../../assets/images/pinkStar.svg';
import greyStar from '../../assets/images/greyStar.svg';

const Rating = ({ value: rating }) => (
  <div className="rating_stars">
    {[...Array(5)].map((_, i) => (
      <img
        key={i}
        src={i < rating ? pinkStar : greyStar}
        alt={`Star ${i + 1}`}
      />
    ))}
  </div>
);

export default Rating;
