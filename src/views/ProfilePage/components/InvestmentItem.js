import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarMinus, faDollarSign} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";

const InvestmentItem = ({ item, onClick }) => {
    return (
        <ListItem button onClick={onClick}>
            <div className="flex-row d-flex w-100">
                <Avatar
                    className="size-70"
                    style={{backgroundColor: '#5B2954'}}
                    src={"https://rismedia.com/wp-content/uploads/2018/12/stock_market_509614932-1080x627.jpg"}
                />
                <div className="d-flex justify-content-between f-1">
                    <div className="ml-2 position-relative">
                        <div className="align-center position-relative">
                            <div className="font-size-18 font-weight-500">{item.name}</div>
                            <div className="d-flex justify-content-between">
                                <div className="font-gray">
                                    <FontAwesomeIcon icon={faCalendarMinus} fixedWidth/>
                                    <span>{item.date}</span>
                                </div>
                                <div className="inverspot-vertical-divider"/>
                                <div className="font-gray">
                                    <FontAwesomeIcon icon={faDollarSign} fixedWidth/>
                                    <span>{item.amount}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative">
                        <div
                            style={{ borderRadius: "50%"}}
                            className="align-center position-relative font-size-22 font-weight-500 size-40 bg-dark font-white text-center"
                        >
                            {item.percent}
                        </div>
                    </div>
                </div>
            </div>

        </ListItem>
    )
}
export default InvestmentItem;
