import React from 'react';
import PropTypes from 'prop-types';

const GoogleMapsSearchBox = ({ id, setRef, placeholder }) => (
  <div>
    <input
      id="id"
      type="text"
      name="searchBox"
      className="form-control form-control"
      ref={
        node => setRef(node)
      }
      required
      placeholder={placeholder}
    />
  </div>
);

GoogleMapsSearchBox.propTypes = {
  id: PropTypes.string.isRequired,
  setRef: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default GoogleMapsSearchBox;
