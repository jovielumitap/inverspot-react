import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook} from "@fortawesome/free-solid-svg-icons";
const SubHeader = () => {
    return (
        <div className="w-100 sub-header flex-column pt-2 pb-2">
            <span className="pr-2">Aparta tu participación</span>
            <FontAwesomeIcon icon={faAddressBook}/>
        </div>
    )
};
export default SubHeader;
