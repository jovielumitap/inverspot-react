import React from "react";

export const Tab2 = (props) => {
    const { cf_1015, cf_1208, cf_991, cf_979, cf_1230, cf_1013, cf_1236} = props.opportunityDetail;
    return (
        <div className="p-4">
            <div className="">
                <div className="text-center font-size-20 font-weight-600 font-red">
                    Proceso de fondeo
                </div>
                <div className="process-item justify-content-between d-flex">
                    <div className="font-size-14 font-weight-600 font-purple">Pago inicial</div>
                    <div className="font-size-14 font-weight-600 font-purple">${parseFloat(cf_1015)}</div>
                </div>
                <div className="process-item-none-bg justify-content-between d-flex">
                    <div className="font-size-14 font-weight-600 font-purple">Pago contra venta</div>
                    <div className="font-size-14 font-weight-600 font-purple">${parseFloat(cf_1208)}</div>
                </div>
                <div className="process-item-none-bg justify-content-between d-flex">
                    <div className="font-size-14 font-weight-600 font-purple">Costo total</div>
                    <div className="font-size-14 font-weight-600 font-purple">${parseFloat(cf_991)}</div>
                </div>
            </div>
            <div className="">
                <div className="text-center font-size-20 font-weight-600 font-red">
                    Proceso de venta
                </div>
                <div className="process-item justify-content-between d-flex">
                    <div className="font-size-14 font-weight-600 font-purple">Estimado de venta</div>
                    <div className="font-size-14 font-weight-600 font-purple">${parseFloat(cf_979)}</div>
                </div>
                <div className="process-item-none-bg justify-content-between d-flex">
                    <div className="font-size-14 font-weight-600 font-purple">Comision de venta</div>
                    <div className="font-size-14 font-weight-600 font-purple">${parseFloat(cf_1230)}</div>
                </div>
                <div className="process-item-none-bg justify-content-between d-flex">
                    <div className="font-size-14 font-weight-600 font-purple">Utilidad neta estimada</div>
                    <div className="font-size-14 font-weight-600 font-purple">${parseFloat(cf_1013)}</div>
                </div>
                <div className="process-item-none-bg justify-content-between d-flex">
                    <div className="font-size-14 font-weight-600 font-purple">Plazo estimado</div>
                    <div className="font-size-14 font-weight-600 font-purple">${parseFloat(cf_979)}</div>
                </div>
            </div>
            <div className="row w-100">
                <div className="col-6">
                    <div className="d-flex justify-content-center">
                        <div className="circle-item">
                            <div className="align-center position-absolute font-size-14 font-weight-600 font-purple">
                                ${parseFloat(cf_1015)}
                            </div>
                        </div>
                    </div>
                    <div className="text-center font-size-16 font-weight-600 font-red">Objetivo de capatación</div>
                </div>

                <div className="col-6">
                    <div className="d-flex justify-content-center">
                        <div className="circle-item">
                            <div className="align-center position-absolute font-size-14 font-weight-600 font-purple">
                                ${parseFloat(cf_1015)}
                            </div>
                        </div>
                    </div>
                    <div className="text-center font-size-16 font-weight-600 font-red">Objetivo de capatación</div>
                </div>

                <div className="col-6">
                    <div className="d-flex justify-content-center">
                        <div className="circle-item">
                            <div className="align-center position-absolute font-size-14 font-weight-600 font-purple">
                                {parseFloat(cf_1236)}%
                            </div>
                        </div>
                    </div>
                    <div className="text-center font-size-16 font-weight-600 font-red">Objetivo de capatación</div>
                </div>

                <div className="col-6">
                    <div className="d-flex justify-content-center">
                        <div className="circle-item">
                            <div className="align-center position-absolute font-size-14 font-weight-600 font-purple">
                                ${parseFloat(cf_979)}
                            </div>
                        </div>
                    </div>
                    <div className="text-center font-size-16 font-weight-600 font-red">Objetivo de capatación</div>
                </div>

            </div>
        </div>
    )
};
