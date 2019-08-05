/* eslint-disable react/self-closing-comp */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Button } from 'reactstrap';

export default class Coupon extends PureComponent {
  static propTypes = {
    modal: PropTypes.bool.isRequired,
    onToggleModal: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.onToggleModal} className="coupon__modal">
        <ModalHeader toggle={this.props.onToggleModal}>Coupon</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Input name="coupon" placeholder="Cupon" />
            </FormGroup>
            <Button color="primary">Agregar</Button>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}
