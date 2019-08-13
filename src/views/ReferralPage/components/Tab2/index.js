import React from "react";
import {CommissionItem} from "./CommissionItem";

const data = [
    { icon: "circle", bgColorItem: ""},
    { icon: "clock", bgColorItem: "#FBB03B"},
    { icon: "check", bgColorItem: "#662D91"},
];

export const Tab2 = () => {
    return (
        <div className="">
            {data.map(item => <CommissionItem key={item.icon} item={item}/>)}
        </div>
    )
};
