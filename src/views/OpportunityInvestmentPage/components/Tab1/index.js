import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Tab1 = (props) => {
    const { cf_1025, cf_1027, cf_1029, cf_1043, cf_989, cf_985 } = props.opportunityDetail;
    return (
        <div className="p-2">
            <div className="">
                <div className="font-size-24 font-weight-600 font-purple">
                    <FontAwesomeIcon icon="building"/> <span className="font-size-18">Adquisicion</span>
                </div>
                <div className="font-size-16 px-2">
                    {cf_1025}
                </div>
            </div>
            <div className="">
                <div className="font-size-24 font-weight-600 font-purple">
                    <FontAwesomeIcon icon="child"/> <span className="font-size-18">Amenidades</span>
                </div>
                <div className="font-size-16 px-2">
                    {cf_1027}
                </div>
            </div>
            <div className="">
                <div className="font-size-24 font-weight-600 font-purple">
                    <FontAwesomeIcon icon="plug"/> <span className="font-size-18">Servicios y areas recreativas</span>
                </div>
                <div className="font-size-16 px-2">
                    {cf_1029}
                </div>
            </div>
            <div className="text-center pt-3">
                <div className="font-size-20 font-weight-600 font-purple">Paticipacion Adquirida en el Desarrollo</div>
                <div className="font-size-60 font-red">
                    <FontAwesomeIcon icon="building"/>
                </div>
                <div className="font-size-20 font-weight-600 font-purple">{cf_1043}</div>
            </div>
            <div className="d-flex mx-2 top-border mt-4 pt-3">
                <div className="f-1 text-center">
                    <div className="font-size-20 font-weight-600 font-red">{parseFloat(cf_989)}M</div>
                    <div className="font-size-16 font-weight-600 font-purple">Tamano</div>
                </div>
                <div className="f-1 text-center">
                    <div className="font-size-20 font-weight-600 font-red">{parseFloat(cf_985)}%</div>
                    <div className="font-size-16 font-weight-600 font-purple">Rendimiento</div>
                </div>
            </div>
        </div>
    )
};
