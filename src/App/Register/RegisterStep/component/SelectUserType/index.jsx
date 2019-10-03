import React from 'react';
import PropTypes from 'prop-types';

const SelectUserType = ({
  title,
  onClick,
}) => (
  <div>
    <div className="w-100 text-center register-title mt-4 mb-2 select_user_type">
      {title}
    </div>
    <div className="w-100 select_user_type_list">
      <button
        onClick={() => {
          onClick(0);
        }}
        type="button"
      >
        Nacional Física
      </button>
      <button
        onClick={() => {
          onClick(1);
        }}
        type="button"
      >
        Extranjera Fisica
      </button>
      <button
        onClick={() => {
          onClick(2);
        }}
        type="button"
      >
        Nacional Moral
      </button>
      <button
        onClick={() => {
          onClick(3);
        }}
        type="button"
      >
        Extranjera Moral
      </button>
    </div>
  </div>
);

SelectUserType.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

SelectUserType.defaultProps = {
  title: 'Tipo de persona',
};

export default SelectUserType;
