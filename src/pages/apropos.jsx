import React, { useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import Collapse from '../components/Collapse/Collapse';
import aproposData from '../assets/datas/aproposData.json';
import bannerImage from '../assets/images/AproposBanner.svg';
import './apropos.scss';

const Apropos = () => {
  useEffect(() => {
    document.title = 'Kasa - A propos';
  }, []);

  return (
    <div>
      <Banner title='' bannerBackground={bannerImage} />
      <div className='container_collapse'>
        {aproposData.map(({ index, title, content }) => (
          <Collapse key={`${index}-${title}`} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Apropos;
