import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ListItem from "@material-ui/core/ListItem";

const DownloadItem = ({ item, onClick }) => {
    return (
        <ListItem button onClick={onClick}>
            <div className="flex-row d-flex w-100">
                <div className="font-size-24">
                    <FontAwesomeIcon icon={faFilePdf}/>
                </div>
                <div className="">
                    <div className="position-absolute align-center-y font-size-20 font-weight-400 ml-2">
                        {item.name}
                    </div>
                </div>
            </div>

        </ListItem>
    )
}
export default DownloadItem;
