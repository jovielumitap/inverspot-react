import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import modalsProps from '../../../propTypes/modalsProps';
import customerProps from '../../../propTypes/customerProps';
import loadsProps from '../../../propTypes/loadsProps';

import LoadComponent from '../../Load/LoadComponent';
import SearchBar from '../../SearchBar';

const SelectCustomer = ({
  customer,
  loads,
  modals,
  dispatchFilterCustomers,
  dispatchSelectCustomer,
  dispatchToggleModal,
  dispatchFetchAllCustomers,
}) => {
  const toggleModal = () => { dispatchToggleModal('customerSelect'); };
  return (
    <Modal
      isOpen={modals.customerSelectModalIsOpen}
      toggle={toggleModal}
      className="customer__modal"
      onOpened={() => { dispatchFetchAllCustomers(); }}
    >
      <ModalHeader toggle={toggleModal}>Clientes</ModalHeader>
      <ModalBody>
        <SearchBar handleOnKeyPress={(word) => { dispatchFilterCustomers(word); }} />
        <List>
          {
            customer.customers && customer.customers.map(_customer => (
              <ListItem
                button
                key={`SelectCustomer-${_customer.crmid}`}
                onClick={() => { dispatchSelectCustomer(_customer); }}
              >
                <ListItemAvatar>
                  <Avatar>
                    { _customer.accountname.charAt(0) }
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={_customer.accountname} secondary={_customer.siccode} />
              </ListItem>
            ))
          }
        </List>
        { loads.selectCustomerIsLoading && <LoadComponent /> }
      </ModalBody>
    </Modal>
  );
};

SelectCustomer.propTypes = {
  customer: customerProps.isRequired,
  modals: modalsProps.isRequired,
  loads: loadsProps.isRequired,
  dispatchToggleModal: PropTypes.func.isRequired,
  dispatchSelectCustomer: PropTypes.func.isRequired,
  dispatchFilterCustomers: PropTypes.func.isRequired,
  dispatchFetchAllCustomers: PropTypes.func.isRequired,
};

export default SelectCustomer;
