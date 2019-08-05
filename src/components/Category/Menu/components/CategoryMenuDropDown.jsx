/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CategoryMenuItem from './CategoryMenuItem';

export default class CategoryMenuDropDown extends PureComponent {
  static propTypes = {
    onFilterCategory: PropTypes.func.isRequired,
    category: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      link: PropTypes.string,
      subCategories: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
  }

  constructor(props)
  {
    super(props);
    this.state = { show: false };
  }

  show = () => {
    this.setState({ show: true });
  }

  hidde = () => {
    this.setState({ show: false });
  }

  render() {
    const navItemDropdown = classNames({
      'nav-item': true,
      dropdown: true,
      show: this.state.show,
    });

    const dropdownMenu = classNames({
      'dropdown-menu': true,
      show: this.state.show,
    });

    const id = this.props.category.name.trim().replace(' ', '-');

    return (
      <li
        className={navItemDropdown}
        onMouseEnter={this.show}
        onMouseLeave={this.hidde}
      >
        <a
          className="nav-link dropdown-toggle"
          href={this.props.category.link}
          id={id}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={this.state.show}
        >
          { this.props.category.name }
        </a>
        <ul
          className={dropdownMenu}
          aria-labelledby={id}
          onMouseEnter={this.show}
          onMouseLeave={this.hidde}
        >
          {
            this.props.category.subCategories.map(category => (
              category.subCategories.length === 0
              ? <CategoryMenuItem key={`${this.constructor.name}-${category.id}`} category={category} onFilterCategory={this.props.onFilterCategory} />
              : <CategoryMenuDropDown key={`${this.constructor.name}-${category.id}`} category={category} onFilterCategory={this.props.onFilterCategory} />
            ))
          }
        </ul>
      </li>
    );
  }
}
