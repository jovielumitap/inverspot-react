import React from 'react';
import {Modal, ModalHeader} from "reactstrap";

class TermsPrivacyDialog extends React.Component {
    render() {
        const {
            open,
            onHandleModal,
            content
        } = this.props;
        const logo = `${process.env.PUBLIC_URL}/img/logo-inverspot-white.png`;
        return (
            <Modal
                toggle={onHandleModal}
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
                            <div className="f-1"
                                 dangerouslySetInnerHTML={{ __html: content }}
                            />
                            <div className="col-12">
                                <div className="w-75 confirm-origin-button flex-column mx-auto mt-2"
                                     onClick={() => onHandleModal()}
                                >
                                    <span className="pr-2">{'Agree'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default TermsPrivacyDialog;
