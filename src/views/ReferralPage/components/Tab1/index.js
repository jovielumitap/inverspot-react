import React from "react";
import {ReferralItem} from "./ReferralItem";

export const Tab1 = (props) => {
    return (
        <div className="">
            {props.data.map(item => (
                <ReferralItem item={item}/>
            ))}
        </div>
    )
};
