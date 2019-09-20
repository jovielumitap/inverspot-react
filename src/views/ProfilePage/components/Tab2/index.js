import React from "react";

export const Tab2 = ({ userType, profile }) => {
    const {
        razon_social,
        siccode,
        cf_1374,
        cf_1380,
        id_representante_legal,
        cf_1378
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
            )
        case "national":
            return (
                <div className="p-2">
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Razon Social
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Extranjera Moral
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            RFC
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            TRE1400034I5
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Giro mercantil, actividad u objeto social
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Jiménez
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Número de serie de la Firma Electrónica Avanzada
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            8766015755
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Número telefónico del domicilio
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            5575106678
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Correo
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            ja.galindo@gmail.com
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Acta constitutiva Actual
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            <img
                                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwZAGHkX0MkEwne5SOCkbb9RbWmCsSxLROou1bgL86JbtFZsZAA"}
                                alt={"Id card"}
                            />
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Cédula de identificacion fiscal
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            <img
                                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwZAGHkX0MkEwne5SOCkbb9RbWmCsSxLROou1bgL86JbtFZsZAA"}
                                alt={"Id card"}
                            />
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Poderes del representante
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            <img
                                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwZAGHkX0MkEwne5SOCkbb9RbWmCsSxLROou1bgL86JbtFZsZAA"}
                                alt={"Id card"}
                            />
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Fecha de constitución
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            09 Feb 2010
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            País de constitución
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            México
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Lugar de constitución
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            CDMX, México
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Nacionalidad
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Mexicana
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Nombre del director general
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            José Antonio Galindo Jiménez
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Jerarquía inmediata inferior
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Andres Galindo Jiménez
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Nombres del consejo de Admin.
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Sandra Jimenez
                        </div>
                    </div>

                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Nombre del propietario
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            José Antonio Galindo Jiménez
                        </div>
                    </div>
                </div>
            )
        default: return null
    }
};
