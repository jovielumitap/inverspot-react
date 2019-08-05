import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

const LoadComponent = () => (
  <div className="load__component">
    <div className="load__component-wrap">
      <CircularProgress
        className="ml-auto"
        color="primary"
      />
    </div>
  </div>
);

export default LoadComponent;
