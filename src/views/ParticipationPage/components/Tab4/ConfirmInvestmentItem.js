import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ConfirmInvestmentItem = () => {
    return (
        <div className="referral-item flex-row w-100 border-bottom">
            <div className="commission-icon-bg border-bottom">
                <div className="referral-item-number">
                    <FontAwesomeIcon className="font-white font-size-24" icon="circle"/>
                </div>
            </div>
            <div className="referral-item-number-bg">
                <div className="referral-item-number">3</div>
            </div>
            <div className="d-flex justify-content-between f-1">
                <div className="ml-2 position-relative">
                    <div className="align-center position-relative">
                        <div className="font-size-22">Juan Perex</div>
                        <div className="font-size-14">08/08/2019</div>
                    </div>
                </div>
                <div className="mr-2 position-relative">
                    <div className="align-center position-relative">
                        <div className="font-size-16 font-red text-right">$1,200</div>
                        <div className="font-size-14 text-right">Saldo</div>
                    </div>
                </div>
            </div>
            <div className="confirm-icon-bg border-bottom">
                <div className="download-icon">
                    <FontAwesomeIcon className="font-size-24" icon="download"/>
                </div>
            </div>
        </div>
    )
};
