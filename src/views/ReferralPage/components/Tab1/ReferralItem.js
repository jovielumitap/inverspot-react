import React from "react";

export const ReferralItem = ({ item }) => {
    const { cant, nombre, creado, generado } = item;
    return (
        <div className="referral-item flex-row w-100 border-bottom">
            <div className="referral-item-number-bg">
                <div className="referral-item-number">{cant}</div>
            </div>
            <div className="d-flex f-1">
                <div className="ml-2 position-relative f-1">
                    <div className="align-center position-relative">
                        <div className="font-size-16 referral-item-account-name font-weight-600">{nombre}</div>
                        <div className="font-size-14">{creado}</div>
                    </div>
                </div>
                <div className="mr-2 position-relative">
                    <div className="align-center position-relative font-size-20 font-weight-700 font-purple">${generado}</div>
                </div>
            </div>
        </div>
    )
};
