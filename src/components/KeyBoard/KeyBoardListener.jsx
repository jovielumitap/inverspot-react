import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class KeyBoardListener extends PureComponent {
  static propTypes = {
    items: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.addEvent();

    this.current = null;
    this.step = -1;
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      const searchBar = this.getSearchBar();
      this.focusElement(searchBar);
      this.clickElement(searchBar);
      this.step = 1;
    }, true);
    this.addEvent();
  }

  componentWillUnmount() {
    this.removeEvent();
  }

  /* Event Containers START */
  addEvent = () => {
    document.body.addEventListener('keydown', this.keydown, true);
    document.body.addEventListener('click', this.click, true);
  }

  removeEvent = () => {
    document.body.removeEventListener('keydown', this.keydown, true);
    document.body.removeEventListener('click', this.click, true);
  }
  /* Event Containers END */

  /* Key Helpers START */
  keyCancel = (event) => {
    event.preventDefault();
    event.stopPropagation();
  }

  isSpecialKey = event => (
    event.ctrlKey || event.shiftKey || event.altKey || event.metaKey
  )

  isArrow = event => (
    /Arrow/.test(event.key)
  )

  isEnter = event => (
    /Enter/.test(event.key)
  )
  /* Key Helpers START */

  /* Event Helpers START */
  focusElement = (element) => {
    if (element) {
      element.focus();
      this.current = element;
      return true;
    }
    return false;
  }

  clickElement = (element) => {
    if (element) {
      element.click();
      this.current = element;
      return true;
    }
    return false;
  }

  dispatchEvent = (element, eventType) => {
    if (element) {
      if (element.fireEvent) {
        element.fireEvent(`on${eventType}`);
      }
      else {
        const event = document.createEvent('Events');
        event.initEvent(eventType, true, false);
        element.dispatchEvent(event);
      }

      return true;
    }

    return false;
  }
  /* Event Helpers END */

  /* Fetch Elements START */
  isThisFocusElement = (element) => {
    const { focusNode } = window.getSelection();
    return element === focusNode;
  }

  getSearchBar = () => {
    const { items } = this.props;
    const { itemActions } = items;
    const element = itemActions.querySelector('input');
    return element;
  }

  getReloadButton = () => {
    const { items } = this.props;
    const { itemActions } = items;
    const element = itemActions.querySelector('button[aria-label="Delete"]');
    return element;
  }

  getFirstAGridRow = () => {
    const { items } = this.props;
    const { itemsContainer } = items;
    const element = itemsContainer.querySelector('.ag-center-cols-clipper .ag-row-first');
    return element;
  }

  getBuyButton = () => {
    const { items } = this.props;
    const { posCartContainerAction } = items;
    const element = posCartContainerAction.querySelector('button:last-child');
    return element;
  }
  /* Fetch Elements END */

  nextStep = (event) => {
    if (this.isEnter(event)) {
      if (this.step === 0) {
        this.keyCancel(event);
        const searchBar = this.getSearchBar();
        this.focusElement(searchBar);
        this.step = 1;
      }

      else if (this.step === 1) {
        this.keyCancel(event);
        const firstAGridRow = this.getFirstAGridRow();
        this.clickElement(firstAGridRow);
        this.step = 0;
      }
    }
  }

  macros = (event) => {
    const { shiftKey } = event;
    let { key } = event;

    if (key) {
      key = key.toLowerCase();
    }

    /* Focus searchBar */
    if (shiftKey && key === 'f') {
      const searchBar = this.getSearchBar();
      this.focusElement(searchBar);
      this.clickElement(searchBar);
      this.keyCancel(event);
    }

    /* click reloadButton */
    else if (shiftKey && key === 'r') {
      const reloadButton = this.getReloadButton();
      this.clickElement(reloadButton);
      this.keyCancel(event);
    }

    /* click reloadButton */
    else if (shiftKey && key === 'c') {
      const buyButton = this.getBuyButton();
      this.clickElement(buyButton);
      this.keyCancel(event);
    }
  }

  keydown = (event) => {
    this.nextStep(event);
    this.macros(event);
  }

  click = (event) => {
    const { target } = event;
    this.current = target;

    if (target === this.getSearchBar()) {
      this.step = 1;
    }

    else {
      this.step = -1;
    }
  }

  render() {
    return (
      <></>
    );
  }
}

export default KeyBoardListener;
