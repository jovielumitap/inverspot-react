import React from "react";
import {Tab7InvestmentItem} from "./Tab7InvestmentItem";

export const Tab7 = (props) => {
    const data = props.data;
    return (
        <div className="">
            {data.map(order => (
                <Tab7InvestmentItem item={order} requestDownloadPDF={props.requestDownloadPDF}/>
            ))}
        </div>
    )
};
