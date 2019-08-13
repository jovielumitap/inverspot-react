import React from "react";
import {Tab4InvestmentItem} from "./Tab4InvestmentItem";

const data = [
    { icon: "circle", bgColorItem: ""},
    { icon: "clock", bgColorItem: "#FBB03B"},
    { icon: "check", bgColorItem: "#662D91"},
];

export const Tab4 = () => {
    return (
        <div className="">
            {data.map(item => <Tab4InvestmentItem key={item.icon} item={item}/>)}
        </div>
    )
};
