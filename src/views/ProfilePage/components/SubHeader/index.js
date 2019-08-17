import React from 'react';
import Button from "@material-ui/core/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const onTapItem = (name, history) => {
    switch (name) {
        case 'phone':
            console.log('phone');
            return;
        case 'mail':
            console.log('mail');
            return;
        case 'location':
            console.log('location');
            return;
        default:
            return;
    }
};
const SubHeader = ({history}) => {
    return (
        <div className="row sub-header border-bottom pt-2 pb-2">
            <div className="col-4 text-center">
                <Button onClick={() => onTapItem('phone', history)}>
                    <FontAwesomeIcon className="font-size-18 text-white" icon="phone"/>
                </Button>
            </div>
            <div className="col-4 text-center  border-right border-left">
                <Button onClick={() => onTapItem('mail', history)}>
                    <FontAwesomeIcon className="font-size-18 text-white" icon="envelope"/>
                </Button>
            </div>
            <div className="col-4 text-center">
                <Button onClick={() => onTapItem('location', history)}>
                    <FontAwesomeIcon className="font-size-18 text-white" icon="map-marker-alt"/>
                </Button>
            </div>
        </div>
    )
};
export default SubHeader;
