import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Tab5InvestmentItem = () => {
    return (
        <div className="referral-item flex-row w-100 border-bottom">
            <div className="d-flex justify-content-between f-1">
                <div className="ml-2 position-relative">
                    <div className="align-center position-relative">
                        <div className="font-size-18 font-weight-600 font-purple">$150,000</div>
                        <div className="font-size-14">08/08/2019</div>
                    </div>
                </div>
                <div className="mr-2">
                    <div className="mt-1 font-size-18 text-right">SPEI</div>
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
