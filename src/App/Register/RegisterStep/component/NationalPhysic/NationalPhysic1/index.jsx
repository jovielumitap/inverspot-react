import React from 'react';
import PropTypes from 'prop-types';
import {
  Select,
  MenuItem,
  FormControl,
  CircularProgress,
} from '@material-ui/core';
import MaskedInput from 'react-text-mask'
import { KeyboardArrowRight } from '@material-ui/icons';
import BootstrapInput from '../../../../../../components/BootstrapInput';

const NationalPhysic1 = ({
  title,
  scheme,
  skipStep,
  isLoading,
}) => {
  const [form, setForm] = React.useState(scheme);

  React.useEffect(() => {
    if (Object.keys(scheme).length > 0) {
      setForm(scheme);
    }
  }, [scheme]);

  const renderForm = () => {
    console.log('form: ', form);
    if (Object.keys(form).length > 0) {
      return (
        <div className="w-100">
          <div className="form-group w-100">
            <input
              id="input_name"
              name="ownership"
              required={form.ownership.required}
              readOnly={form.ownership.readOnly}
              placeholder={form.ownership.label}
              className="form-control form-control"
            />
          </div>
          <div className="form-group w-100">
            <input
              id="input_last1"
              name="cf_1130"
              required={form.cf_1130.required}
              readOnly={form.cf_1130.readOnly}
              placeholder={form.cf_1130.label}
              className="form-control form-control"
            />
          </div>
          <div className="form-group w-100">
            <input
              id="input_last2"
              name="cf_1132"
              required={form.cf_1132.required}
              readOnly={form.cf_1132.readOnly}
              placeholder={form.cf_1132.label}
              className="form-control form-control"
            />
          </div>
          <div className="form-group w-100">
            <MaskedInput
              id="input_phone"
              type="tel"
              guide={false}
              onBlur={() => {}}
              onChange={() => {}}
              required={form.phone.required}
              readOnly={form.phone.readOnly}
              placeholder={form.phone.label}
              className="form-control form-control"
              mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            />
          </div>
          <div className="form-group w-100">
            <input
              id="input_ocupation"
              name="profesion"
              required={form.profesion.required}
              readOnly={form.profesion.readOnly}
              placeholder={form.profesion.label}
              className="form-control form-control"
            />
          </div>
          <div className="form-group w-100">
            <input
              id="input_birthdate"
              type="text"
              name="fecha_nacimiento"
              onFocus="(this.type='date')"
              required={form.fecha_nacimiento.required}
              readOnly={form.fecha_nacimiento.readOnly}
              placeholder={form.fecha_nacimiento.label}
              className="form-control form-control"
            />
          </div>
          <div className="form-group w-100">
            <input
              className="form-control form-control"
              placeholder={"Fecha de nacimiento*"}
            />
          </div>
          <div className="form-group w-100">
            <FormControl className="w-100 mb-2">
              <Select
                value={""}
                displayEmpty
                placeholder="Select Options"
                input={<BootstrapInput />}
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
                placeholder="Select Options"
                input={<BootstrapInput />}
              >
                <MenuItem value="" disabled>
                  Entidad federativa de nacimiento*
                </MenuItem>
              </Select>
            </FormControl>
          </div>
    
          <div className="form-group w-100">
            <input
              className="form-control form-control"
              placeholder={"Lugar de nacimiento*"}
            />
          </div>
    
          <div className="form-group w-100">
            <input
              className="form-control form-control"
              placeholder={"Nacionalidad*"}
            />
          </div>
    
          <div className="form-group w-100">
            <FormControl className="w-100 mb-2">
              <Select
                value={""}
                displayEmpty
                placeholder="Select Options"
                input={<BootstrapInput />}
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
                placeholder="Select Options"
                input={<BootstrapInput />}
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
                placeholder="Select Options"
                input={<BootstrapInput />}
              >
                <MenuItem value="" disabled>
                  Régimen conyugal
                </MenuItem>
              </Select>
            </FormControl>
          </div>
    
          <div className="form-group w-100">
            <input
              className="form-control form-control"
              placeholder={"Conyuge"}
            />
          </div>
    
          <div className="account_panel_step_submit">
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
        </div>
      )
    }
  };
  return (
    <div className="account_panel_step_form">
      <div className="w-100 text-center register-title mt-4 mb-2">
        {title}
      </div>
      <div className="w-100">
        {!isLoading ? (
          renderForm()
        ) : (
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
};

NationalPhysic1.propTypes = {
  title: PropTypes.string,
  skipStep: PropTypes.func,
  scheme: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
};
NationalPhysic1.defaultProps = {
  title: 'Datos Personales',
  skipStep: () => {},
  scheme: {},
};

export default NationalPhysic1;
