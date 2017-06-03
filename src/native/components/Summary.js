import React, { Component, PropTypes } from 'react';
import { Button, View, Text } from 'react-native';

function CountLine(props) {
  return (
    <Text>
      {props.count}
    </Text>
  );
}

export default class Summary extends Component {
  componentDidMount() {
    console.log('summary', this.props);
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.props.actions.fetchData}
          title="fetch"
        />
        {
          this.props.history.map(props => <CountLine count={props.count} />)
        }
      </View>
    );
  }
}

Summary.propTypes = {
  history: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    fetchData: PropTypes.func.isRequired,
  }),
};

