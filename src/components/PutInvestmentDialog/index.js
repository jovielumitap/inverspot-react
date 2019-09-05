import React from 'react';
import { Modal } from "reactstrap";
import Avatar from "@material-ui/core/Avatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class PutInvestmentDialog extends React.Component {
    render() {
        const {
            open,
            onHandleModal,
            image,
            title,
            onSubmitForm
        } = this.props;
        return (
            <Modal
                toggle={onHandleModal}
                isOpen={open}
            >
                <div className="modal-box-content">
                    <div className="w-100">
                        <div className="row mb-2 pb-2 border-bottom">
                            <Avatar
                                className="size-50"
                                style={{backgroundColor: '#d0d0ca'}}
                                src={image}
                            />
                            <div className="d-table ml-2" style={{height: "50px"}}>
                                <div
                                    className="d-table-cell vertical-align-center font-size-22 font-weight-600">{title}</div>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-6 mb-2">
                                <div className="font-size-16">
                                    Paticipaciones
                                </div>
                                <div className="modal-add-div px-2">
                                    <div className="font-size-16 font-weight-800 font-purple position-relative ml-1">
                                        <FontAwesomeIcon
                                            icon="minus"
                                            className="position-absolute align-center"
                                        />
                                    </div>
                                    <div className="font-size-22 font-weight-600 font-red">2</div>
                                    <div className="font-size-16 font-weight-800 font-purple position-relative mr-1">
                                        <FontAwesomeIcon
                                            icon="plus"
                                            className="position-absolute align-center"
                                        />
                                    </div>
                                </div>
                                <div className="font-size-10">
                                    Quedan 11 de 47
                                </div>
                            </div>
                            <div className="col-6 mb-2">
                                <div className="font-size-16">Precio unitario</div>
                                <div className="font-size-22 font-weight-600 font-red">100,000</div>
                            </div>
                            <div className="col-12 mb-2 pb-2 border-bottom">
                                <div className="font-size-16">Total</div>
                                <div className="font-size-22 font-weight-600 font-red">200,000</div>
                            </div>
                            <div className="col-12">
                                <div className="w-50 origin-button mx-auto mt-2"
                                     onClick={() => onSubmitForm()}
                                >
                                    Apartalo
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default PutInvestmentDialog;
