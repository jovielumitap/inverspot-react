/* eslint-disable camelcase */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Serialize from 'form-serialize';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  UncontrolledCollapse,
} from 'reactstrap';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import modalsProps from '../../../propTypes/modalsProps';
import loadsProps from '../../../propTypes/loadsProps';

import LoadComponent from '../../Load/LoadComponent';
import GoogleMapsPlacesSearch from '../../GoogleMapsPlacesSearch';

class CreateCustomer extends PureComponent {
  static propTypes = {
    modals: modalsProps.isRequired,
    loads: loadsProps.isRequired,
    dispatchToggleModal: PropTypes.func.isRequired,
    dispatchCreateCustomer: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.calle = null;
    this.numeroExterior = null;
    this.colonia = null;
    this.delegacion = null;
    this.estado = null;
    this.pais = null;
    this.codigoPostal = null;
  }

  setRef = (node) => {
    if (node !== null) {
      const { name, tagName } = node;
      if (tagName === 'INPUT' && name in this) {
        this[name] = node;
      }
      else if (tagName === 'INPUT' && name === 'numExt') {
        this.numeroExterior = node;
      }
    }
  }

  toggleModal = () => {
    const { dispatchToggleModal } = this.props;
    dispatchToggleModal('customerCreate');
  }

  sendCustomer = (event) => {
    event.preventDefault();
    const { dispatchCreateCustomer } = this.props;
    const customer = Serialize(event.target, { hash: true });
    dispatchCreateCustomer(customer);
  }

  onPlacesChanged = (places) => {
    if (places.length === 0) {
      return false;
    }
    const { address_components } = places[0];
    Object.keys(address_components).forEach((addressId) => {
      const address = address_components[addressId];
      const { types, long_name } = address;

      types.forEach((type) => {
        if (type === 'route') {
          this.calle.value = long_name;
        }
        else if (type === 'street_number') {
          this.numeroExterior.value = long_name;
        }
        else if (type === 'sublocality' || type === 'sublocality_level_1') {
          this.colonia.value = long_name;
        }
        else if (type === 'locality') {
          this.delegacion.value = long_name;
        }
        else if (type === 'administrative_area' || type === 'administrative_area_level_1') {
          this.estado.value = long_name;
        }
        else if (type === 'country') {
          this.pais.value = long_name;
        }
        else if (type === 'postal_code') {
          this.codigoPostal.value = long_name;
        }
      });
    });

    return true;
  }

  render() {
    const { modals, loads } = this.props;
    return (
      <Modal isOpen={modals.customerCreateModalIsOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Agregar Cliente</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.sendCustomer}>
            <FormGroup>
              <TextField
                id="name"
                label="Nombre"
                name="nombre"
                className="w-100"
                required
              />
            </FormGroup>
            <FormGroup>
              <TextField
                id="last-name"
                label="Apellidos"
                name="apellidos"
                className="w-100"
                required
              />
            </FormGroup>
            <FormGroup>
              <TextField
                id="email"
                label="Correo"
                name="email"
                type="email"
                className="w-100"
                required
              />
            </FormGroup>
            <Button id="toggler" className="w-100">
              <span>
                <span>Mas Datos </span>
                <FontAwesomeIcon icon="caret-down" />
              </span>
            </Button>
            <UncontrolledCollapse toggler="#toggler">
              <FormGroup>
                <TextField
                  id="phone"
                  label="Telefono"
                  name="telefono"
                  type="number"
                  className="w-100"
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  id="socialReason"
                  label="Razón Social"
                  name="razonSocial"
                  className="w-100"
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  id="rfc"
                  label="RFC"
                  name="rfc"
                  className="w-100"
                  pattern="([a-zA-Z&]{3,4})(\d{2})(0[1-9]|1[1-2])([0][1-9]|[1-2][0-9]|3[0-1])([a-zA-Z0-9]{3})"
                />
              </FormGroup>
              <FormGroup>
                <br />
                <GoogleMapsPlacesSearch
                  apiKey="AIzaSyBkfEwSjhWtPHMjYAJH3poS1eK7bOgO8FY"
                  onPlacesChanged={this.onPlacesChanged}
                />
                <br />
              </FormGroup>
              <FormGroup>
                <TextField
                  id="street"
                  label="Calle"
                  name="calle"
                  className="w-100"
                  inputRef={this.setRef}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  id="externalNumber"
                  label="Numero Exterior"
                  name="numExt"
                  type="number"
                  className="w-100"
                  inputRef={this.setRef}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  id="internalNumber"
                  label="Numero Interior"
                  name="numInt"
                  type="number"
                  className="w-100"
                  inputRef={this.setRef}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  id="colonia"
                  label="Colonia"
                  name="colonia"
                  className="w-100"
                  inputRef={this.setRef}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  id="country"
                  label="Pais"
                  name="pais"
                  className="w-100"
                  inputRef={this.setRef}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  id="state"
                  label="Estado"
                  name="estado"
                  className="w-100"
                  inputRef={this.setRef}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  id="delegation"
                  label="Delegacion o Municipio"
                  name="delegacion"
                  className="w-100"
                  inputRef={this.setRef}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  id="postalCode"
                  label="Codigo Postal"
                  name="codigoPostal"
                  className="w-100"
                  inputRef={this.setRef}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  type="number"
                />
              </FormGroup>
            </UncontrolledCollapse>
            <Button type="submit" color="primary" variant="contained" className="w-100 my-2">Enviar</Button>
          </Form>
          {
            loads.createCustomerIsLoading
              ? <LoadComponent />
              : ''
          }
        </ModalBody>
      </Modal>
    );
  }
}

export default CreateCustomer;
