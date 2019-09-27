import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Tab5 = ({ userType, profile }) => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const {
        cf_1384,
        cf_1386,
        cf_1494,
        cf_1500,
        cf_1496,
        cf_1498,
        cf_1356,
        cf_1358,
        cf_1360,
        cf_1362,
        cf_1364,
        cf_1366,
        cf_1502,
        cf_1504,
        cf_1512,
        cf_1514,
        cf_1516,
        cf_1510,
        cf_1518,
        cf_1520,
        cf_1522,
        cf_1524,
        cf_1526,
        cf_1528
    } = profile;
    switch (userType) {
        case "Nacional Física":
            return (
                <div className="p-2">
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Nombre de Beneficiario*
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1384? cf_1384: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Apellido Paterno
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1386? cf_1386: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Apellido Materno
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1494? cf_1494: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Porcentaje para el beneficiario
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1500? cf_1500: 0}%
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Telefono Fijo
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1496? cf_1496: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Telefono Celular
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1498? cf_1498: "-"}
                        </div>
                    </div>
                </div>
            )
        case "Extranjera Física":
        case 'Nacional Moral':
            return (
                <div className="p-2">
                    {cf_1356 && cf_1358 && (
                        <div className="col-12 mb-2 py-1 bg-light-gray"
                             onClick={() => setShow1(!show1)}
                        >
                            <FontAwesomeIcon className="font-size-16 font-gray mr-2" icon={show1?"chevron-up":"chevron-down"}/>
                            <span className="font-size-16  font-gray">{cf_1356 + " " + cf_1358}</span>
                        </div>
                    )}
                    {show1 && (
                        <>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Nombre
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1356}
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Apellido Paterno
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1358}
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Apellido Materno
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1360}
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Porcentaje para el beneficiario
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1362} %
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Telefono Fijo
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1364}
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Telefono Celular
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1366}
                                </div>
                            </div>
                        </>
                    )}
                    {cf_1494 && cf_1496 && (
                        <div className="col-12 mb-2 py-1 bg-light-gray"
                             onClick={() => setShow2(!show2)}
                        >
                            <FontAwesomeIcon className="font-size-16 font-gray mr-2" icon={show2?"chevron-up":"chevron-down"}/>
                            <span className="font-size-16  font-gray">{cf_1494 + " " + cf_1496}</span>
                        </div>
                    )}
                    {show2 && (
                        <>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Nombre
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1494}
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Apellido Paterno
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1496}
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Apellido Materno
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1498}
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Porcentaje para el beneficiario
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1500} %
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Telefono Fijo
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1502}
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Telefono Celular
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1504}
                                </div>
                            </div>
                        </>
                    )}

                    {cf_1494 && cf_1496 && (
                        <div className="col-12 mb-2 py-1 bg-light-gray"
                             onClick={() => setShow3(!show3)}
                        >
                            <FontAwesomeIcon className="font-size-16 font-gray mr-2" icon={show3?"chevron-up":"chevron-down"}/>
                            <span className="font-size-16  font-gray">{cf_1494 + " " + cf_1496}</span>
                        </div>
                    )}
                    {show3 && (
                        <>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Nombre
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1494}
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Apellido Paterno
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1496}
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Apellido Materno
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1510}
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Porcentaje para el beneficiario
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1512} %
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Telefono Fijo
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1514}
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Telefono Celular
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1516}
                                </div>
                            </div>
                        </>
                    )}
                    {cf_1518 && cf_1520 && (
                        <div className="col-12 mb-2 py-1 bg-light-gray"
                             onClick={() => setShow4(!show4)}
                        >
                            <FontAwesomeIcon className="font-size-16 font-gray mr-2" icon={show4?"chevron-up":"chevron-down"}/>
                            <span className="font-size-16  font-gray">{cf_1518 + " " + cf_1520}</span>
                        </div>
                    )}
                    {show4 && (
                        <>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Nombre
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1518}
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Apellido Paterno
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1520}
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Apellido Materno
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1522}
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Porcentaje para el beneficiario
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1524} %
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Telefono Fijo
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1526}
                                </div>
                            </div>
                            <div className="border-bottom pb-1">
                                <div className="font-gray font-size-12">
                                    Telefono Celular
                                </div>
                                <div className="font-size-16 font-weight-600 pl-1">
                                    {cf_1528}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            );
        default: return null
    }
};
