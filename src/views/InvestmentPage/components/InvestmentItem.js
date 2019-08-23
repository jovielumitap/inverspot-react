import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarMinus, faDollarSign} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";

const InvestmentItem = ({ item, onClick }) => {
    return (
        <ListItem button onClick={() => onClick(item.productid)}>
            <div className="flex-row d-flex w-100">
                <Avatar
                    className="size-70"
                    style={{backgroundColor: '#d0d0ca'}}
                    src={item.proyecto.images && item.proyecto.images[0]?item.proyecto.images[0]:""}
                />
                <div className="d-flex justify-content-between f-1">
                    <div className="ml-2 position-relative">
                        <div className="align-center position-relative">
                            <div className="font-size-18 font-weight-500">{item.productname}</div>
                            <div className="d-flex justify-content-between">
                                <div className="font-gray">
                                    <FontAwesomeIcon icon={faCalendarMinus} fixedWidth/>
                                    <span>{item.proyecto.cf_1400}</span>
                                </div>
                                <div className="inverspot-vertical-divider"/>
                                <div className="font-gray">
                                    <FontAwesomeIcon icon={faDollarSign} fixedWidth/>
                                    <span>{item.proyecto.unit_price_in_ks}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative">
                        <div
                            style={{ borderRadius: "50%"}}
                            className="align-center position-relative font-size-22 font-weight-500 size-40 bg-dark font-white text-center"
                        >
                            {3}
                        </div>
                    </div>
                </div>
            </div>

        </ListItem>
    )
}
export default InvestmentItem;
