// @ts-nocheck
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SimpleFilter extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    word: PropTypes.object.isRequired,
    cats: PropTypes.array.isRequired,
    dispatchMultipleFilters: PropTypes.func.isRequired,
    dispatchRemoveMultipleFilters: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    const { title } = this.props;
    this.state = {
      menu: null,
      title,
    };
  }


  handleClick = (event) => {
    this.setState({ menu: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ menu: null });
  };

  setFilter = (item) => {
    const { dispatchMultipleFilters } = this.props;
    dispatchMultipleFilters(item);
    this.setState({ title: item.title });
  }

  render() {
    const { menu } = this.state;
    const {
      title,
      word,
      cats,
      dispatchRemoveMultipleFilters,
    } = this.props;
    return (
      <>
        <Button
          aria-owns={menu ? `menu-filters-${title}` : undefined}
          aria-haspopup="true"
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          {this.state.title}
          <FontAwesomeIcon
            style={{ marginLeft: '1em', fontSize: '0.8em' }}
            icon="filter"
          />
        </Button>
        <Menu
          id="menu-filters-mda"
          anchorEl={menu}
          open={Boolean(menu)}
          onClose={() => {
            this.handleClose();
          }}
        >
          <MenuItem
            onClick={() => {
              dispatchRemoveMultipleFilters(word.word);
              this.handleClose();
              this.setState({ title });
            }}
          >
            {'Todos'}
          </MenuItem>
          {cats.map(item => (
            <MenuItem
              key={`key_${item.title}`}
              onClick={() => {
                this.setFilter(item);
                this.handleClose();
              }}
            >
              {item.title}
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  }
}

export default SimpleFilter;
