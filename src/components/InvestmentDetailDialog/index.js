import React from 'react';
import { Modal, ModalHeader } from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class InvestmentDetailDialog extends React.Component {
    state = {
        showDetail: false
    };
    toggleDetail = () => {
      this.setState((state) => {
          return {
              showDetail: !state.showDetail
          }
      })
    };
    render() {
        const {
            open,
            onHandleModal
        } = this.props;
        const { showDetail } = this.state;
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
                                Agrega fondos a tus participationes
                            </div>
                            {showDetail && (
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
                                </div>
                            )}
                            <div className="col-12 mb-2 text-center py-1 bg-gray"
                                 onClick={() => this.toggleDetail()}
                            >
                                <span className="font-size-16 mr-2 font-gray">Instucciones</span>
                                <FontAwesomeIcon className="font-size-16 font-gray" icon={showDetail?"chevron-up":"chevron-down"}/>
                            </div>
                            <div className="col-12 mb-2">
                                <div className="font-gray">CLABE:</div>
                                <div className="font-size-16 font-weight-600">6460989289304-2393</div>
                            </div>
                            <div className="col-12 mb-2">
                                <div className="font-gray">Referebcia:</div>
                                <div className="font-size-16 font-weight-600">7890</div>
                            </div>
                            <div className="col-12 mb-2">
                                <div className="font-gray">Banco:</div>
                                <div className="font-size-16 font-weight-600">STP</div>
                            </div>
                            <div className="col-12 mb-2">
                                <div className="font-gray">Nombre del titular de la cuenta:</div>
                                <div className="font-size-16 font-weight-600">Desarrollo Colectivo Inmobiliario S.A.P.I.DE C.V</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default InvestmentDetailDialog;
