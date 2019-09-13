import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const CommissionItem = ({item}) => {
    const { accountname, fecha, total, tfde_balance } = item;
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
            <div className="d-flex f-1">
                <div className="ml-2 position-relative f-1">
                    <div className="align-center position-relative">
                        <div className="font-size-16 referral-item-account-name font-weight-600">{accountname}</div>
                        <div className="font-size-14">{fecha}</div>
                    </div>
                </div>
                <div className="mr-2 position-relative">
                    <div className="align-center position-relative">
                        <div className="font-size-20 font-weight-700 font-purple text-right">${total}</div>
                        <div className="font-size-16 font-red text-right">Saldo: ${tfde_balance}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
