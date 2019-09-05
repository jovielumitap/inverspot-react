import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding} from "@fortawesome/free-solid-svg-icons";

export const Tab1 = () => {
    return (
        <div className="p-2">
            <div className="">
                <div className="font-size-16">Label</div>
                <div className="font-size-16 font-weight-600 px-2">
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim veniamtation
                </div>
            </div>
            <div className="text-center pt-3">
                <div className="font-size-20 font-weight-600 font-purple">Paticipacion Adquirida en el Desarrollo</div>
                <div className="font-size-60 font-red">
                    <FontAwesomeIcon icon={faBuilding}/>
                </div>
                <div className="font-size-20 font-weight-600 font-purple">Equity Department</div>
            </div>
            <div className="d-flex mx-2 top-border mt-4 pt-3">
                <div className="f-1 text-center">
                    <div className="font-size-20 font-weight-600 font-red">68.89M</div>
                    <div className="font-size-16 font-weight-600 font-purple">Tamano</div>
                </div>
                <div className="f-1 text-center">
                    <div className="font-size-20 font-weight-600 font-red">23.00%</div>
                    <div className="font-size-16 font-weight-600 font-purple">Rendimiento</div>
                </div>
            </div>
        </div>
    )
};
