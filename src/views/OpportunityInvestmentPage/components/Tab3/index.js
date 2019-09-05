import React from "react";
import {Timeline} from "../../../../components/Timeline";

export const Tab3 = (props) => {
    const
        {
            cf_1666,
            cf_1668,
            cf_1670,
            cf_1672,
            cf_1674,
            cf_1676,
            cf_1678,
            cf_1680,
            cf_1682,
            cf_1684,
            cf_1398,
            cf_1552
        }
        = props.opportunityDetail;
    const timelineData = [
        { title: "Adquisicion", description: cf_1666},
        { title: "Lisencia de demolición", description: cf_1668},
        { title: "Demolición", description: cf_1670},
        { title: "Lisencia de Construcción", description: cf_1672},
        { title: "Excavación", description: cf_1674},
        { title: "Cimentación", description: cf_1676},
        { title: "Obra Negra", description: cf_1678},
        { title: "Obra Gris", description: cf_1680},
        { title: "Acabados", description: cf_1682},
        { title: "Venta", description: cf_1684},
    ];
    return (
        <div className="p-4">
            <div className="process-item justify-content-between d-flex">
                <div className="font-size-14 font-weight-600">Plusvalia</div>
                <div className="font-size-14 font-weight-600">$ {cf_1552}</div>
            </div>
            <div className="process-item-none-bg justify-content-between d-flex">
                <div className="font-size-14 font-weight-600">Meses de atraso</div>
                <div className="font-size-14 font-weight-600">{cf_1398} meses</div>
            </div>
            <Timeline timelineData={timelineData}/>
        </div>
    )
};
