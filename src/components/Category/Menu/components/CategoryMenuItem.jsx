/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CategoryMenuItem extends PureComponent {
  static propTypes = {
    onFilterCategory: PropTypes.func.isRequired,
    category: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      link: PropTypes.string,
      subCategories: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
  }

  render() {
    return (
      <li className="nav-item">
        <a className="nav-link" href={this.props.category.link} onClick={this.props.onFilterCategory}>{this.props.category.name}</a>
      </li>
    );
  }
}
