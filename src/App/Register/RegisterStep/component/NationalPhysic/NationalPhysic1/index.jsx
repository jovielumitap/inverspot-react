/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Select,
  MenuItem,
  Collapse,
  FormControl,
  CircularProgress,
} from '@material-ui/core';
import {Form } from 'reactstrap';
import MaskedInput from 'react-text-mask';
import { KeyboardArrowRight } from '@material-ui/icons';
import BootstrapInput from '../../../../../../components/BootstrapInput';
import GoogleMapsPlacesSearch from '../../../../../../components/GoogleMapsPlacesSearch';

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

  const onChange = (e) => {
    const { value, name } = e.target;
    const newStep = { ...form[name], value };
    setForm({ ...form, [name]: { ...newStep } });
  };

  const onChangeSearch = (places) => {
    const initForm = { ...form };
    const pais = { ...initForm.pais_nacimiento };
    const entidad = { ...initForm.entidad_nacimiento };
    if (places.length > 0) {
      const { address_components } = places[0];
      address_components.forEach((add) => {
        if (add.types.includes('country')) {
          pais.value = add.long_name;
        }
        if (add.types.includes('administrative_area_level_1')) {
          entidad.value = add.long_name;
        }
      });
      setForm(old => ({
        ...old,
        pais_nacimiento: { ...pais },
        entidad_nacimiento: { ...entidad },
      }));
    } else {
      pais.value = '';
      entidad.value = '';
    }
    setForm(old => ({
      ...old,
      pais_nacimiento: { ...pais },
      entidad_nacimiento: { ...entidad },
    }));
    console.log('value: ', places);
  };

  const onKeyPress = (event) => {
    if (event.which === 13 /* Enter */) {
      event.preventDefault();
    }
  };

  const onSubmit = () => {
    
  };

  const renderForm = () => {
    if (Object.keys(form).length > 0) {
      return (
        <Form
          className="w-100"
          onKeyPress={onKeyPress}
          onSubmit={onSubmit}
        >
          <div className="form-group w-100">
            <input
              autoFocus
              id="input_name"
              name="ownership"
              onChange={onChange}
              value={form.ownership.value || ''}
              required={form.ownership.required}
              readOnly={form.ownership.readonly}
              placeholder={form.ownership.label}
              className="form-control form-control"
            />
          </div>
          <div className="form-group w-100">
            <input
              id="input_last1"
              name="cf_1130"
              onChange={onChange}
              value={form.cf_1130.value || ''}
              required={form.cf_1130.required}
              readOnly={form.cf_1130.readonly}
              placeholder={form.cf_1130.label}
              className="form-control form-control"
            />
          </div>
          <div className="form-group w-100">
            <input
              id="input_last2"
              name="cf_1132"
              onChange={onChange}
              value={form.cf_1132.value || ''}
              required={form.cf_1132.required}
              readOnly={form.cf_1132.readonly}
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
              onChange={onChange}
              required={form.phone.required}
              readOnly={form.phone.readonly}
              placeholder={form.phone.label}
              className="form-control form-control"
              mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            />
          </div>
          <div className="form-group w-100">
            <input
              id="input_ocupation"
              name="profesion"
              onChange={onChange}
              value={form.profesion.value || ''}
              required={form.profesion.required}
              readOnly={form.profesion.readonly}
              placeholder={form.profesion.label}
              className="form-control form-control"
            />
          </div>
          <div className="form-group w-100">
            <input
              id="input_birthdate"
              type="text"
              name="fecha_nacimiento"
              onFocus={(e) => {
                e.target.type = 'date';
                e.target.click();
              }}
              onBlur={(e) => {
                e.target.type = 'text';
              }}
              onChange={onChange}
              required={form.fecha_nacimiento.required}
              placeholder={form.fecha_nacimiento.label}
              className="form-control form-control"
            />
          </div>
          <div className="form-group w-100">
            <GoogleMapsPlacesSearch
              id="input_country"
              onPlacesChanged={onChangeSearch}
              placeholder={form.cf_1368.label}
              apiKey="AIzaSyCW6DrTYcN4QBoAbG8POPrN8vcKD_mVx3E"
            />
          </div>
          <div className="form-group w-100">
            <input
              id="input_pais"
              name="pais_nacimiento"
              value={form.pais_nacimiento.value || ''}
              required={form.pais_nacimiento.required}
              readOnly={form.pais_nacimiento.readonly}
              placeholder={form.pais_nacimiento.label}
              className="form-control form-control"
            />
          </div>
          <div className="form-group w-100">
            <input
              id="input_entidad"
              name="entidad_nacimiento"
              value={form.entidad_nacimiento.value || ''}
              required={form.entidad_nacimiento.required}
              readOnly={form.entidad_nacimiento.readonly}
              placeholder={form.entidad_nacimiento.label}
              className="form-control form-control"
            />
          </div>
          <div className="form-group w-100">
            <FormControl
              className="w-100 mb-2"
              required={form.cf_1372.required}
            >
              <Select
                id="input_nacionalidad"
                displayEmpty
                name="cf_1372"
                onChange={onChange}
                required={form.cf_1372.required}
                value={form.cf_1372.value || ''}
                input={<BootstrapInput />}
              >
                <MenuItem value="" disabled>
                  {form.cf_1372.label}
                </MenuItem>
                {form.cf_1372.options.map((opt, i) => (
                  <MenuItem
                    key={`key_nacionalidad_opt_${opt}_${i}`}
                    value={opt}
                  >
                    {opt}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="form-group w-100">
            <FormControl
              className="w-100 mb-2"
              required={form.cf_1370.required}
            >
              <Select
                id="input_genero"
                displayEmpty
                name="cf_1370"
                onChange={onChange}
                input={<BootstrapInput />}
                required={form.cf_1370.required}
                value={form.cf_1370.value || ''}
              >
                <MenuItem value="" disabled>
                  {form.cf_1370.label}
                </MenuItem>
                <MenuItem value="Masculino">
                  {'Masculino'}
                </MenuItem>
                <MenuItem value="Femenino">
                  {'Femenino'}
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="form-group w-100">
            <FormControl
              className="w-100 mb-2"
              required={form.cf_1382.required}
            >
              <Select
                id="input_estadoCivil"
                name="cf_1382"
                displayEmpty
                onChange={onChange}
                input={<BootstrapInput />}
                value={form.cf_1382.value || ''}
                required={form.cf_1382.required}
              >
                <MenuItem value="" disabled>
                  {form.cf_1382.label}
                </MenuItem>
                {form.cf_1382.options.map((opt, i) => (
                  <MenuItem
                    key={`key_estadoCivil_opt_${opt}_${i}`}
                    value={opt}
                  >
                    {opt}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <Collapse
            mountOnEnter
            in={Boolean(form.cf_1382.value === 'Casado')}
          >
            <div className="form-group w-100">
              <FormControl className="w-100 mb-2">
                <Select
                  id="input_regimen"
                  name="cf_1384"
                  displayEmpty
                  onChange={onChange}
                  input={<BootstrapInput />}
                  value={form.cf_1384.value || ''}
                  required={form.cf_1384.required}
                >
                  <MenuItem value="" disabled>
                    {form.cf_1384.label}
                  </MenuItem>
                  {form.cf_1384.options.map((opt, i) => (
                    <MenuItem
                      key={`key_regimen_opt_${opt}_${i}`}
                      value={opt}
                    >
                      {opt}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="form-group w-100">
              <input
                id="input_conyugeName"
                name="cf_1386"
                onChange={onChange}
                value={form.cf_1386.value || ''}
                required={form.cf_1386.required}
                readOnly={form.cf_1386.readonly}
                placeholder={form.cf_1386.label}
                className="form-control form-control"
              />
            </div>
          </Collapse>
          <div className="account_panel_step_submit">
            <button
              id="account_panel_step_submit_next"
              type="submit"
            >
                Siguiente
              <span>
                <KeyboardArrowRight />
              </span>
            </button>
            <button
              id="account_panel_step_submit_late"
              type="button"
              onClick={() => {
                skipStep(form);
              }}
            >
              Guardar para mas tarde
            </button>
          </div>
        </Form>
      );
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
