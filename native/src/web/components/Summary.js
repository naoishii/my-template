import React, { Component, PropTypes } from 'react';

// 冗長
function Button(props) {
  return (
    <button onClick={props.action}>
      {props.children}
    </button>
  );
}

function CountLine(props) {
  return (
    <div>
      {props.count}
    </div>
  );
}

export default class Summary extends Component {
  componentDidMount() {
    console.log('summary', this.props);
  }

  render() {
    return (
      <div>
        <Button action={this.props.actions.fetchData} >
          fetch
        </Button>
        {
          this.props.history.map(props => <CountLine count={props.count} />)
        }
      </div>
    );
  }
}

Summary.propTypes = {
  history: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    fetchData: PropTypes.func.isRequired,
  }),
};

