import React from 'react';
import {Modal, ModalHeader} from "reactstrap";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import {withStyles} from "@material-ui/core";

class SubmitInvestmentDialog extends React.Component {
    state = {
        password: "",
        checked: []
    };
    handleToggle = value => () => {
        const {checked} = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({checked: newChecked})
    };

    validForm = () => {
      const { checked, password } = this.state;
      return checked !== null && checked.length > 0 && password !== "";
    };
    render() {
        const {
            open,
            onHandleModal,
            onSubmitForm,
            data,
            classes
        } = this.props;
        const {password, checked} = this.state;
        const logo = `${process.env.PUBLIC_URL}/img/logo-inverspot-white.png`;
        return (
            <Modal
                toggle={onHandleModal}
                isOpen={open}
            >
                <ModalHeader className="modal-box-header bg-purple text-white text-center">
                    <div className="w-75 m-auto">
                        <img src={logo} alt={""}/>
                    </div>
                </ModalHeader>
                <div className="modal-box-content">
                    <div className="w-100">
                        <div className="row mb-2">

                            <div className="col-12 mb-4 text-center font-size-18 font-weight-600">
                                Confirma tu correo y contrasena para realizar tu inversion
                            </div>
                            <div className="col-12 mb-2 investment-item-container">
                                <List className={classes.root}>
                                    {data.map((value, index) => {
                                        const labelId = `checkbox-list-label-${index}`;

                                        return (

                                            <div className="investment-item flex-row w-100 border-bottom"
                                                 key={labelId}
                                                 onClick={this.handleToggle(value.invoiceid)}>
                                                <ListItemIcon>
                                                    <Checkbox
                                                        edge="start"
                                                        checked={checked.indexOf(value.invoiceid) !== -1}
                                                        tabIndex={-1}
                                                        disableRipple
                                                        style ={{
                                                            color: "#60269E",
                                                        }}
                                                        inputProps={{'aria-labelledby': labelId}}
                                                    />
                                                </ListItemIcon>
                                                <div className="mr-2 position-relative">
                                                    <div className="align-center position-relative">
                                                        <div
                                                            className="font-size-16 font-weight-600 text-right">{parseFloat(value.quantity)}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between f-1">
                                                    <div className="ml-2 position-relative">
                                                        <div className="align-center position-relative">
                                                            <div
                                                                className="font-size-18 font-weight-600">{value.invoice}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mr-2 position-relative">
                                                        <div className="align-center position-relative">
                                                            <div
                                                                className="font-size-16 font-weight-600 text-right">${parseFloat(value.total)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </List>
                            </div>
                            <div className="col-12 mb-2 text-center font-size-20 font-weight-600">
                                suario@correo.com
                            </div>
                            <div className="col-12 mb-2 text-center font-size-20 font-weight-600">
                                <input
                                    className='form-control form-control-lg'
                                    type={"password"}
                                    value={password}
                                    onChange={e => this.setState({password: e.target.value})}
                                    placeholder={"Confirma tu contrasena"}
                                />
                            </div>
                            <div className="col-12">
                                <div className="w-100 origin-button py-2 mt-2"
                                     style={{ backgroundColor: this.validForm()? "": "#ccc7c7"}}
                                     onClick={() => this.validForm()? onSubmitForm(this.state): null}
                                >
                                    Confirma tu contrasena
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

export default withStyles(styles)(SubmitInvestmentDialog)
