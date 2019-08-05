import React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
  fullWidth: {
    width: '100%',
  },
});

const StoreForm = ({ classes, stores, selectStore }) => (
  <section className={classes.main}>
    <CssBaseline />
    <Paper className={classes.paper}>
      <Typography component="h1" variant="h5">
        Selecciona Una Almacén
      </Typography>
      <List className={classes.fullWidth}>
        {
          stores.map(store => (
            <ListItem
              key={`StoreForm-${store.crmid}`}
              button
              component="button"
              onClick={(event) => {
                event.preventDefault();
                const { currentTarget } = event;
                selectStore(currentTarget);
              }}
              data-crmid={store.crmid}
              data-name={store.almacen}
            >
              <ListItemText primary={store.almacen} />
            </ListItem>
          ))
        }
      </List>
    </Paper>
  </section>
);

StoreForm.propTypes = {
  classes: PropTypes.object.isRequired,
  stores: PropTypes.array.isRequired,
  selectStore: PropTypes.func,
};

StoreForm.defaultProps = {
  selectStore: () => {},
};

export default withStyles(styles)(StoreForm);
