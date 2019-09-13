import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Tab7InvestmentItem = ({ item, requestDownloadPDF }) => {
    const cash_flow = item.cash_flow[0];
    if (!cash_flow) return null;
    return (
        <div className="referral-item flex-row w-100 border-bottom">
            <div className="d-flex justify-content-between f-1">
                <div className="ml-2 position-relative">
                    <div className="align-center position-relative">
                        <div className="font-size-18 font-weight-600 font-purple">${cash_flow? cash_flow.amount: "-"}</div>
                        <div className="font-size-14">{cash_flow? cash_flow.date: "-"}</div>
                    </div>
                </div>
                <div className="mr-2">
                    <div className="mt-1 font-size-18 text-right">{cash_flow? cash_flow.reference: "-"}</div>
                </div>
            </div>
            <div className="confirm-icon-bg border-bottom">
                <div className="download-icon" onClick={() => requestDownloadPDF(cash_flow? cash_flow.crmid: null, cash_flow? cash_flow.pdf: null)}>
                    <FontAwesomeIcon className="font-size-24" icon="download"/>
                </div>
            </div>
        </div>
    )
};
