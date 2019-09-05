import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const BottomFloatButton = (props) => {
    return (
        <div className="w-75 sub-header flex-column pt-2 pb-2"
             onClick={() => props.onHandleModal()}
        >
            <span className="pr-2">Aparta tu participación</span>
            <FontAwesomeIcon icon="piggy-bank"/>
        </div>
    )
};
export default BottomFloatButton;
