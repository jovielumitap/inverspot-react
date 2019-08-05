/* eslint-disable object-curly-newline */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ProductOption.scss';

import productOptionProps from '../../../propTypes/productOptionProps';
import authUserProps from '../../../propTypes/authUserProps';

import FullDialog from '../../FullDialog';

import { haveStock } from '../../../helpers/product';
import ProductOptionMobile from './ProductOptionMobile/index';

class ProductOptions extends PureComponent {
  static propTypes = {
    options: productOptionProps.isRequired,
    authUser: authUserProps.isRequired,
    modals: PropTypes.object.isRequired,
    loads: PropTypes.object.isRequired,
    toggleModal: PropTypes.func.isRequired,
    addProducts: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      enableAction: false,
      crmid: [],
    };
  }

  addElement = (item) => {
    const enableAction = true;
    item.quantity = 1;
    this.setState(prevState => ({ crmid: [...prevState.crmid, item], enableAction }));
  };

  removeElement = (item) => {
    let enableAction = true;
    const { crmid } = this.state;
    const state = crmid.filter(el => el.crmid !== item.crmid);
    if (state.length === 0) enableAction = false;
    this.setState({ crmid: state, enableAction });
  };

  changeQty = (event) => {
    const { id } = event.target.dataset;
    const { crmid } = this.state;
    const qty = Number(event.target.value);
    const state = crmid.map((x) => {
      if (x.crmid === id) {
        if (qty <= x.qtyinstock) {
          x.quantity = qty;
        } else if (x.qtyinstock !== 0) {
          x.quantity = x.qtyinstock;
        } else {
          x.quantity = 1;
        }
      }
      return x;
    });
    this.setState({ crmid: state });
  };

  addProductsToCart = () => {
    const { crmid } = this.state;
    const { authUser, toggleModal, addProducts } = this.props;
    crmid.forEach(async (product) => {
      if (haveStock(product, authUser)) {
        const dataset = {
          crmid: product.crmid,
          parentid: product.parentId,
          quantity: product.quantity,
        };
        await addProducts({ dataset });
      }
    });
    toggleModal('options');
    this.setState({ crmid: [], enableAction: false });
  }

  closeDialogAndReset = () => {
    const { toggleModal } = this.props;
    this.setState({ crmid: [], enableAction: false });
    toggleModal('options');
  }

  render() {
    const { modals, loads, options } = this.props;
    const { crmid, enableAction } = this.state;
    return (
      <FullDialog
        color="primary"
        title="Selecciona una Opción"
        isOpen={Boolean(modals.optionsModalIsOpen)}
        isLoading={loads.productIsLoading}
        onClose={() => { this.closeDialogAndReset(); }}
        onSave={() => {
          this.addProductsToCart();
        }}
        enableAction={enableAction}
      >
        <ProductOptionMobile
          crmid={crmid}
          addElement={this.addElement}
          removeElement={this.removeElement}
          changeQty={this.changeQty}
          options={options}
        />
      </FullDialog>
    );
  }
}

export default ProductOptions;
