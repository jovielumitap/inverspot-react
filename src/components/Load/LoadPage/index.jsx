import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

const LoadPage = ({ children }) => (
  <div className="load loaded">
    <div className="load__icon-wrap">
      {
        children === ''
          ? (
            <CircularProgress
              className="ml-auto"
              color="primary"
            />
          )
          : (
            <div className="load__icon">
              { children }
            </div>
          )
      }
    </div>
  </div>
);

LoadPage.propTypes = {
  children: PropTypes.node,
};

LoadPage.defaultProps = {
  children: '',
};

export default LoadPage;
