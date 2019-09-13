import React from 'react';
import { Modal, ModalHeader } from "reactstrap";

class SubmitInvestmentDialog extends React.Component {
    state = {
      password: ""
    };
    render() {
        const {
            open,
            onHandleModal,
            onSubmitForm
        } = this.props;
        const { password } = this.state;
        return (
            <Modal
                toggle={onHandleModal}
                isOpen={open}
            >
                <ModalHeader className="modal-box-header bg-purple text-white text-center">
                    <div className="font-size-30 font-weight-600">Inverspot</div>
                </ModalHeader>
                <div className="modal-box-content">
                    <div className="w-100">
                        <div className="row mb-2">

                            <div className="col-12 mb-4 text-center font-size-18 font-weight-600">
                                Confirma tu correo y contrasena para realizar tu inversion
                            </div>
                            <div className="col-12 mb-2 text-center font-size-20 font-weight-600">
                                suario@correo.com
                            </div>
                            <div className="col-12 mb-2 text-center font-size-20 font-weight-600">
                                <input
                                    className='form-control form-control-lg'
                                    type={"password"}
                                    value={password}
                                    onChange={e => this.setState({ password: e.target.value })}
                                    placeholder={"Confirma tu contrasena"}
                                />
                            </div>
                            <div className="col-12">
                                <div className="w-100 origin-button py-2 mt-2"
                                     onClick={() => onSubmitForm(password)}
                                >
                                    Confirma tu contrasena
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default SubmitInvestmentDialog;
