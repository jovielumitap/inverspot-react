/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CategoryMenuDropDownItem extends PureComponent {
  static propTypes = {
    onFilterCategory: PropTypes.func.isRequired,
    category: PropTypes.object.isRequired,
  }

  render() {
    return (
      <li>
        <a className="dropdown-item" href={this.props.category.link} onClick={this.props.onFilterCategory}>{this.props.category.name}</a>
      </li>
    );
  }
}
