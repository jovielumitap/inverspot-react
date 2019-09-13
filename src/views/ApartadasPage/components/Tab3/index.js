import React from "react";
import { Timeline } from "../../../../components/Timeline";
export const Tab3 = (props) => {
    const
        {
            avances_de_obra,
            cf_1398,
            cf_1552
        } = props.data;
    return (
        <div className="p-4">
            <div className="process-item justify-content-between d-flex">
                <div className="font-size-14 font-weight-600">Plusvalia</div>
                <div className="font-size-14 font-weight-600">$ {cf_1398}</div>
            </div>
            <div className="process-item-none-bg justify-content-between d-flex">
                <div className="font-size-14 font-weight-600">Meses de atraso</div>
                <div className="font-size-14 font-weight-600">{cf_1552} meses</div>
            </div>
            <Timeline timelineData={avances_de_obra}/>
        </div>
    )
};
