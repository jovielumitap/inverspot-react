/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CategoryMenuItem from './CategoryMenuItem';
import CategoryMenuDropDown from './CategoryMenuDropDown';

export default class CategoryMenu extends PureComponent {
  static propTypes = {
    onFilterCategory: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  constructor(props)
  {
    super(props);
    this.state = { show: false };
  }

  toggle = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    const collapse = classNames({
      collapse: true,
      'navbar-collapse': true,
      show: this.state.show,
    });

    return (
      <div className="category">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.toggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={collapse} id="navbarNavDropdown">
            <ul className="navbar-nav">
              {
                this.props.categories.map(category => (
                  category.subCategories.length === 0
                    ? <CategoryMenuItem key={`${this.constructor.name}-${category.id}`} category={category} onFilterCategory={this.props.onFilterCategory} />
                    : <CategoryMenuDropDown key={`${this.constructor.name}-${category.id}`} category={category} onFilterCategory={this.props.onFilterCategory} />
                ))
              }
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
