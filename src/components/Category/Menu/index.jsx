/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CategoryMenuItem from './components/CategoryMenuItem';
import CategoryMenuDropDown from './components/CategoryMenuDropDown';

import categories from './categories';

export default class CategoryMenu extends PureComponent {
  static propTypes = {
    onFilterCategory: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
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
            onClick={this.toggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={collapse} id="navbarNavDropdown">
            <ul className="navbar-nav">
              {
                categories.map(category => (
                  category.subCategories.length === 0
                    ? <CategoryMenuItem key={`${this.constructor.name}-${category.id}`} category={category} onFilterCategory={this.props.onFilterCategory} />
                    : <CategoryMenuDropDown key={`${this.constructor.name}-${category.id}`} category={category} onFilterCategory={this.props.onFilterCategory} />
                ))
              }
            </ul>
            <ul className="navbar-nav ml-auto">
              { this.props.children }
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
