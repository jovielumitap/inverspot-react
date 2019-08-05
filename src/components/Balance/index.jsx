import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Fab,
  List,
  Button,
  Divider,
  Collapse,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import {
  ExpandLess,
  ExpandMore,
  Cached,
} from '@material-ui/icons';

import BalanceCC from './components/BalanceCC';
import BalanceACC from './components/BalanceACC';

import { toolsHelper } from '../../helpers';

const Balance = ({
  balance,
  balanceIsLoading,

  dispatchFetchBalance,

  dispatchGetCC,
  dialogCCIsOpen,
  dialogCCIsLoading,
  closeDialogCC,
  dispatchSaveCC,

  dispatchGetACC,
  dialogACCIsOpen,
  dialogACCIsLoading,
  closeDialogACC,
  dispatchSaveACC,
}) => {
  const [array, setArray] = React.useState([]);

  useEffect(() => {
    const { datos } = balance;
    setArray(datos);
  }, [balance]);

  const handleClick = (tipo) => {
    const array_ = [...array];
    array_.map((x) => {
      if (x.label === tipo) {
        const y = x;
        y.open = !x.open;
        return y;
      }
      return x;
    });
    setArray(array_);
  };

  return (
    <>
      {
        (array.length > 0 && !balanceIsLoading)
          ? (
            <div className="balance w-100 h-auto os-y d-flex flex-column">
              <div className="w-100 d-flex justify-content-between">
                <Button
                  color="primary"
                  className="w-100"
                  onClick={() => {
                    dispatchGetCC();
                  }}
                >
                  {'Solicitar CC'}
                </Button>
                <Button
                  color="secondary"
                  className="w-100"
                  onClick={() => {
                    dispatchGetACC();
                  }}
                >
                  {'Recibir CC'}
                </Button>
              </div>
              <Divider />
              <List dense>
                {
                  array.map(curr => (
                    <div key={`key_${curr.label}`} className="w-100 h-auto">
                      <ListItem
                        button
                        onClick={() => {
                          handleClick(curr.label);
                        }}
                      >
                        <ListItemText primary={curr.label} />
                        <ListItemText
                          primary={`$ ${toolsHelper.formatMoney(curr.TOTAL)}`}
                          className="balance_total"
                        />
                        {curr.open ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse in={curr.open} timeout="auto" unmountOnExit>
                        <List dense disablePadding>
                          {
                            curr.metodos.map(account => (
                              <ListItem key={`key_${account.label}`}>
                                <ListItemText secondary={account.label} />
                                <ListItemText
                                  key={`key_${account.label} value`}
                                  edge="end"
                                  style={{ textAlign: 'right' }}
                                  primary={`$ ${toolsHelper.formatMoney(account.value)}`}
                                />
                              </ListItem>
                            ))
                          }
                        </List>
                        { curr.length > 1 && <Divider /> }
                      </Collapse>
                    </div>
                  ))
                }
              </List>
              <Divider />
            </div>
          )
          : !balanceIsLoading && (
            <>
              <div className="w-100 d-flex justify-content-center">
                {'Sin datos de Balance'}
              </div>
              <div className="w-100 d-flex justify-content-center">
                <Fab
                  onClick={() => {
                    dispatchFetchBalance();
                  }}
                >
                  <Cached />
                </Fab>
              </div>
            </>
          )
      }
      <BalanceCC
        isOpen={dialogCCIsOpen}
        onClose={closeDialogCC}
        isLoading={dialogCCIsLoading}
        onSave={(data) => {
          dispatchSaveCC(data);
        }}
        corteDeCaja={balance.cc}
        reloadCC={(date) => {
          dispatchGetCC(date);
        }}
      />
      <BalanceACC
        isOpen={dialogACCIsOpen}
        onClose={closeDialogACC}
        isLoading={dialogACCIsLoading}
        onSave={(data) => {
          dispatchSaveACC(data);
        }}
        cortesDeCaja={balance.acc}
        reloadACC={() => {
          dispatchGetACC();
        }}
      />
    </>
  );
};

Balance.propTypes = {
  balance: PropTypes.object.isRequired,
  balanceIsLoading: PropTypes.bool.isRequired,

  dispatchFetchBalance: PropTypes.func.isRequired,

  dialogCCIsOpen: PropTypes.bool.isRequired,
  dialogCCIsLoading: PropTypes.bool.isRequired,
  dispatchGetCC: PropTypes.func.isRequired,
  closeDialogCC: PropTypes.func.isRequired,
  dispatchSaveCC: PropTypes.func.isRequired,

  dialogACCIsOpen: PropTypes.bool.isRequired,
  dialogACCIsLoading: PropTypes.bool.isRequired,
  dispatchGetACC: PropTypes.func.isRequired,
  closeDialogACC: PropTypes.func.isRequired,
  dispatchSaveACC: PropTypes.func.isRequired,
};

export default Balance;
