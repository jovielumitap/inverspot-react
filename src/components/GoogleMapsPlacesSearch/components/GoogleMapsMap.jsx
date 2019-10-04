import React from 'react';
import PropTypes from 'prop-types';

const GoogleMapsMap = ({ setRef }) => (
  <div
    className="google-maps-map"
    ref={
      node => setRef(node)
    }
  />
);

GoogleMapsMap.propTypes = {
  setRef: PropTypes.func.isRequired,
};

export default GoogleMapsMap;
