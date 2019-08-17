import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import BootstrapInput from "../../../../../components/BootstrapInput";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

class NationalPhysic extends Component{

    render() {
        const { title, skipStep } = this.props;
        return (
            <div>
                <div className="w-100 text-center register-title mt-4 mb-2">
                    {title}
                </div>
                <div className="w-100">
                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Nombre*"}
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
                        <input
                            className='form-control form-control'
                            placeholder={"Teléfono*"}
                        />
                    </div>
                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Ocupacion o profesión*"}
                        />
                    </div>
                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Fecha de nacimiento*"}
                        />
                    </div>
                    <div className="form-group w-100">
                        <FormControl className="w-100 mb-2">
                            <Select
                                value={""}
                                displayEmpty
                                placeholder= "Select Options"
                                input={<BootstrapInput/>}
                            >
                                <MenuItem value="" disabled>
                                    País de nacimiento*
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="form-group w-100">
                        <FormControl className="w-100 mb-2">
                            <Select
                                value={""}
                                displayEmpty
                                placeholder= "Select Options"
                                input={<BootstrapInput/>}
                            >
                                <MenuItem value="" disabled>
                                    Entidad federativa de nacimiento*
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Lugar de nacimiento*"}
                        />
                    </div>

                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Nacionalidad*"}
                        />
                    </div>

                    <div className="form-group w-100">
                        <FormControl className="w-100 mb-2">
                            <Select
                                value={""}
                                displayEmpty
                                placeholder= "Select Options"
                                input={<BootstrapInput/>}
                            >
                                <MenuItem value="" disabled>
                                    Genero*
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="form-group w-100">
                        <FormControl className="w-100 mb-2">
                            <Select
                                value={""}
                                displayEmpty
                                placeholder= "Select Options"
                                input={<BootstrapInput/>}
                            >
                                <MenuItem value="" disabled>
                                    Estado civil*
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="form-group w-100">
                        <FormControl className="w-100 mb-2">
                            <Select
                                value={""}
                                displayEmpty
                                placeholder= "Select Options"
                                input={<BootstrapInput/>}
                            >
                                <MenuItem value="" disabled>
                                    Régimen conyugal
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="form-group w-100">
                        <input
                            className='form-control form-control'
                            placeholder={"Conyuge"}
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



export default NationalPhysic;
