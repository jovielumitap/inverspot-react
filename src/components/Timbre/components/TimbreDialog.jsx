/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
} from '@material-ui/core';

const Timbre = ({ timbrar, data, setData }) => {
  const {
    rs_receptor,
    rfc_receptor,
    usocfdi,
    formaspago,
    metodospago,
    tc,
  } = timbrar;
  useEffect(() => {
    const { def } = timbrar;
    const { formapago, metodopago, uso } = def;
    setData({
      ...data,
      formapago,
      metodopago,
      uso,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timbrar]);
  return (
    <Grid container spacing={24}>
      <Grid item sm={6} xs={12}>
        <TextField
          fullWidth
          disabled
          label="Razon Social"
          value={rs_receptor}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item sm={6} xs={12}>
        <TextField
          fullWidth
          disabled
          label="RFC"
          value={rfc_receptor}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item sm={6} xs={12}>
        <FormControl className="w-100">
          <InputLabel htmlFor="uso-de-cfdi" shrink>Uso de CFDI</InputLabel>
          <Select
            native
            value={data.uso}
            inputProps={{
              name: 'Uso de CFDI ',
              id: 'uso-de-cfdi',
            }}
            onChange={(event) => { setData({ ...data, uso: event.target.value }); }}
          >
            {
              usocfdi.map(u => (
                <option key={u.key} value={u.key}>
                  { u.value }
                </option>
              ))
            }
          </Select>
        </FormControl>
      </Grid>
      <Grid item sm={6} xs={12}>
        <FormControl className="w-100">
          <InputLabel htmlFor="forma-de-pago" shrink>Forma de Pago</InputLabel>
          <Select
            native
            value={data.formapago}
            inputProps={{
              name: 'Forma de Pago ',
              id: 'forma-de-pago',
            }}
            onChange={(event) => { setData({ ...data, formapago: event.target.value }); }}
          >
            {
              formaspago.map(pago => (
                <option key={pago.key} value={pago.key}>
                  { pago.value }
                </option>
              ))
            }
          </Select>
        </FormControl>
      </Grid>
      <Grid item sm={6} xs={12}>
        <FormControl className="w-100">
          <InputLabel htmlFor="metodo-de-pago" shrink>Metodo de Pago</InputLabel>
          <Select
            native
            value={data.metodopago}
            inputProps={{
              name: 'Metodo de Pago ',
              id: 'metodo-de-pago',
            }}
            onChange={(event) => { setData({ ...data, metodopago: event.target.value }); }}
          >
            {
              metodospago.map(metodo => (
                <option key={metodo.key} value={metodo.key}>
                  { metodo.value }
                </option>
              ))
            }
          </Select>
        </FormControl>
      </Grid>
      <Grid item sm={6} xs={12}>
        <TextField
          fullWidth
          disabled
          label="Tipo Cambio"
          value={tc}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </Grid>
  );
};

Timbre.propTypes = {
  timbrar: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Timbre;
