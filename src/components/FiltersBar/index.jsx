import React from 'react';
import PropTypes from 'prop-types';

import SimpleFilter from './components/SimpleFilter';

const FiltersBar = (
  {
    posTypeTab,
    order,
    product,
    dispatchMultipleFiltersOrder,
    dispatchMultipleFiltersProduct,
    dispatchRemoveMultipleFiltersOrder,
    dispatchRemoveMultipleFiltersProduct,
  }) => {

  return (
    <div
      style={{ height: '89px' }}
      className="filtersBar w-auto px-4 py-2 d-flex flex-row justify-content-end align-items-center"
    >
      {posTypeTab === 'Vender' ? (
        <>
          {product.categories.map(cat => (
            <SimpleFilter
              key={`key-${cat.title}`}
              title={cat.title}
              word={cat}
              cats={cat.cats}
              dispatchMultipleFilters={dispatchMultipleFiltersProduct}
              dispatchRemoveMultipleFilters={dispatchRemoveMultipleFiltersProduct}
            />
          ))}
        </>
      ) : (
        <>
          {order.categories.map(cat => (
            <SimpleFilter
              key={`key-${cat.title}`}
              title={cat.title}
              word={cat}
              cats={cat.cats}
              dispatchMultipleFilters={dispatchMultipleFiltersOrder}
              dispatchRemoveMultipleFilters={dispatchRemoveMultipleFiltersOrder}
            />
          ))}
        </>
      )}
    </div>
  );
};

FiltersBar.propTypes = {
  posTypeTab: PropTypes.string.isRequired,
  order: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  dispatchMultipleFiltersOrder: PropTypes.func.isRequired,
  dispatchMultipleFiltersProduct: PropTypes.func.isRequired,
  dispatchRemoveMultipleFiltersOrder: PropTypes.func.isRequired,
  dispatchRemoveMultipleFiltersProduct: PropTypes.func.isRequired,
};

export default FiltersBar;
