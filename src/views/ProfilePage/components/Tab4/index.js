import React from "react";

export const Tab4 = ({ userType, profile }) => {
    const {
        cf_1352,
        cf_1354,
        cf_1348,
        cf_1350
    } = profile;
    return (
        <div className="p-2">
            <div className="border-bottom pb-1">
                <div className="font-gray font-size-12">
                    Numero de cuenta para depositos
                </div>
                <div className="font-size-16 font-weight-600 pl-1">
                    {cf_1348? cf_1348: "-"}
                </div>
            </div>
            <div className="border-bottom pb-1">
                <div className="font-gray font-size-12">
                    Banco
                </div>
                <div className="font-size-16 font-weight-600 pl-1">
                    {cf_1352? cf_1352: "-"}
                </div>
            </div>
            <div className="border-bottom pb-1">
                <div className="font-gray font-size-12">
                    Nombre de titular de la cuenta
                </div>
                <div className="font-size-16 font-weight-600 pl-1">
                    {cf_1354? cf_1354: "-"}
                </div>
            </div>
            <div className="border-bottom pb-1">
                <div className="font-gray font-size-12">
                    CLABE Interbancaria
                </div>
                <div className="font-size-16 font-weight-600 pl-1">
                    {cf_1350? cf_1350: "-"}
                </div>
            </div>
        </div>
    );
};
