/* eslint-disable no-restricted-syntax */

import React, { Component } from 'react';
import { validateCheckbox } from '../../../helpers/balance';

const withBalanceCheckboxes = (WrappedComponent) => {
  class WithBalanceCheckboxes extends Component {
    constructor(...props) {
      super(...props);
      this._checkboxes = {};
      this.treeCheckboxes = {};
      this.state = {
        checkboxes: {},
        _checkboxes: {},
      };
    }

    componentWillReceiveProps() {
      this._checkboxes = {};
      this.treeCheckboxes = {};
      this.setState({ checkboxes: {}, _checkboxes: {} });
    }

    registerCheckbox = (key, value) => {
      const { checkboxes } = this.state;
      if (!(key in checkboxes)) {
        const newCheckboxes = { ...checkboxes, [key]: true };
        this._checkboxes = { ...this._checkboxes, [key]: value };
        this.setState({ checkboxes: newCheckboxes, _checkboxes: this._checkboxes });
      }

      if (!(key in this.treeCheckboxes)) {
        this.reloadTree(key);
      }
    }

    reloadTree = (key) => {
      const ids = key.split('-');
      let parent = '';

      ids.forEach((value, index) => {
        const id = [...ids].splice(0, index + 1).join('-');
        if (!(id in this.treeCheckboxes)) {
          this.treeCheckboxes = { ...this.treeCheckboxes, [id]: new Set() };
        }

        if (parent !== '') {
          const set = this.treeCheckboxes[parent];
          set.add(id);
        }

        parent = id;
      });
    }

    toggleCheckbox = (id = '') => {
      const { checkboxes } = this.state;
      const checked = validateCheckbox(checkboxes, id);

      if (checked) {
        this.reverseUnselect(id);
      }

      else {
        this.reverseSelect(id);
      }
    }

    _check = (id, checked) => {
      const ids = id.split('-');
      const { checkboxes } = this.state;
      const newCheckboxes = { ...checkboxes };

      /* apply selected */
      newCheckboxes[id] = checked;

      /* apply all */
      if (ids.length === 1) {
        const tree = this.treeCheckboxes[id];
        tree.forEach((root) => {
          newCheckboxes[root] = checked;
          this.treeCheckboxes[root].forEach((value) => {
            newCheckboxes[value] = checked;
          });
        });
      }

      /* apply childs */
      if (ids.length === 2) {
        const tree = this.treeCheckboxes[id];
        tree.forEach((value) => {
          newCheckboxes[value] = checked;
        });
      }

      return newCheckboxes;
    }


    reverseUnselect = (id) => {
      const checkboxes = this._check(id, false);
      this.setState({ checkboxes });
    }

    reverseSelect = (id) => {
      const checkboxes = this._check(id, true);
      this.setState({ checkboxes });
    }

    getChecked = () => {
      const { checkboxes } = this.state;
      const selectedCheckboxes = [];
      const unselectedCheckboxes = [];

      // eslint-disable-next-line
      for(const key in checkboxes) {
        const ids = key.split('-');
        const id = ids[2];
        if (id) {
          const checked = checkboxes[key];
          if (checked) {
            selectedCheckboxes.push(id);
          }

          else {
            unselectedCheckboxes.push(id);
          }
        }
      }

      return { selectedCheckboxes, unselectedCheckboxes };
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          registerCheckbox={this.registerCheckbox}
          toggleCheckbox={this.toggleCheckbox}
          getChecked={this.getChecked}
        />
      );
    }
  }
  return WithBalanceCheckboxes;
};

export default withBalanceCheckboxes;
