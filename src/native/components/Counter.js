import React, { Component, PropTypes } from 'react';
import { Button, View, Text } from 'react-native';


export default class Counter extends Component {
  componentDidMount() {
    console.log('mount');
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>count: { this.props.count }</Text>
        <Text>count: { this.props.count }</Text>
        <Text>count: { this.props.count }</Text>
        <Text>count: { this.props.count }</Text>
        <Text>count: { this.props.count }</Text>
        <Button
          onPress={this.props.actions.increment}
          title="increment"
        />
        <Button
          onPress={this.props.actions.decrement}
          title="decrement"
        />
        <Button
          onPress={this.props.actions.reset}
          title="zero"
        />
      </View>
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
