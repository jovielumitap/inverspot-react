import React, {Component} from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepConnector from '@material-ui/core/StepConnector';
import {withStyles} from '@material-ui/core/styles';
import StepLabel from "@material-ui/core/StepLabel";
import NationalPhysic from "./component/NationalPhysic";
import SelectUserType from "./component/SelectUserType";


const getSteps = () => {
    return [1, 2, 3, 4, 5, 6, 7];
};
const userTypes = ["nationPhysic", "physicalForeigner", "nationalMoral", "moralForeigner"];

class RegisterStep extends Component {
    renderStepContent = () => {
        const {userType, activeStep} = this.state;
        switch (activeStep) {
            case 1:
                return (
                    <SelectUserType
                        title={"Tipo de persona"}
                        onClick={this.onClickUserType}
                    />
                );
            case 2:
                if (userType === 0) {
                    return (
                        <NationalPhysic
                            title={"Datos personales"}
                            skipStep={this.skipStep}
                        />
                    )
                }
                if (userType === 1) {
                    return (
                        <NationalPhysic/>
                    )
                }
                if (userType === 2) {
                    return (
                        <NationalPhysic/>
                    )
                }
                if (userType === 3) {
                    return (
                        <NationalPhysic/>
                    )
                }
        }
    };
    onClickUserType = (type) => {
        this.setState({
            userType: type,
            activeStep: 2
        });
    };
    skipStep = () => {
      const { activeStep } = this.state;
      if (activeStep === 6) return;
      this.setState({ activeStep: activeStep + 1 })
    };
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 1,
            userType: ""
        }
    }

    render() {
        const steps = getSteps();
        const {activeStep} = this.state;
        const {classes} = this.props;
        return (
            <div className='root-container'>
                <div className="account-panel-width">
                    <div className="w-100 text-center register-title">
                        Para poder invertir unicamente
                        requerimos que completes los campos
                        oblicatorios (*)
                    </div>
                    {this.renderStepContent()}
                </div>
                <div className="mt-4 w-100">
                    <div className="w-50 origin-button mx-auto mb-2"
                         onClick={() => this.skipStep()}
                    >
                        Omitir para mas tarde
                    </div>
                    <Stepper
                        alternativeLabel
                        activeStep={activeStep}
                        connector={<QontoConnector/>}
                    >
                        {steps.map((step, index) => (
                            <Step
                                key={step}
                            >
                                <StepLabel
                                    StepIconProps={{
                                        classes: {
                                            active: classes.active,
                                            completed: classes.completed,
                                            disabled: classes.disabled
                                        }
                                    }}>{""}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </div>
            </div>
        )
    }
}

const QontoConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: '#784af4',
        },
    },
    completed: {
        '& $line': {
            borderColor: '#784af4',
        },
    },
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
})(StepConnector);
const styles = theme => ({
    active: {
        color: "#784af4 !important"
    },
    completed: {
        color: "#784af4 !important"
    },
    stepIcon: {
        color: "#f1f2f2"
    }
});

export default withStyles(styles)(RegisterStep)
