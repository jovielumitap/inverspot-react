import React from "react";

export const Tab3 = ({ userType, profile }) => {
    const {
        bill_street,
        bill_num_ext,
        bill_num_int,
        bill_pobox,
        bill_city,
        bill_state,
        bill_country,
        bill_code,
        comprobante_domicilio,
    } = profile;
    switch (userType) {
        case "Nacional Física":
            return (
                <div className="p-2">
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Calle
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {bill_street? bill_street: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Num. Exterior
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {bill_num_ext? bill_num_ext: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Num. Interio
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {bill_num_int? bill_num_int: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Colonia
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {bill_pobox? bill_pobox: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Delegacion o Municipio
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {bill_city? bill_city: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Estado
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {bill_state? bill_state: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Pais
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {bill_country? bill_country: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Codigo Posta
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            {bill_code? bill_code: "-"}
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Comprobante de domicilio Actual
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            <img
                                src={comprobante_domicilio}
                                alt={"Id card"}
                            />
                        </div>
                    </div>
                </div>
            )
        case "national":
            return (
                <div className="p-2">
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Calle
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            José Antonio
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Num. Exterior
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Galindo
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Num. Interio
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Jiménez
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Colonia
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            5575106678
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Delegacion o Municipio
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            -
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Estado
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            09 Feb 1983
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Pais
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            México
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Codigo Posta
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            CDMX
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Comprobante de domicilio Actual
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            <img
                                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hPQEiOgWfOgiaLp_BYJ6ih7ASfbBSxbsriZCzJ3VJInKtI-E"}
                                alt={"Id card"}
                            />
                        </div>
                    </div>
                </div>
            )
        default: return null
    }
};
