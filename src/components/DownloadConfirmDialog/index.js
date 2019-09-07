import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DownloadConfirmDialog extends React.Component {
    render() {
        const {
            open,
            onHandleModal,
            confirmDownload
        } = this.props;
        return (
            <Dialog
                onClose={onHandleModal}
                open={open}
            >
                <div className="modal-box-content"
                     onClick={confirmDownload}
                >
                    <FontAwesomeIcon
                        icon="download"
                        className="font-light-gray font-size-70"
                    />
                </div>
            </Dialog>
        );
    }
}

export default DownloadConfirmDialog;
