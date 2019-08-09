import React from "react";

export const ReferralItem = ({}) => {
    return (
        <div className="referral-item flex-row w-100 border-bottom">
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
                    <div className="align-center position-relative font-size-20 font-weight-700 font-purple">$1200</div>
                </div>
            </div>
        </div>
    )
};
