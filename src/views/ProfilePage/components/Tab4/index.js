import React from "react";

export const Tab4 = ({ userType }) => {
    switch (userType) {
        case "foreign":
            return (
                <div className="p-2">
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Numero de cuenta para depositos
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            0000 0000 0000 0000
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Banco
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Banamex
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Nombre de titular de la cuenta
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            José Antonio Galindo
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            CLABE Interbancaria
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            5575106678
                        </div>
                    </div>
                </div>
            )
        case "national":
            return (
                <div className="p-2">
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Numero de cuenta para depositos
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            0000 0000 0000 0000
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Banco
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            Banamex
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            Nombre de titular de la cuenta
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            José Antonio Galindo
                        </div>
                    </div>
                    <div className="border-bottom pb-1">
                        <div className="font-gray font-size-12">
                            CLABE Interbancaria
                        </div>
                        <div className="font-size-16 font-weight-600 pl-1">
                            5575106678
                        </div>
                    </div>
                </div>
            )
        default: return null
    }
};
