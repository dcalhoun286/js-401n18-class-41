import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Pedometer } from 'expo-sensors';

export default class Steps extends React.Component {
  state = {
    isPedometerAvailable: 'checking',
    pastStepCount: 0,
    currentStepCount: 0,
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps,
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result),
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: 'Could not get isPedometerAvailable: ' + error,
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: 'Could not get stepCount: ' + error,
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    return (

      <View /* style={styles1.pedometer} */ >
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Pedometer.isAvailableAsync(): {this.state.isPedometerAvailable}</Text>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Steps taken in the last 24 hours: {this.state.pastStepCount}</Text>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Walk! And watch this go up: {this.state.currentStepCount}</Text>
      </View>

    )
  }
}

// const styles1 = StyleSheet.create({
//   pedometer: {
//     justifyContent: 'center',
//     alignContent: 'center',
//     alignSelf: 'center',
//     textAlignVertical: 'center',
//     backgroundColor: 'yellow',
//     padding: 25,
//     borderTopLeftRadius: 15,
//     borderBottomLeftRadius: 15,
//     borderTopRightRadius: 15,
//     borderBottomRightRadius: 15,
//     height: 200,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 5,
//     lineHeight: Platform.OS === 'ios' ? 34 : 'normal',
//   }
// });