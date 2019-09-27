import React from 'react';
import { Modal, ModalHeader } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class WarningRegisterDialog extends React.Component {
    state = {
        password: ''
    };
    render() {
        const {
            open,
            onHandleModal,
            profile_status,
            content,
            onDownload,
            onSubmitContract
        } = this.props;
        const { password } = this.state;
        const logo = `${process.env.PUBLIC_URL}/img/logo-inverspot-white.png`;
        if (profile_status === 'must_sign_contract') {
            return (
                <Modal
                    toggle={onHandleModal}
                    isOpen={open}
                >
                    <ModalHeader className="modal-box-header bg-purple text-white text-center">
                        <div className="w-75 m-auto">
                            <img src={logo} alt={""} />
                        </div>
                    </ModalHeader>
                    <div className="modal-box-content">
                        <div className="w-100">
                            <div className="row mb-2">
                                <div className="col-12 mb-4 text-center font-size-22 font-weight-600">
                                    {'Contrato'}
                                </div>
                                <div className="w-100 position-relative mb-2">
                                    <div className="contract-html-container"
                                        dangerouslySetInnerHTML={{ __html: content }}
                                    />
                                    <div className="download-float-button d-table"
                                        onClick={() => onDownload()}
                                    >
                                        <div className="d-table-cell vertical-align-center">
                                            <FontAwesomeIcon icon="download" />
                                        </div>
                                    </div>
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
                                    <div className="w-75 confirm-origin-button flex-column mx-auto mt-2"
                                        onClick={() => onSubmitContract(password)}
                                    >

                                        <span className="pr-2">{'Firmar tu contrato'}</span>
                                        <FontAwesomeIcon icon="pen-alt" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )
        }
        return (
            <Modal
                toggle={onHandleModal}
                isOpen={open}
            >
                <ModalHeader className="modal-box-header bg-purple text-white text-center">
                    <div className="w-75 m-auto">
                        <img src={logo} alt={""} />
                    </div>
                </ModalHeader>
                <div className="modal-box-content">
                    <div className="w-100">
                        <div className="row mb-2">
                            <div className="col-12 mb-4 text-center font-size-22 font-weight-600">
                                {profile_status === 'must_fill_profile' ?
                                    "Termina tu registro para apartar tus participaciones"
                                    :
                                    "Estamos revisando tu registro."
                                }
                            </div>
                            {profile_status === 'verifying' && (
                                <div className="col-12 mt-2 mb-4 text-center font-size-16">
                                    Cuando tu perfil sea verificado inverspot te notificara por correo
                                </div>
                            )}
                            {profile_status === 'must_fill_profile' && (
                                <div className="col-12">
                                    <div className="w-75 confirm-origin-button mx-auto mt-2"
                                        onClick={() => onHandleModal()}
                                    >
                                        Continuar registro
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default WarningRegisterDialog;
