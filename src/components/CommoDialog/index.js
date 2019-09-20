import React from 'react';
import { Modal, ModalHeader } from "reactstrap";

class CommoDialog extends React.Component {
    render() {
        const {
            open,
            toggleModal,
        } = this.props;
        const logo = `${process.env.PUBLIC_URL}/img/logo-inverspot-white.png`;
        return (
            <Modal
                toggle={toggleModal}
                isOpen={open}
            >
                <ModalHeader className="modal-box-header bg-purple text-white text-center">
                    <div className="w-75 m-auto">
                        <img src={logo} alt={""}/>
                    </div>
                </ModalHeader>
                <div className="modal-box-content">
                    <div className="w-100">
                        <div className="row mb-2">

                            <div className="col-12 mb-4 text-center font-size-18 font-weight-600">
                                Agrega fondos a tus participationes
                            </div>
                            <div className="col-12 mb-4 ">
                                <div className="w-100 d-flex font-size-16 font-weight-600 mb-1">
                                    <div className="rounded-circle bg-dark" style={{ width: "8px", height: "8px", marginTop: "9px"}}/>
                                    <div className="f-1 ml-2">En la pagina web de tu banco, selecciona la opcion: Enviar un SPEI</div>
                                </div>
                                <div className="w-100 d-flex font-size-16 font-weight-600 mb-1">
                                    <div className="rounded-circle bg-dark" style={{ width: "8px", height: "8px", marginTop: "9px"}}/>
                                    <div className="f-1 ml-2">En el listado de bancos, selecciona: STP(sistema de transferencias y pagos)</div>
                                </div>
                                <div className="w-100 d-flex font-size-16 font-weight-600 mb-1">
                                    <div className="rounded-circle bg-dark" style={{ width: "8px", height: "8px", marginTop: "9px"}}/>
                                    <div className="f-1 ml-2">Ingresa tu curenta CLABE personalizada</div>
                                </div>
                                <div className="w-100 d-flex font-size-16 font-weight-600 mb-1">
                                    <div className="rounded-circle bg-dark" style={{ width: "8px", height: "8px", marginTop: "9px"}}/>
                                    <div className="f-1 ml-2">En el campo referencia escribe tu numero personalizado</div>
                                </div>
                                <div className="w-100 d-flex font-size-16 font-weight-600 mb-1">
                                    <div className="rounded-circle bg-dark" style={{ width: "8px", height: "8px", marginTop: "9px"}}/>
                                    <div className="f-1 ml-2">{"En elcampo beneficiario escribe: Desarrollo Colectivo Inmobiliario"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}
export default CommoDialog;
