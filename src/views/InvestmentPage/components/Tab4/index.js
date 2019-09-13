import React from "react";
import {Tab4InvestmentItem} from "./Tab4InvestmentItem";

export const Tab4 = (props) => {
    return (
        <div className="">
            {props.data.map(item => <Tab4InvestmentItem
                key={item.crmid} item={item}
                requestDownloadPDF={props.requestDownloadPDF}
                viewInvoiceDetail={props.viewInvoiceDetail}
            />)}
        </div>
    )
};
