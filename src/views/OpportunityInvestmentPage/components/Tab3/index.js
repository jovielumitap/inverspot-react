import React from "react";
import Card from '@material-ui/core/Card';

export const Tab3 = (props) => {
    const {cf_1666, cf_1668, cf_1670, cf_1672, cf_1674, cf_1676, cf_1678, cf_1680, cf_1682, cf_1684} = props.opportunityDetail;
    return (
        <div className="p-2">
            {cf_1666 &&
                <div className="mb-2">
                    <div className="m-2 font-size-20 font-weight-600">Adquisicion</div>
                    <Card className="font-size-18 px-2">
                        {cf_1666}
                    </Card>
                </div>
            }
            {cf_1668 &&
                <div className="mb-2">
                    <div className="m-2 font-size-20 font-weight-600">Lisencia de demolición</div>
                    <Card className="font-size-18 px-2">
                        {cf_1668}
                    </Card>
                </div>
            }
            {cf_1670 &&
                <div className="mb-2">
                    <div className="m-2 font-size-20 font-weight-600">Demolición</div>
                    <Card className="font-size-18 px-2">
                        {cf_1670}
                    </Card>
                </div>
            }
            {cf_1672 &&
                <div className="mb-2">
                    <div className="m-2 font-size-20 font-weight-600">Lisencia de Construcción</div>
                    <Card className="font-size-18 px-2">
                        {cf_1672}
                    </Card>
                </div>
            }
            {cf_1674 &&
                <div className="mb-2">
                    <div className="m-2 font-size-20 font-weight-600">Excavación</div>
                    <Card className="font-size-18 px-2">
                        {cf_1674}
                    </Card>
                </div>
            }
            {cf_1676 &&
                <div className="mb-2">
                    <div className="m-2 font-size-20 font-weight-600">Cimentación</div>
                    <Card className="font-size-18 px-2">
                        {cf_1676}
                    </Card>
                </div>
            }
            {cf_1678 &&
                <div className="mb-2">
                    <div className="m-2 font-size-20 font-weight-600">Obra Negra</div>
                    <Card className="font-size-18 px-2">
                        {cf_1678}
                    </Card>
                </div>
            }
            {cf_1680 &&
                <div className="mb-2">
                    <div className="m-2 font-size-20 font-weight-600">Obra Gris</div>
                    <Card className="font-size-18 px-2">
                        {cf_1680}
                    </Card>
                </div>
            }
            {cf_1682 &&
                <div className="mb-2">
                    <div className="m-2 font-size-20 font-weight-600">Acabados</div>
                    <Card className="font-size-18 px-2">
                        {cf_1682}
                    </Card>
                </div>
            }
            {cf_1684 &&
                <div className="mb-2">
                    <div className="m-2 font-size-20 font-weight-600">Venta</div>
                    <Card className="font-size-18 px-2">
                        {cf_1684}
                    </Card>
                </div>
            }
        </div>
    )
};
