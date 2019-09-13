import React from "react";
import {Tab6InvestmentItem} from "./Tab6InvestmentItem";

export const Tab6 = (props) => {
    return (
        <div className="">
            {props.data.map(item => <Tab6InvestmentItem
                key={item.crmid}
                item={item}
                requestDownloadPDF={props.requestDownloadPDF}
            />)}
        </div>
    )
};
