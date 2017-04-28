import React, { Component, PropTypes } from 'react';

function Button(props) {
  return (
    <button onClick={props.action}>
      {props.children}
    </button>
  );
}

export default class Counter extends Component {
  componentDidMount() {
    console.log('mount');
  }

  render() {
    return (
      <div>
        count: { this.props.count }
        <Button action={this.props.actions.increment}>
          +1
        </Button>
        <Button action={this.props.actions.decrement}>
          -1
        </Button>
        <Button action={this.props.actions.reset}>
          0
        </Button>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  }),
};
