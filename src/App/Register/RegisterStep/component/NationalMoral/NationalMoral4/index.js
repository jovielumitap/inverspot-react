import React, {Component} from "react";

class NationalMoral4 extends Component {
    render() {
        const {title, skipStep} = this.props;
        return (
            <div>
                <div className="w-100 text-center register-title mt-4 mb-2">
                    {title}
                </div>
                <div className="w-100">
                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Numero de cuenta para depositos*"}
                        />
                    </div>
                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Banco*"}
                        />
                    </div>

                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Nombre de titular de la cuenta*"}
                        />
                    </div>
                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"CLABE Interbancaria*"}
                        />
                    </div>


                    <div className="w-50 origin-button mx-auto mb-2"
                         onClick={() => skipStep()}
                    >
                        Siguiente >
                    </div>
                </div>
            </div>
        )
    }
}


export default NationalMoral4;
