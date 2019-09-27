import React from "react";

export const Tab1 = ({ userType, profile }) => {
    const {
        ownership,
        cf_1130,
        cf_1132,
        phone,
        profesion,
        fecha_nacimiento,
        pais_nacimiento,
        entidad_nacimiento,
        cf_1368,
        cf_1372,
        cf_1370,
        cf_1382,
        cf_1384,
        cf_1386,
        accountname,
        id_representante_legal
    } = profile;
    switch (userType) {
        case "Nacional Física":
        case "Extranjera Física":
            return (
                <div className="p-2">
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Nombre
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {ownership? ownership: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Apellido Paterno
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1130? cf_1130: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Apellido Materno
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1132? cf_1132: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Teléfono
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {phone? phone: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Ocupacion o profesión
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {profesion? profesion: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Fecha de nacimiento
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {fecha_nacimiento? fecha_nacimiento: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            País de nacimiento
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {pais_nacimiento? pais_nacimiento: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Entidad federativa de nacimiento
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {entidad_nacimiento? entidad_nacimiento: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Lugar de nacimiento
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1368? cf_1368: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Nacionalidad
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1372? cf_1372: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Genero
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1370? cf_1370: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Estado civil
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1382? cf_1382: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Régimen conyugal
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1384? cf_1384: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Conyuge
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1386? cf_1386: "-"}
                        </div>
                    </div>
                </div>
            );
        case "Nacional Moral":
            return (
                <div className="p-2">
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Nombre del representante
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {accountname? accountname: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Apellido Paterno
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1130? cf_1130: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Apellido Materno
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {cf_1132? cf_1132: "-"}
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
        default: return null
    }

};
