import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ConfirmInvestmentItem = ({ item, requestDownloadPDF }) => {
    const { quantity, invoiceid, invoice, invoicedate, total, pdf } = item;
    return (
        <div className="referral-item flex-row w-100 border-bottom">
            <div className="referral-item-number-bg">
                <div className="referral-item-number">{parseInt(quantity)}</div>
            </div>
            <div className="d-flex justify-content-between f-1">
                <div className="ml-2 position-relative">
                    <div className="align-center position-relative">
                        <div className="font-size-18 font-weight-600">{invoice}</div>
                        <div className="font-size-14">{invoicedate}</div>
                    </div>
                </div>
                <div className="mr-2 position-relative">
                    <div className="align-center position-relative">
                        <div className="font-size-16 font-weight-600 text-right">${parseFloat(total)}</div>
                    </div>
                </div>
            </div>
            <div className="confirm-icon-bg border-bottom">
                <div className="download-icon" onClick={() => requestDownloadPDF(invoiceid, pdf)}>
                    <FontAwesomeIcon className="font-size-24" icon="download"/>
                </div>
            </div>
        </div>
    )
};
