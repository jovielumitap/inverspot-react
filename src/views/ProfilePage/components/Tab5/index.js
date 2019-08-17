import React from "react";

export const Tab5 = ({ userType }) => {
    switch (userType) {
        case "foreign":
            return (
                <div className="p-2">
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Nombre de Beneficiario*
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Enrique
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Apellido Paterno
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Domingues
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Apellido Materno
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Ramirez
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Porcentaje para el beneficiario
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            12%
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Telefono Fijo
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            36 00 00 00
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Telefono Celular
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            33 00 00 00 00
                        </div>
                    </div>
                </div>
            )
        case "national":
            return (
                <div className="p-2">
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Nombre de Beneficiario*
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Enrique
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Apellido Paterno
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Domingues
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Apellido Materno
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Ramirez
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Porcentaje para el beneficiario
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            12%
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Telefono Fijo
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            36 00 00 00
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Telefono Celular
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            33 00 00 00 00
                        </div>
                    </div>
                </div>
            )
        default: return null
    }
};
