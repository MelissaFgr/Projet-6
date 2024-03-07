import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './error404.scss';

const ErrorPage = () => {
  useEffect(() => {
    document.title = 'Kasa - Error 404';
  }, []);

  return (
    <div className="errorPage">
      <h1 className='errorPage_title'>404</h1>
      <p className='errorPage_infos'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className='errorPage_redirection'>Retour à la page d'accueil</Link>
    </div>
  );
};

export default ErrorPage;
