import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalHeader,
  ModalBody,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux';
import { makeSell, changeSalesOrderStatus } from '../../../redux/actions/sellActions';
import { changeTab } from '../../../redux/actions/tabActions';
import { toggleModal } from '../../../redux/actions/modalActions';

import { cartProps } from '../../../propTypes/cartProps';
import discountProps from '../../../propTypes/discountProps';
import sellProps from '../../../propTypes/sellProps';
import tabsProps from '../../../propTypes/tabsProps';
import modalsProps from '../../../propTypes/modalsProps';
import loadsProps from '../../../propTypes/loadsProps';
import authUserProps from '../../../propTypes/authUserProps';

import SellCash from './SellCash';
import SellCard from './SellCard';
import LoadComponent from '../../Load/LoadComponent';

class SellModal extends PureComponent {
  static propTypes = {
    cart: cartProps.isRequired,
    discount: discountProps.isRequired,
    sell: sellProps.isRequired,
    tabs: tabsProps.isRequired,
    modals: modalsProps.isRequired,
    loads: loadsProps.isRequired,
    authUser: authUserProps.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  getTotal = () => {
    const { cart, discount } = this.props;
    const totalCart = cart.total;
    const totalDiscount = discount.total;
    let result = totalCart - totalDiscount;
    result = result.toFixed(2);
    result = Number.parseFloat(result);
    return result;
  }

  defaultDispatch = () => {
    const { authUser, dispatch } = this.props;
    const { sostatus } = authUser.user.config;
    dispatch(changeTab('sell', 'cash'));
    dispatch(changeSalesOrderStatus(sostatus));
  }

  _changeSalesOrderStatus = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const { dispatch } = this.props;
    dispatch(changeSalesOrderStatus(value));
  }

  _toggleSellModal = () => {
    const { dispatch } = this.props;
    dispatch(toggleModal('sell'));
  }

  _changeTabToCash = () => {
    const { dispatch } = this.props;
    dispatch(changeTab('sell', 'cash'));
  }

  _changeTabToCard = () => {
    const { dispatch } = this.props;
    dispatch(changeTab('sell', 'card'));
  }

  toPay = () => {
    const total = this.getTotal();
    const { sell } = this.props;
    const { cash, card } = sell;
    const newTotal = total - (card + cash);
    return (newTotal < 0 || Number.isNaN(newTotal)) ? 0 : newTotal.toFixed(2);
  }

  _makeSell = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(makeSell());
  }

  render() {
    const {
      sell,
      authUser,
      modals,
      tabs,
      loads,
    } = this.props;
    return (
      <Modal isOpen={modals.sellModalIsOpen} toggle={this._toggleSellModal} onOpened={this.defaultDispatch} className="sell-modal">
        <ModalHeader toggle={this._toggleSellModal}>Cobrar</ModalHeader>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ 'text-center': true, active: tabs.sellTab === 'cash' })}
              onClick={this._changeTabToCash}
            >
              <FontAwesomeIcon icon="coins" />
              <>Efectivo</>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ 'text-center': true, active: tabs.sellTab === 'card' })}
              onClick={this._changeTabToCard}
            >
              <FontAwesomeIcon icon="credit-card" />
              <>Tarjeta</>
            </NavLink>
          </NavItem>
        </Nav>
        <ModalBody>
          <TabContent activeTab={tabs.sellTab}>
            <TabPane tabId="cash">
              <SellCash />
            </TabPane>
            <TabPane tabId="card">
              <SellCard />
            </TabPane>
          </TabContent>
          <div className="sell-modal__actions">
            <div className="totPedidoxP">
              <span>Total:</span>
              <>{`$${this.getTotal()}`}</>
            </div>
            <div className="totPedidoxP">
              <span>Por Pagar:</span>
              <>{`$${this.toPay()}`}</>
            </div>
            <div className="totPedidoCambio">
              <span>Cambio: </span>
              {
                sell.cash >= this.getTotal()
                  ? `$${(sell.cash - this.getTotal()).toFixed(2)}`
                  : '$0'
              }
            </div>
            <select
              className="form-control selcls w-100 edopedido"
              onChange={this._changeSalesOrderStatus}
              defaultValue={authUser.user.config.sostatus}
            >
              {
                authUser.user.sostatus.map(status => (
                  <option
                    key={`${this.constructor.name}-${status.id}`}
                    value={status.id}
                  >
                    {status.value}
                  </option>
                ))
              }
            </select>
            <Button color="primary" type="button" className="w-100" onClick={this._makeSell}>Cobrar</Button>
          </div>
          {
            loads.sellIsLoading
              ? <LoadComponent />
              : ''
          }
        </ModalBody>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  discount: state.discount,
  sell: state.sell,
  customer: state.customer,
  tabs: state.tabs,
  modals: state.modals,
  loads: state.loads,
  authUser: state.authUser,
});

export default connect(mapStateToProps)(SellModal);
