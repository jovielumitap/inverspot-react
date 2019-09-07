import React from "react";
import {Tab4InvestmentItem} from "./Tab4InvestmentItem";
import {ConfirmInvestmentItem} from "../../../ApartadasPage/components/Tab4/ConfirmInvestmentItem";

const data = [
    { icon: "circle", bgColorItem: ""},
    { icon: "clock", bgColorItem: "#FBB03B"},
    { icon: "check", bgColorItem: "#662D91"},
];

export const Tab4 = (props) => {
    return (
        <div className="">
            {props.data.map(item => <Tab4InvestmentItem key={item.invoiceid} item={item} requestDownloadPDF={props.requestDownloadPDF}/>)}
        </div>
    )
};
