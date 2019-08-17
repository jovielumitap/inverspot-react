import React from "react";

export const Tab1 = ({ userType }) => {
    switch (userType) {
        case "foreign":
            return (
                <div className="p-2">
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Nombre
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            José Antonio
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Apellido Paterno
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Galindo
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Apellido Materno
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Jiménez
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Teléfono
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            5575106678
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Ocupacion o profesión
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            -
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Fecha de nacimiento
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            09 Feb 1983
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            País de nacimiento
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            México
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Entidad federativa de nacimiento
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            CDMX
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Lugar de nacimiento
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Coyoacan, CDMX, México
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Nacionalidad
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Mexicano
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Genero
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Masculino
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Estado civil
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Soltero
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Régimen conyugal
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            -
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Conyuge
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            -
                        </div>
                    </div>
                </div>
            );
        case "national":
            return (
                <div className="p-2">
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Nombre del representante
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            José Antonio
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Apellido Paterno
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Galindo
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Apellido Materno
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Jiménez
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Identificacion oficial
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            <img
                                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hPQEiOgWfOgiaLp_BYJ6ih7ASfbBSxbsriZCzJ3VJInKtI-E"}
                                alt={"Id card"}
                            />
                        </div>
                    </div>
                </div>
            );
        default: return null
    }

};
