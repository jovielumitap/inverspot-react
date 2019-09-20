import React, {Component} from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

class Register extends Component {
    state = {
        username: "",
        password: "",
        confirmPassword: "",
        preferredAdvisor: "",
        advisor: false,
        accept: false
    };
    handleChangeCheck = name => (event, checked) => {
        this.setState({[name]: checked});
    };

    handleChange = name => (event) => {
        this.setState({[name]: event.target.value});
    };
    handleSubmit = () => {
        this.props.history.push('sign-up-step')
    };
    render() {
        const { username, password, confirmPassword, preferredAdvisor,  advisor, accept } = this.state;
        return (
            <div className='root-container py-5'>
                <div className="account-panel-width align-center position-absolute">
                    <form noValidate autoComplete="off">
                        <div className="form-group w-100 text-center register-title">
                            Llena los campos para iniciar tu registro
                        </div>
                        <div className="form-group w-100">
                            <input
                                className='form-control form-control-lg'
                                value={username}
                                placeholder={"username"}
                                onChange={this.handleChange('username')}
                            />
                        </div>
                        <div className="form-group w-100">
                            <input
                                className='form-control  form-control-lg'
                                value={password}
                                type={"password"}
                                placeholder={"password"}
                                onChange={this.handleChange('password')}
                            />
                        </div>
                        <div className="form-group w-100 px-1 register-note">
                            Nota: La contraseña debe ser de por lo menos 7 caracteres de largo.
                            Para hacerla más segura, utiliza mayúsculas, minúsculas, numeros y
                            simbolos ! “ ? $ % * &
                        </div>
                        <div className="form-group w-100 mb-0">
                            <input
                                className='form-control  form-control-lg'
                                value={confirmPassword}
                                type={"password"}
                                placeholder={"Confirm password"}
                                onChange={this.handleChange('confirmPassword')}
                            />
                        </div>
                        <div className="form-group d-flex align-items-center mb-0">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color={"primary"}
                                        checked={advisor}
                                        onChange={this.handleChangeCheck('advisor')}
                                    />
                                }
                                label={<span className="register-check-label">Ya cuento con un asesor</span>}
                            />
                        </div>
                        {!advisor &&
                            <div className="form-group w-100 mb-0">
                                <input
                                    className='form-control  form-control-lg'
                                    value={preferredAdvisor}
                                    type={"text"}
                                    placeholder={"Asesor Preferido"}
                                    onChange={this.handleChange('preferredAdvisor')}
                                />
                            </div>}
                        <div className="form-group d-flex align-items-center mb-0">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color={"primary"}
                                        checked={accept}
                                        onChange={this.handleChangeCheck('accept')}
                                    />
                                }
                                label={<span className="register-check-label">Acepto los Terminos, Condiciones y Politicas de privacidad</span>}
                            />
                        </div>
                        <div className="form-group d-flex justify-content-between align-items-center">
                            <div>
                                <Button onClick={() => this.handleSubmit()}
                                        variant="contained"
                                        color="primary">
                                    SignUp
                                </Button>
                            </div>
                            <div>
                                <Link to="/sign-in"
                                      title="Register"><span className="register-login-text">Already member?</span></Link>
                            </div>
                        </div>


                    </form>
                </div>
            </div>

        )
    }
}
export default Register;
