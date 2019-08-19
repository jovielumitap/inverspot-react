import React, {Component} from "react";

class MoralForeigner3 extends Component {
    state = {
        file: null
    };
    onChangeAvatar = (e) => {
        console.log("details", e.target.files[0]);
        this.setState({
            file: e.target.files[0],
        });
    };

    render() {
        const {title, skipStep} = this.props;
        const {file} = this.state;
        return (
            <div>
                <div className="w-100 text-center register-title mt-4 mb-2">
                    {title}
                </div>
                <div className="w-100">
                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Busca tu domicilio"}
                        />
                    </div>
                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Calle*"}
                        />
                    </div>

                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Num. Exterior*"}
                        />
                    </div>
                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Num. Interior"}
                        />
                    </div>
                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Colonia*"}
                        />
                    </div>
                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Delegacion o Municipio*"}
                        />
                    </div>
                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Estado*"}
                        />
                    </div>
                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Pais*"}
                        />
                    </div>
                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Codigo Postal*"}
                        />
                    </div>

                    <div className="form-group w-100">
                        <div className="">
                            Comprobante de domicilio Actual
                        </div>
                        <div className="d-flex flex-row">
                            <div className="file-button" onClick={() => this.filePick.click()}>
                                Archivos...
                            </div>
                            <div className="ml-2 text-center font-size-16">
                                {file && file.name ? file.name : ""}
                            </div>
                            <input
                                type="file"
                                hidden
                                ref={c => this.filePick = c}
                                onChange={e => this.onChangeAvatar(e)}
                            />
                        </div>
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


export default MoralForeigner3;
