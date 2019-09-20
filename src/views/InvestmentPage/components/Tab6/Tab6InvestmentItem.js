import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Tab6InvestmentItem = ({item, requestDownloadPDF}) => {
    const { crmid, pdf, payment_status, balance, quantity, date, total } = item;
    return (
        <div className="referral-item flex-row w-100 border-bottom">
            <div className="commission-icon-bg border-bottom" style={{ backgroundColor: payment_status === "paid"? "#662D91": payment_status === "unpaid"? "": "#FBB03B"}}>
                <div className="referral-item-number">
                    <FontAwesomeIcon className="font-white font-size-24" icon={payment_status === "paid"? "check": payment_status === "unpaid"? "circle": "clock"}/>
                </div>
            </div>
            <div className="referral-item-number-bg">
                <div className="referral-item-number">{quantity}</div>
            </div>
            <div className="d-flex justify-content-between f-1">
                <div className="ml-2 position-relative">
                    <div className="align-center position-relative">
                        <div className="font-size-18 font-weight-600"
                             style={{ color: payment_status === "paid"? "#662D91": ""}}
                        >
                            {total}
                        </div>
                        <div className="font-size-14">{date}</div>
                    </div>
                </div>
                <div className="mr-2 position-relative">
                    <div className="align-center position-relative">
                        <div className="font-size-16 font-red text-right">-${parseFloat(balance) * -1}</div>
                        <div className="font-size-14 text-right">{payment_status === "paid"? " ": "Saldo"}</div>
                    </div>
                </div>
            </div>
            <div className="confirm-icon-bg border-bottom">
                <div className="download-icon" onClick={() => requestDownloadPDF(crmid, pdf)}>
                    <FontAwesomeIcon className="font-size-24" icon="download"/>
                </div>
            </div>
        </div>
    )
};
