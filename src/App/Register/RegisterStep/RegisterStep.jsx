import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepConnector from '@material-ui/core/StepConnector';
import { withStyles } from '@material-ui/core/styles';
import {
  KeyboardArrowRight,
} from '@material-ui/icons';

import StepLabel from '@material-ui/core/StepLabel';
import SelectUserType from './component/SelectUserType';
import NationalPhysic1 from './component/NationalPhysic/NationalPhysic1';
import NationalPhysic2 from './component/NationalPhysic/NationalPhysic2';
import NationalPhysic3 from './component/NationalPhysic/NationalPhysic3';
import NationalPhysic4 from './component/NationalPhysic/NationalPhysic4';
import NationalPhysic5 from './component/NationalPhysic/NationalPhysic5';
import PhysicalForeigner1 from './component/PhysicalForeigner/PhysicalForeigner1';
import NationalMoral1 from './component/NationalMoral/NationalMoral1';
import MoralForeigner1 from './component/MoralForeigner/MoralForeigner1';
import PhysicalForeigner2 from './component/PhysicalForeigner/PhysicalForeigner2';
import NationalMoral2 from './component/NationalMoral/NationalMoral2';
import MoralForeigner2 from './component/MoralForeigner/MoralForeigner2';
import PhysicalForeigner3 from './component/PhysicalForeigner/PhysicalForeigner3';
import NationalMoral3 from './component/NationalMoral/NationalMoral3';
import MoralForeigner3 from './component/MoralForeigner/MoralForeigner3';
import PhysicalForeigner4 from './component/PhysicalForeigner/PhysicalForeigner4';
import NationalMoral4 from './component/NationalMoral/NationalMoral4';
import MoralForeigner4 from './component/MoralForeigner/MoralForeigner4';
import PhysicalForeigner5 from './component/PhysicalForeigner/PhysicalForeigner5';
import NationalMoral5 from './component/NationalMoral/NationalMoral5';
import MoralForeigner5 from './component/MoralForeigner/MoralForeigner5';

const getSteps = () => {
  return [1, 2, 3, 4, 5, 6, 7];
};

class RegisterStep extends Component {

  static propTypes = {
    loads: PropTypes.object.isRequired,
    profileReducer: PropTypes.object.isRequired,
    dispatchFetchProfileDetail: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { dispatchFetchProfileDetail } = this.props;
    dispatchFetchProfileDetail();
  }

  renderStepContent = () => {
    const { userType, activeStep } = this.state;
    if (activeStep === 1) {
      return (
        <SelectUserType
          title="Tipo de persona *"
          onClick={this.onClickUserType}
        />
      );
    } else if (activeStep === 2) {
      if (userType === 0) {
        return (
          <NationalPhysic1
            title={"Datos personales"}
            skipStep={this.skipStep}
          />
        );
      }
      if (userType === 1) {
        return (
          <PhysicalForeigner1
            title={"Datos personales"}
            skipStep={this.skipStep}
          />
        );
      }
      if (userType === 2) {
        return (
          <NationalMoral1 title={"Datos personales"} skipStep={this.skipStep} />
        );
      }
      if (userType === 3) {
        return (
          <MoralForeigner1
            title={"Datos personales"}
            skipStep={this.skipStep}
          />
        );
      }
    } else if (activeStep === 3) {
      if (userType === 0) {
        return (
          <NationalPhysic2
            title={"Documentos y datos"}
            skipStep={this.skipStep}
          />
        );
      }
      if (userType === 1) {
        return (
          <PhysicalForeigner2
            title={"Documentos y datos"}
            skipStep={this.skipStep}
          />
        );
      }
      if (userType === 2) {
        return (
          <NationalMoral2
            title={"Documentos y datos"}
            skipStep={this.skipStep}
          />
        );
      }
      if (userType === 3) {
        return (
          <MoralForeigner2
            title={"Documentos y datos"}
            skipStep={this.skipStep}
          />
        );
      }
    } else if (activeStep === 4) {
      if (userType === 0) {
        return <NationalPhysic3 title={"Dirección"} skipStep={this.skipStep} />;
      }
      if (userType === 1) {
        return (
          <PhysicalForeigner3 title={"Dirección"} skipStep={this.skipStep} />
        );
      }
      if (userType === 2) {
        return <NationalMoral3 title={"Dirección"} skipStep={this.skipStep} />;
      }
      if (userType === 3) {
        return <MoralForeigner3 title={"Dirección"} skipStep={this.skipStep} />;
      }
    } else if (activeStep === 5) {
      if (userType === 0) {
        return (
          <NationalPhysic4 title={"Cuenta bancaria"} skipStep={this.skipStep} />
        );
      }
      if (userType === 1) {
        return (
          <PhysicalForeigner4
            title={"Cuenta bancaria"}
            skipStep={this.skipStep}
          />
        );
      }
      if (userType === 2) {
        return (
          <NationalMoral4 title={"Cuenta bancaria"} skipStep={this.skipStep} />
        );
      }
      if (userType === 3) {
        return (
          <MoralForeigner4 title={"Cuenta bancaria"} skipStep={this.skipStep} />
        );
      }
    } else if (activeStep === 6) {
      if (userType === 0) {
        return (
          <NationalPhysic5
            title={"Beneficiarios"}
            finishStep={this.finishStep}
          />
        );
      }
      if (userType === 1) {
        return (
          <PhysicalForeigner5
            title={"Beneficiarios"}
            finishStep={this.finishStep}
          />
        );
      }
      if (userType === 2) {
        return (
          <NationalMoral5
            title={"Beneficiarios"}
            finishStep={this.finishStep}
          />
        );
      }
      if (userType === 3) {
        return (
          <MoralForeigner5
            title={"Beneficiarios"}
            finishStep={this.finishStep}
          />
        );
      }
    } else {
      return null;
    }
  };
  onClickUserType = type => {
    this.setState({
      userType: type,
      activeStep: 2
    });
  };
  skipStep = () => {
    const { activeStep } = this.state;
    if (activeStep === 6) return;
    this.setState({ activeStep: activeStep + 1 });
  };
  finishStep = () => {
    this.props.history.push("sign-in");
  };
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 1,
      userType: ""
    };
  }

  render() {
    const steps = getSteps();
    const { activeStep } = this.state;
    const { classes, loads } = this.props;
    const isLoading = Boolean(loads.loading);
    return (
      <div className="account_panel_step">
        <div className="w-100 h-auto d-flex flex-column os-y">
          <div className="account_panel_step_title">
            Para poder invertir unicamente requerimos que completes los campos
            oblicatorios (*)
          </div>
          <div className="account_panel_step_children">
            {!isLoading && (this.renderStepContent())}
          </div>
          {!isLoading && (
            <div className="account_panel_step_submit">
              <button
                id="account_panel_step_submit_late"
                type="button"
              >
                Omitir para mas tarde
              </button>
              <button
                id="account_panel_step_submit_next"
                type="button"
              >
                Siguiente
                <span>
                  <KeyboardArrowRight />
                </span>
              </button>
            </div>
          )}
        </div>
        <div className="account_panel_step_steeper">
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<QontoConnector />}
          >
            {steps.map(step => (
              <Step key={step}>
                <StepLabel
                  StepIconProps={{
                    classes: {
                      active: classes.active,
                      completed: classes.completed,
                      disabled: classes.disabled
                    },
                  }}
                >
                  {''}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
      //   <div className="account_panel_step">
      //     <div className="account_panel_step">
      //       <div className="w-100 text-center register-title">
      //         Para poder invertir unicamente requerimos que completes los campos
      //         oblicatorios (*)
      //       </div>
      //       {this.renderStepContent()}
      //     </div>
      //       <button>
      //         {'Omitir para mas tarde'}
      //       </button>
      //     </div>
      //     <div className="mt-4 w-100">
      //     <Stepper
      //       alternativeLabel
      //       activeStep={activeStep}
      //       connector={<QontoConnector />}
      //     >
      //       {steps.map((step, index) => (
      //         <Step key={step}>
      //           <StepLabel
      //             StepIconProps={{
      //               classes: {
      //                 active: classes.active,
      //                 completed: classes.completed,
      //                 disabled: classes.disabled
      //               }
      //             }}
      //           >
      //             {""}
      //           </StepLabel>
      //         </Step>
      //       ))}
      //     </Stepper>
      //   </div>
      //   </div>
    );
  }
}

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)"
  },
  active: {
    "& $line": {
      borderColor: "#784af4"
    }
  },
  completed: {
    "& $line": {
      borderColor: "#784af4"
    }
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1
  }
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

export default withStyles(styles)(RegisterStep);
