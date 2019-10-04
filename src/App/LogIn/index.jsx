/* eslint-disable object-curly-newline */
import React, {Component} from 'react';

import {connect} from 'react-redux';

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Link} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import { authenticate } from "../../redux/actions";

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            username_error: false,
            password_error: false,
            isRemember: false
        };

    }
    componentDidUpdate() {
        if (this.props.user.token !== null && this.props.user.token !== undefined) {
            this.props.history.push('/');
        }
    }
    handleChangeCheck = name => (event, checked) => {
        this.setState({[name]: checked});
    };
    handleChange = name => (event) => {
        const name_error = name + "_error";
        this.setState({
            [name]: event.target.value,
            [name_error]: event.target.value === ""
        });
    };

    onSubmit = () => {
        const { username, password, isRemember } = this.state;
        if (username === "" || password === "") {
            this.setState({username_error: username === ""});
            this.setState({password_error: password === ""});
            return;
        }
        const token = btoa(`${username}:${password}`);
        this.props.dispatch(authenticate(token, isRemember));
    };
    render() {
        const {username, password, isRemember, username_error, password_error} = this.state;
        const logo = `${process.env.PUBLIC_URL}/img/logo-inverspot-white.png`;
        return (
            <div className='root-container login-panel-background'>
                <div className="account-panel-width align-center position-absolute w-75">
                    <form noValidate autoComplete="off">
                        <div className="form-group w-75 text-center m-auto">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="form-group w-100 mt-4">
                            <input
                                className='form-control form-control-lg'
                                value={username}
                                type={"email"}
                                placeholder={"Usuario"}
                                onChange={this.handleChange('username')}
                            />
                            <div className={`invalid-text ${username_error? '': 'invalid-text-invisible'}`}>{"* Username is required"}</div>
                        </div>
                        <div className="form-group w-100">
                            <input
                                className='form-control  form-control-lg'
                                value={password}
                                type={"password"}
                                placeholder={"Contraseña"}
                                onChange={this.handleChange('password')}
                            />
                            <div className={`invalid-text ${password_error? '': 'invalid-text-invisible'}`}>{"* Password is required"}</div>
                        </div>
                        <div className="form-group w-100">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        style={{
                                            color: "white",
                                        }}
                                        checked={isRemember}
                                        onChange={this.handleChangeCheck('isRemember')}
                                    />
                                }
                                label={<span className="text-white">Recuerdame</span>}
                            />
                        </div>

                        <div className="form-group d-flex justify-content-between align-items-center">
                            <div>
                                <Button onClick={() => this.onSubmit()}
                                        variant="contained"
                                        style={{
                                            backgroundColor: "#F15A24",
                                            color: "white"
                                        }}>
                                    Ingresar
                                </Button>
                            </div>
                            <div>
                                <Link to="/sign-up"
                                      title="Register"><span
                                    className="login-register-text">¿No tienes cuenta?</span></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }

}

const mapStateToProps = state => ({
    loads: state.loads,
    user: state.auth.user
});


export default connect(mapStateToProps)(LogIn);
