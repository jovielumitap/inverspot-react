import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class KeyBoardItem extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]).isRequired,
    keyValue: PropTypes.string.isRequired,
    addKeyBoardItem: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.node = null;
  }

  componentDidMount() {
    this.addKeyBoardItem();
  }

  addKeyBoardItem = () => {
    const {
      keyValue,
      addKeyBoardItem,
    } = this.props;

    addKeyBoardItem({
      [keyValue]: this.node,
    });
  }

  render() {
    const { keyValue, children } = this.props;
    return (
      <div
        id={keyValue}
        ref={
          (node) => {
            if (node) {
              this.node = node;
            }
          }
        }
      >
        { children }
      </div>
    );
  }
}

export default KeyBoardItem;
