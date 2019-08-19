import React, {Component} from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import BootstrapInput from "../../../../../../components/BootstrapInput";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class PhysicalForeigner2 extends Component {
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
                            placeholder={"Razon Social"}
                        />
                    </div>

                    <div className="form-group w-100">
                        <FormControl className="w-100 mb-2">
                            <Select
                                value={""}
                                displayEmpty
                                placeholder="Select Options"
                                input={<BootstrapInput/>}
                            >
                                <MenuItem value="" disabled>
                                    Tipo de identificación*
                                </MenuItem>
                            </Select>
                        </FormControl>
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

                    <div className="form-group w-100">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color={"primary"}
                                />
                            }
                            label={<span className="">
                                    Manifestación de la persona
                                    física en la que señale que actúa
                                    por cuenta propia.*</span>}
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


export default PhysicalForeigner2;
