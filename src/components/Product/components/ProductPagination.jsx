import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const createPages = (props) => {
  const { getProductsByPage } = props;
  const childs = [];
  for (let i = 1; i <= props.product.totalPages; i += 1) {
    const child = (
      <PaginationItem
        key={`ProductPagination-${i}`}
        active={props.product.actualPage === i}
      >
        <PaginationLink onClick={() => { getProductsByPage(i); }}>
          {i}
        </PaginationLink>
      </PaginationItem>
    );
    childs.push(child);
  }
  return childs;
};

const ProductPagination = props => (
  <Pagination className="product-pagination">
    {
      createPages(props)
    }
  </Pagination>
);

ProductPagination.propTypes = {
  product: PropTypes.shape({
    totalPages: PropTypes.number,
  }).isRequired,
  getProductsByPage: PropTypes.func.isRequired,
};

export default ProductPagination;
