import React from "react";
import {ConfirmInvestmentItem} from "./ConfirmInvestmentItem";

export const Tab4 = (props) => {
    return (
        <div className="">
            {props.data.map(item => <ConfirmInvestmentItem key={item.invoiceid} item={item} requestDownloadPDF={props.requestDownloadPDF}/>)}
        </div>
    )
};
