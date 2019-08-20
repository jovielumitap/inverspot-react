import React, {Component} from "react";

class MoralForeigner1 extends Component {
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
                            placeholder={"Nombre del representante*"}
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
                            placeholder={"Apellido Materno"}
                        />
                    </div>

                    <div className="form-group w-100">
                        <div className="">
                            Identificacion oficial
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


export default MoralForeigner1;
