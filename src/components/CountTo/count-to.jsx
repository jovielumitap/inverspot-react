import React from 'react';
import Countup from 'react-countup';
import PropTypes from 'prop-types';

export default class CountTo extends React.Component {
  static propTypes = { to: PropTypes.number }

  static defaultProps = { to: 0 }

  state = { from: 0, to: this.props.to }

  componentWillReceiveProps(nextProps) {
    const { to } = this.props;
    this.setState({
      from: to,
      to: nextProps.to,
    });
  }

  render() {
    const { from, to } = this.state;
    return (<Countup start={from} end={to} decimals={2} separator="," duration={1} />);
  }
}
