import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GoogleMapsSearchBox = ({ setRef }) => (
  <div className="google-maps-search-box">
    <input
      type="text"
      name="searchBox"
      ref={
        node => setRef(node)
      }
      placeholder="Buscar Dirección..."
    />
    <FontAwesomeIcon icon="search" />
  </div>
);

GoogleMapsSearchBox.propTypes = {
  setRef: PropTypes.func.isRequired,
};

export default GoogleMapsSearchBox;
