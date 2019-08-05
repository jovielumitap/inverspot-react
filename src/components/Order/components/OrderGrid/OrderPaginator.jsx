import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import { connect } from 'react-redux';
import { getOrdersByPage } from '../../../../redux/actions/orderActions';

import orderProps from '../../../../propTypes/orderProps';

const createPages = (props) => {
  const childs = [];
  for (let i = 1; i <= props.order.totalPages; i += 1) {
    const child = (
      <PaginationItem
        key={`OrderPagination-${i}`}
        active={props.order.actualPage === i}
      >
        <PaginationLink onClick={() => props.dispatch(getOrdersByPage(i))}>
          {i}
        </PaginationLink>
      </PaginationItem>
    );
    childs.push(child);
  }
  return childs;
};

const OrderPagination = props => (
  <Pagination className="product-pagination">{createPages(props)}</Pagination>
);

OrderPagination.propTypes = {
  order: orderProps.isRequired,
};

const mapStateToProps = state => ({
  order: state.order,
});

export default connect(mapStateToProps)(OrderPagination);
