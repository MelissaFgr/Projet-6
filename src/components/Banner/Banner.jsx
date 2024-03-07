import React from 'react';
import './Banner.scss';

const Banner = ({ title, bannerBackground }) => (
  <div className='banner'>
    <p className='banner_title'>{title}</p>
    <div className='banner_image_div'></div>
    <img src={bannerBackground} alt="Image de la banniere" className='banner_image' />
  </div>
);

export default Banner;
