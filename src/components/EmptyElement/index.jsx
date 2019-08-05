import React from 'react';

const logo = `${process.env.PUBLIC_URL}/img/logo.svg`;
const EmptyElement = () => (
  <div className="response-grid w-100">
    <div
      style={{ padding: '8em' }}
      className="isEmpty w-100 h-100 d-flex flex-column justify-content-center align-items-center"
    >
      <img height="75px" src={logo} alt="no-orders" />
      <h4 className="isEmpty__txt">
        {'Una disculpa, no se encontraron elementos o la lista se encuentra vacía. ☹'}
      </h4>
    </div>
  </div>
);

export default EmptyElement;
