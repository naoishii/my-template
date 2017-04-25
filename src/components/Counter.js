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
        <Button action={this.props.increment}>
          add
        </Button>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};
