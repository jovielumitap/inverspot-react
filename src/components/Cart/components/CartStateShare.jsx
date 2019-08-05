import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'reactstrap';
import {
  Button,
  TextField,
  IconButton,
  Chip,
  CircularProgress,
} from '@material-ui/core';
import { Send } from '@material-ui/icons';

import AddIcon from '@material-ui/icons/Add';

// import FullDialog from '../../FullDialog';

class CartStateShare extends PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      emails: [],
      email: '',
      subject: '',
      body: '',
      emailError: false,
    };
  }

  componentWillReceiveProps(next) {
    const { customer: { selectedCustomer }, orderNo, posType } = next;
    const actual = new Date();
    const day = `0${actual.getDate()}`.slice(-2);
    const month = `0${actual.getMonth() + 1}`.slice(-2);
    const year = actual.getFullYear();
    const date = `${year}-${month}-${day}`;
    const subject = (
      posType === 'Cotizaciones'
        ? `Cotización ${orderNo} - ${date}`
        : `Venta ${orderNo} - ${date}`);
    const mail = selectedCustomer.email1;
    const newEmails = [mail];
    this.setState({ emails: newEmails, subject });
  }

  isEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(String(email).toLocaleLowerCase());
  }

  addEmail = () => {
    const { emails, email } = this.state;
    if (this.isEmail(email)) {
      const newEmails = [...emails, email];
      this.setState({ emails: newEmails, email: '' });
    } else {
      this.setState({ emailError: true });
    }
  }

  addEmailOnEnter = (event) => {
    const { keyCode } = event;
    if (keyCode === 13) {
      this.addEmail();
    }
  }

  changeStateText = id => (event) => {
    const { target } = event;
    this.setState({ [id]: target.value, emailError: false });
  }

  removeEmail = (index) => {
    const { emails } = this.state;
    const newEmails = [...emails];
    newEmails.splice(index, 1);
    this.setState({ emails: newEmails });
  }

  renderForm = () => {
    const {
      onClose,
      onSave,
      isLoading,
    } = this.props;
    const {
      emailError,
      emails,
      email,
      subject,
      body,
    } = this.state;
    return (
      <div className="w-100 h-auto">
        <div className="px-4 py-2 w-100 d-flex justify-content-between">
          <Button
            color="secondary"
            onClick={onClose}
          >
            Cancelar
          </Button>
          <div className="w-100 d-flex align-items-center justify-content-center">
            <h4>Compartir...</h4>
          </div>
          {isLoading
            ? <CircularProgress />
            : (
              <IconButton
                aria-label="Send"
                onClick={() => {
                  const { ...data } = this.state;
                  onSave(data);
                }}
              >
                <Send fontSize="small" />
              </IconButton>
            )
          }
        </div>
        <div className="p-4 w-100">
          <div className="cart-state__email-container">
            <div className="w-100 d-flex justify-content-between align-items-center">
              <TextField
                id="standard-email"
                className="w-100"
                placeholder="ejemplo@dominio.comz"
                label="E-mail"
                type="email"
                value={email}
                onChange={this.changeStateText('email')}
                onKeyUp={this.addEmailOnEnter}
                error={emailError}
              />
              <IconButton
                aria-label="Add"
                onClick={this.addEmail}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </div>
            <div className="my-3 w-100">
              <h4>Para:</h4>
              <div
                className="cart-state__emails-container"
              >
                {
                  emails.map((_email, index) => (
                    <Chip
                      key={`key_${_email}`}
                      label={_email}
                      onDelete={() => this.removeEmail(index)}
                    />
                  ))
                }
              </div>
            </div>
          </div>
          <div className="w-100 mt-3 mb-3">
            <TextField
              id="standard-subject"
              placeholder="Asunto"
              label="Asunto"
              className="w-100"
              value={subject}
              onChange={this.changeStateText('subject')}
            />
          </div>
          <div className="mt-3 mb-3">
            <TextField
              id="standard-subject"
              placeholder="Cuerpo"
              label="Cuerpo"
              className="w-100"
              value={body}
              onChange={this.changeStateText('body')}
              multiline
              rows={6}
              autoFocus
            />
          </div>
        </div>
      </div>
    );
  };

  render() {
    const {
      isOpen,
      onClose,
    } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={onClose} backdrop="static">
        {this.renderForm()}
      </Modal>
    );
  }
}

export default CartStateShare;
