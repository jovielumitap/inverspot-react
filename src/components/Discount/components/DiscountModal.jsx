/* eslint-disable no-mixed-operators */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Serialize from 'form-serialize';
import { Modal, ModalHeader, ModalBody, Form, Input, Button, Row, Col } from 'reactstrap';

import { connect } from 'react-redux';
import { addDiscount, changeDiscount } from '../../../redux/actions/discountActions';
import { toggleModal, closeModal } from '../../../redux/actions/modalActions';

import { cartProps } from '../../../propTypes/cartProps';
import discountProps from '../../../propTypes/discountProps';
import modalsProps from '../../../propTypes/modalsProps';

class DiscountModal extends PureComponent {
  static propTypes = {
    cart: cartProps.isRequired,
    discount: discountProps.isRequired,
    modals: modalsProps.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.total = 0;
  }

  changeFixed = (event) => {
    const { percentage } = this.props.discount;
    const { total } = this.props.cart;
    const fixed = Number(event.target.value) || 0;
    this.total = Number(fixed + ((percentage / 100) * total)) || 0;
    this.props.dispatch(changeDiscount({ fixed }));
  }

  changePercentage = (event) => {
    const { fixed } = this.props.discount;
    const percentage = Number(event.target.value) || 0;
    const { total } = this.props.cart;
    const discount = Number(fixed + ((percentage / 100) * total)) || 0;
    this.total = discount;
    this.props.dispatch(changeDiscount({ percentage }));
  }

  toggleModal = () => {
    this.props.dispatch(toggleModal('discount'));
  }

  addDiscountAndCloseModal = (event) => {
    event.preventDefault();
    const form = event.target;
    const discount = Serialize(form, { hash: true });

    discount.fixed = Number(discount.fixed) || 0;
    discount.percentage = Number(discount.percentage) || 0;

    const { total } = this.props.cart;
    const totalDiscount = Number(discount.fixed + ((discount.percentage / 100) * total)) || 0;

    this.props.dispatch(addDiscount({ ...discount, total: totalDiscount }));
    this.props.dispatch(closeModal('discount'));
  }


  render() {
    return (
      <div className="discounts">
        <Modal isOpen={this.props.modals.discountModalIsOpen} toggle={this.toggleModal} className="discounts__modal">
          <ModalHeader toggle={this.toggleModal}>Discount</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.addDiscountAndCloseModal}>
              <Row>
                <Col xs={2}>
                  <Input type="number" step=".01" name="fixed" placeholder="$0" onKeyUp={this.changeFixed} min="0" />
                </Col>
                <Col xs={1}>
                  <span>+</span>
                </Col>
                <Col xs={2}>
                  <Input type="number" step=".01" name="percentage" placeholder="0%" onKeyUp={this.changePercentage} min="0" />
                </Col>
                <Col xs={1}>
                  <span>-</span>
                </Col>
                <Col xs={2}>
                  <Input value={`$${this.props.cart.total}`} disabled />
                </Col>
                <Col xs={1}>
                  <span>=</span>
                </Col>
                <Col xs={2}>
                  <Input value={`$${this.total}`} disabled />
                </Col>
              </Row>
              <div className="text-center" style={{ marginTop: '25px' }}>
                <Input name="name" placeholder="Nombre" />
                <Button type="submit" color="primary">Agregar</Button>
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  discount: state.discount,
  modals: state.modals,
});

export default connect(mapStateToProps)(DiscountModal);
