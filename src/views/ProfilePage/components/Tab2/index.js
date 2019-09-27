import React from "react";

export const Tab2 = ({ userType, profile }) => {
    const {
        razon_social,
        siccode,
        cf_1374,
        cf_1380,
        id_representante_legal,
        cf_1378,
        profesion,
        ns_fiel,
        moral_telefono,
        email1,
        acta_constitutiva,
        cedula_fiscal,
        poder_representante,
        fecha_nacimiento,
        pais_nacimiento,
        cf_1368,
        cf_1372,
        nombre_director,
        jerarquia_inferior,
        moral_consejo,
        ownership,
    } = profile;
    switch (userType) {
        case "Nacional Física":
            return (
                <div className="p-2">
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Razon Social
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {razon_social? razon_social: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            RFC
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {siccode? siccode: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Tipo de identificación
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1374? cf_1374: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Clave de elector
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1380? cf_1380: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Identificacion oficial
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            <img
                                src={id_representante_legal}
                                alt={"Id card"}
                            />
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            CURP
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1378? cf_1378: "-"}
                        </div>
                    </div>
                </div>
            );
        case "Extranjera Física":
            return (
                <div className="p-2">
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Razon Social
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {razon_social? razon_social: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            RFC
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {siccode? siccode: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Tipo de identificación
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1374? cf_1374: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Clave de elector
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1380? cf_1380: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Identificacion oficial
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            <img
                                src={id_representante_legal}
                                alt={"Id card"}
                            />
                        </div>
                    </div>
                </div>
            );
        case "Nacional Moral":
            return (
                <div className="p-2">
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Razon Social
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {razon_social}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            RFC
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {siccode}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Giro mercantil, actividad u objeto social
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {profesion}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Número de serie de la Firma Electrónica Avanzada
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {ns_fiel}
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Número telefónico del domicilio
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {moral_telefono}
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Correo
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {email1}
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Acta constitutiva Actual
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            <img
                                src={acta_constitutiva}
                                alt={"Id card"}
                                className="w-50 border border-dark"
                            />
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Cédula de identificacion fiscal
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            <img
                                src={cedula_fiscal}
                                alt={"Id card"}
                                className="w-50 border border-dark"
                            />
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Poderes del representante
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            <img
                                src={poder_representante}
                                alt={"Id card"}
                                className="w-50 border border-dark"
                            />
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Fecha de constitución
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {fecha_nacimiento}
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            País de constitución
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {pais_nacimiento}
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Lugar de constitución
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1368}
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Nacionalidad
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1372}
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Nombre del director general
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {nombre_director}
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Jerarquía inmediata inferior
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {jerarquia_inferior}
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Nombres del consejo de Admin.
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {moral_consejo}
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Nombre del propietario
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {ownership}
                        </div>
                    </div>
                </div>
            );
        default: return null
    }
};
