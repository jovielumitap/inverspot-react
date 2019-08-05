import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import DeleteIcon from '@material-ui/icons/Delete';
/* import MoreVertIcon from '@material-ui/icons/MoreVert'; */

import authUserProps from '../../propTypes/authUserProps';
import customerProps from '../../propTypes/customerProps';

import SelectCustomer from './components/SelectCustomer';
import CreateCustomer from './components/CreateCustomer';

const Customer = ({
  tabs,
  customer,
  authUser,
  modals,
  loads,
  dispatchOpenModal,
  dispatchToggleModal,
  dispatchCreateCustomer,
  dispatchSelectCustomer,
  dispatchRemoveCustomer,
  dispatchFilterCustomers,
  dispatchFetchAllCustomers,
  dispatchSetDefaultCustomer,
}) => {
  useEffect(() => {
    const defaultCustomer = authUser.user.account_default;
    dispatchSetDefaultCustomer(defaultCustomer);

    const { selectedCustomer } = customer;
    if (selectedCustomer.accountname === undefined) {
      dispatchRemoveCustomer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { accountname, siccode, email1 } = customer.selectedCustomer;
  const { posTypeTab } = tabs;
  return (
    <Paper>
      <List className="customer__list">
        <ListItem
          button={posTypeTab === 'Vender'}
          className={
            classnames(
              'customer__list-item',
              { 'customer__is-default': customer.isDefault },
            )
          }
          onClick={posTypeTab === 'Vender' ? () => dispatchOpenModal('customerSelect') : null}
        >
          <ListItemText
            primary={accountname}
            secondary={`RFC: ${siccode} | E-mail: ${email1}`}
          />
          <ListItemSecondaryAction>
            <IconButton
              className="mr-4"
              edge="center"
              aria-label="Add"
              onClick={() => dispatchOpenModal('customerCreate')}
            >
              <PersonAddIcon />
            </IconButton>
            {
              (!customer.isDefault && posTypeTab === 'Vender') && (
                <IconButton
                  edge="center"
                  aria-label="Delete"
                  onClick={() => dispatchRemoveCustomer()}
                >
                  <DeleteIcon />
                </IconButton>
              )
            }
            {/* <IconButton edge="end" aria-label="More">
              <MoreVertIcon />
            </IconButton> */}
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <SelectCustomer
        loads={loads}
        modals={modals}
        customer={customer}
        dispatchToggleModal={dispatchToggleModal}
        dispatchSelectCustomer={dispatchSelectCustomer}
        dispatchFilterCustomers={dispatchFilterCustomers}
        dispatchFetchAllCustomers={dispatchFetchAllCustomers}
      />
      <CreateCustomer
        loads={loads}
        modals={modals}
        dispatchCreateCustomer={dispatchCreateCustomer}
        dispatchToggleModal={dispatchToggleModal}
      />
    </Paper>
  );
};

Customer.propTypes = {
  tabs: PropTypes.object.isRequired,
  customer: customerProps.isRequired,
  authUser: authUserProps.isRequired,
  modals: PropTypes.object.isRequired,
  loads: PropTypes.object.isRequired,
  dispatchOpenModal: PropTypes.func.isRequired,
  dispatchToggleModal: PropTypes.func.isRequired,
  dispatchCreateCustomer: PropTypes.func.isRequired,
  dispatchSelectCustomer: PropTypes.func.isRequired,
  dispatchRemoveCustomer: PropTypes.func.isRequired,
  dispatchFilterCustomers: PropTypes.func.isRequired,
  dispatchFetchAllCustomers: PropTypes.func.isRequired,
  dispatchSetDefaultCustomer: PropTypes.func.isRequired,
};

export default Customer;
