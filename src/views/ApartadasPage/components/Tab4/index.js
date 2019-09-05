import React from "react";
import {ConfirmInvestmentItem} from "./ConfirmInvestmentItem";

const data = [
    { icon: "circle", bgColorItem: ""},
    { icon: "clock", bgColorItem: "#FBB03B"},
    { icon: "check", bgColorItem: "#662D91"},
];
export const Tab4 = () => {
    return (
        <div className="">
            {data.map(item => <ConfirmInvestmentItem key={item.icon} item={item}/>)}
        </div>
    )
};
