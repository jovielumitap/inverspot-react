import React from "react";
import {Tab6InvestmentItem} from "./Tab6InvestmentItem";

const data = [
    { icon: "circle", bgColorItem: ""},
    { icon: "clock", bgColorItem: "#FBB03B"},
    { icon: "check", bgColorItem: "#662D91"},
];
export const Tab6 = () => {
    return (
        <div className="">
            {data.map(item => <Tab6InvestmentItem key={item.icon} item={item}/>)}
        </div>
    )
};
