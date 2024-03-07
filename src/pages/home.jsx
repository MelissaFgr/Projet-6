import React, { useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';
import bannerImage from '../assets/images/home_banner.svg';
import logementsData from '../assets/datas/logements.json';
import '../styles/style.scss';
import './home.scss';

const Home = () => {
  useEffect(() => {
    document.title = 'Kasa - Accueil';
  }, []);

  return (
    <div>
      <Banner title='Chez vous, partout et ailleurs' bannerBackground={bannerImage} />
      <div className='gallery_logement'>
        {logementsData.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </div>
    </div>
  );
};

export default Home;