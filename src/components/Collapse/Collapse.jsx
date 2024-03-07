import React, { useState } from 'react';
import ArrowUp from '../../assets/images/ArrowUp.svg';
import './Collapse.scss';

const Collapse = ({ title, content }) => {
  const [visible, setVisible] = useState(false);

  const collapseToggle = () => {
    setVisible(prevState => !prevState);
  };

  return (
    <div className={`collapse ${visible ? 'visible' : ''}`}>
      <div className='collapse_title' onClick={collapseToggle}>
        {title}
        <img className="collapse_image" src={ArrowUp} alt='Fleche du collapse' />
      </div>
      {visible && <div className="collapse_content">{content}</div>}
    </div>
  );
};

export default Collapse;