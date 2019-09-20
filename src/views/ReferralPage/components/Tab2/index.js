import React from "react";
import {CommissionItem} from "./CommissionItem";

export const Tab2 = ({ data }) => {
    return (
        <div className="">
            {data.map(item => <CommissionItem key={item.icon} item={item}/>)}
        </div>
    )
};
