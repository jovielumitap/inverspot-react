import React from 'react';
import { Link } from 'react-router-dom';

const buttonStyle = {
  border: 'none',
  borderRadius: '0px',
  width: '100%',
  backgroundColor: '#929292',
};

const Image404 = `${process.env.PUBLIC_URL}/img/404.png`;

const NotFound404 = () => (
  <div className="not-found">
    <div className="not-found__content">
      <img className="not-found__image" src={Image404} alt="404" />
      <h3 className="not-found__info">Proximamente</h3>
      <Link className="btn btn-primary" to="/" style={buttonStyle}>Regresar :D</Link>
    </div>
  </div>
);

export default NotFound404;
