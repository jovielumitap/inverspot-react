import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";

const ApartadasItem = ({ item, onClick }) => {
    return (
        <ListItem button onClick={() => onClick(item.proyecto.crmid)}>
            <div className="flex-row d-flex w-100">
                <Avatar
                    className="size-70"
                    style={{backgroundColor: '#d0d0ca'}}
                    src={item.proyecto.images && item.proyecto.images[0]?item.proyecto.images[0]:""}
                />
                <div className="d-flex justify-content-between f-1">
                    <div className="ml-2 position-relative">
                        <div className="align-center position-relative">
                            <div className="font-size-18 font-weight-500">{item.proyecto.productname}</div>
                            <div className="d-flex justify-content-between">
                                <div className="font-gray">
                                    <FontAwesomeIcon icon="calendar-minus" fixedWidth/>
                                    <span>{item.proyecto.cf_1400}</span>
                                </div>
                                <div className="inverspot-vertical-divider"/>
                                <div className="font-gray">
                                    <FontAwesomeIcon icon="dollar-sign" fixedWidth/>
                                    <span>{item.proyecto.unit_price_in_ks}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative">
                        <div className="align-center position-relative font-size-24 font-weight-700">{item.proyecto.cf_1402}%</div>
                    </div>
                </div>
            </div>

        </ListItem>
    )
};
export default ApartadasItem;
