import React from "react";

export const Tab2 = (props) => {
    const { cf_1015, cf_1208, cf_991, cf_979, cf_1230, cf_1013, cf_1236, listprice } = props.opportunityDetail;
    return (
        <div className="p-4">
            <div className="">
                <div className="text-center font-size-20 font-weight-600 font-purple">
                    Proceso de fondeo
                </div>
                <div className="process-item justify-content-between d-flex">
                    <div className="font-size-14 font-weight-600">Pago inicial</div>
                    <div className="font-size-14 font-weight-600">${parseFloat(cf_1015? cf_1015: 0)}</div>
                </div>
                <div className="process-item-none-bg justify-content-between d-flex">
                    <div className="font-size-14 font-weight-600">Pago contra venta</div>
                    <div className="font-size-14 font-weight-600">${parseFloat(cf_1208? cf_1208: 0)}</div>
                </div>
                <div className="process-item-none-bg justify-content-between d-flex">
                    <div className="font-size-14 font-weight-600">Costo total</div>
                    <div className="font-size-14 font-weight-600">${parseFloat(cf_991? cf_991: 0)}</div>
                </div>
            </div>
            <div className="">
                <div className="text-center font-size-20 font-weight-600  font-purple">
                    Proceso de venta
                </div>
                <div className="process-item justify-content-between d-flex">
                    <div className="font-size-14 font-weight-600">Estimado de venta</div>
                    <div className="font-size-14 font-weight-600">${parseFloat(cf_979? cf_979: 0)}</div>
                </div>
                <div className="process-item-none-bg justify-content-between d-flex">
                    <div className="font-size-14 font-weight-600">Comision de venta</div>
                    <div className="font-size-14 font-weight-600">${parseFloat(cf_1230? cf_1230: 0)}</div>
                </div>
                <div className="process-item-none-bg justify-content-between d-flex">
                    <div className="font-size-14 font-weight-600">Utilidad neta estimada</div>
                    <div className="font-size-14 font-weight-600">${parseFloat(cf_1013? cf_1013: 0)}</div>
                </div>
                <div className="process-item-none-bg justify-content-between d-flex">
                    <div className="font-size-14 font-weight-600">Plazo estimado</div>
                    <div className="font-size-14 font-weight-600">${parseFloat(cf_979? cf_979: 0)}</div>
                </div>
            </div>
            <div className="row w-100">
                <div className="col-6">
                    <div className="d-flex justify-content-center">
                        <div className="circle-item">
                            <div className="align-center position-absolute font-size-14 font-weight-600 font-purple">
                                ${parseFloat(cf_1015? cf_1015: 0)}
                            </div>
                        </div>
                    </div>
                    <div className="text-center font-size-16 font-weight-600">Objetivo de capatación</div>
                </div>

                <div className="col-6">
                    <div className="d-flex justify-content-center">
                        <div className="circle-item">
                            <div className="align-center position-absolute font-size-14 font-weight-600 font-purple">
                                ${parseFloat(listprice? listprice: 0)}
                            </div>
                        </div>
                    </div>
                    <div className="text-center font-size-16 font-weight-600">Inversion minima</div>
                </div>

                <div className="col-6">
                    <div className="d-flex justify-content-center">
                        <div className="circle-item">
                            <div className="align-center position-absolute font-size-14 font-weight-600 font-purple">
                                {parseFloat(cf_1236? cf_1236: 0)}%
                            </div>
                        </div>
                    </div>
                    <div className="text-center font-size-16 font-weight-600">Rendimientos esperados</div>
                </div>

                <div className="col-6">
                    <div className="d-flex justify-content-center">
                        <div className="circle-item">
                            <div className="align-center position-absolute font-size-14 font-weight-600 font-purple">
                                ${parseFloat(cf_979? cf_979: 0)}
                            </div>
                        </div>
                    </div>
                    <div className="text-center font-size-16 font-weight-600">Meses</div>
                </div>

            </div>
        </div>
    )
};
