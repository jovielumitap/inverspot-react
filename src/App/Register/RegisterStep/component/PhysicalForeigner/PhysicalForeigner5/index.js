import React, {Component} from "react";

class PhysicalForeigner5 extends Component {
    render() {
        const {title, finishStep} = this.props;
        return (
            <div>
                <div className="w-100 text-center register-title mt-4 mb-2">
                    {title}
                </div>
                <div className="w-100">
                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Nombre de Beneficiario*"}
                        />
                    </div>
                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Apellido Paterno*"}
                        />
                    </div>

                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Apellido Materno*"}
                        />
                    </div>
                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Porcentaje para el beneficiario*"}
                        />
                    </div>

                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Telefono Fijo*"}
                        />
                    </div>

                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Telefono Celular*"}
                        />
                    </div>


                    <div className="w-50 origin-button mx-auto mb-2"
                         onClick={() => finishStep()}
                    >
                        Guardar y Terminar
                    </div>
                </div>
            </div>
        )
    }
}


export default PhysicalForeigner5;
