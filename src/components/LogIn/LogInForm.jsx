import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  fullWidth: {
    width: '100%',
  },
});

const SignIn = ({ classes, onSubmit }) => (
  <section className={classes.main}>
    <CssBaseline />
    <Paper className={classes.paper}>
      <div className={classes.fullWidth}>
        <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="comercia.io" />
      </div>
      <form className={classes.form} onSubmit={onSubmit}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="username">Nombre Usuario</InputLabel>
          <Input id="username" name="username" autoComplete="username" autoFocus />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Contraseña</InputLabel>
          <Input name="password" type="password" id="password" autoComplete="current-password" />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="domain">Dominio</InputLabel>
          <Input name="domain" type="domain" id="domain" autoComplete="url" />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" name="rememberMe" />}
          label="Recordar?"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Acceder
        </Button>
      </form>
    </Paper>
  </section>
);

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(SignIn);
