import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Tab4InvestmentItem = ({item, requestDownloadPDF}) => {
    const { invoiceid, invoice, invoicedate, total } = item;
    return (
        <div className="referral-item flex-row w-100 border-bottom">
            <div className="commission-icon-bg border-bottom" style={{ backgroundColor: item.bgColorItem}}>
                <div className="referral-item-number">
                    <FontAwesomeIcon className="font-white font-size-24" icon={item.icon}/>
                </div>
            </div>
            <div className="referral-item-number-bg">
                <div className="referral-item-number">3</div>
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
                        <div className="font-size-16 font-red text-right">-${parseFloat(total)}</div>
                        <div className="font-size-14 text-right">Saldo</div>
                    </div>
                </div>
            </div>
            <div className="confirm-icon-bg border-bottom">
                <div className="download-icon" onClick={() => requestDownloadPDF(invoiceid)}>
                    <FontAwesomeIcon className="font-size-24" icon="download"/>
                </div>
            </div>
        </div>
    )
};
