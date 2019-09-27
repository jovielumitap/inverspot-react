import React, {Component} from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "react-select";
import {connect} from "react-redux";
import {
    getAsesoresAction,
    getPrivacyPolicyContentAction,
    getTermsConditionContentAction,
    registerWithEmailPassAction
} from "../../redux/actions";
import TermsPrivacyDialog from "../../components/TermsPrivacyDialog";

class Register extends Component {

    state = {
        email: "",
        password: "",
        confirmPassword: "",
        advisor: false,
        accept: false,
        preferredAdvisor: "",
        errors: {
            email: false,
            password: false,
            confirmPassword: false,
            preferredAdvisor: false,
            advisor: false,
            accept: false,
        },
        open: false,
        content: ''
    };

    componentDidMount() {
        this.props.dispatch(getAsesoresAction());
        this.props.dispatch(getTermsConditionContentAction());
        this.props.dispatch(getPrivacyPolicyContentAction());
    }

    componentDidUpdate() {
        if (this.props.user.token !== null && this.props.user.token !== undefined) {
            this.props.history.push('/');
        }
    }

    handleChangeCheck = name => (event, checked) => {
        let errors = {};
        if (name === 'accept') {
            errors[name] = !checked
        }
        this.setState({[name]: checked, errors});
    };

    handleChange = name => (event) => {
        let errors = {};
        if (name === 'confirmPassword') {
            errors[name] = event.target.value === '' || event.target.value !== this.state.password;
        }

        this.setState({[name]: event.target.value, errors});
    };
    handleChangeSelect = selectedOption => {
        this.setState({preferredAdvisor: selectedOption});
        console.log(`Option selected:`, selectedOption);
    };
    handleSubmit = () => {
        // this.props.history.push('sign-up-step');
        if (!this.validForm()) {
            return;
        }
        const { email, password, advisor, preferredAdvisor } = this.state;
        let body = {
            email,
            password,
        };
        if (!advisor && preferredAdvisor !== null) {
            body.assigned_user_id = preferredAdvisor.id;
        }
        this.props.dispatch(registerWithEmailPassAction(body));
    };
    validForm = () => {
        const {email, password, confirmPassword, accept} = this.state;
        let errors = {};
        if (email === '' ||
            password === '' ||
            confirmPassword === '' ||
            !accept || !this.checkValidPassword(password) ||
            password !== confirmPassword
        ) {
            errors.email = email === '';
            errors.password = password === '' || !this.checkValidPassword(password);
            errors.confirmPassword = confirmPassword === '' || confirmPassword !== password;
            errors.accept = !accept;
            this.setState({errors});
            return false;
        }
        return true;
    };
    checkValidPassword = p => {
        // eslint-disable-next-line
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        const isOk = re.test(p);
        console.log({isOk});
        return isOk;
    };
    onViewTermsPrivacy = (content) => {
        this.setState((state) => {
            return {
                open: !state.open,
                content
            }
        })
    };
    onHandleModal = () => {
        this.setState((state) => {
            return {
                open: !state.open
            }
        })
    };
    render() {
        const {
            email,
            password,
            confirmPassword,
            preferredAdvisor,
            advisor,
            accept,
            errors,
            open,
            content
        } = this.state;
        const { asesores, terms, privacy } = this.props;
        const formattedAsesores = asesores.map(a => {
            return {label: a.name, value: a.id}
        });
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
                                value={email}
                                placeholder={"Correo electrónico"}
                                onChange={this.handleChange('email')}
                            />
                            <div
                                className={`invalid-text ${errors.email ? '' : 'invalid-text-invisible'}`}>{"* Correo electrónico es obligatorio"}</div>
                        </div>
                        <div className="form-group w-100">
                            <input
                                className='form-control  form-control-lg'
                                value={password}
                                type={"password"}
                                placeholder={"Contraseña"}
                                onChange={this.handleChange('password')}
                            />
                            <div
                                className={`invalid-text ${errors.password ? '' : 'invalid-text-invisible'}`}>{"* La contraseña es obligatoria o no es segura"}</div>
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
                                placeholder={"Confirmar contraseña"}
                                onChange={this.handleChange('confirmPassword')}
                            />
                            <div
                                className={`invalid-text ${errors.confirmPassword ? '' : 'invalid-text-invisible'}`}>{"* Su contraseña no coincide"}</div>
                        </div>
                        <div className="form-group d-flex align-items-center mb-0">
                            <Checkbox
                                color={"primary"}
                                checked={advisor}
                                onChange={this.handleChangeCheck('advisor')}
                            />
                            <span className="">Ya cuento con un asesor</span>
                        </div>
                        {!advisor &&
                        <div className="form-group w-100 mb-0">
                            <Select
                                value={preferredAdvisor}
                                onChange={this.handleChangeSelect}
                                options={formattedAsesores}
                                placeholder={"Asesor Preferido"}
                                isSearchable
                            />
                        </div>}
                        <div className="form-group d-flex align-items-center my-2">
                            <Checkbox
                                color={"primary"}
                                checked={accept}
                                onChange={this.handleChangeCheck('accept')}
                            />
                            <div>
                                <span className="">
                                    {'Acepto los '}
                                </span>
                                <span className="register-check-label"
                                      onClick={() => this.onViewTermsPrivacy(terms)}
                                >
                                    {'Terminos, Condiciones'}
                                </span>
                                <span className="">
                                    {' y '}
                                </span>
                                <span className="register-check-label"
                                      onClick={() => this.onViewTermsPrivacy(privacy)}
                                >
                                    {'Politicas de privacidad'}
                                </span>
                            </div>
                        </div>
                        <div
                            className={`invalid-text ${errors.accept ? '' : 'invalid-text-invisible'}`}>{"* Debes aceptar la politica de privacidad y terminos y condiciones"}</div>
                        <div className="form-group d-flex justify-content-between align-items-center">
                            <div>
                                <Button onClick={() => this.handleSubmit()}
                                        variant="contained"
                                        color="primary">
                                    Registrar
                                </Button>
                            </div>
                            <div>
                                <Link to="/sign-in"
                                      title="Register"><span
                                    className="register-login-text">¿Ya registrado?</span></Link>
                            </div>
                        </div>


                    </form>
                </div>
                {open && (
                    <TermsPrivacyDialog
                        open={open}
                        onHandleModal={this.onHandleModal}
                        content={content}
                    />
                )}
            </div>

        )
    }
}

const mapStateToProps = state => ({
    asesores: state.auth.asesores,
    user: state.auth.user,
    terms: state.auth.terms,
    privacy: state.auth.privacy
});


export default connect(mapStateToProps)(Register);
