import React from "react";
import {Tab5InvestmentItem} from "./Tab5InvestmentItem";

export const Tab5 = (props) => {
    const data = props.data;
    return (
        <div className="">
            {data.map((order, index) => (
                <Tab5InvestmentItem key={index} item={order} requestDownloadPDF={props.requestDownloadPDF}/>
            ))}
        </div>
    )
};
