import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NativeBaseProvider, Box, Row } from 'native-base';

import Steps from './pedometer.js';
import styles from './styles.js';

export default function App () {

  return (
    <NativeBaseProvider>
      <View style={styles.title}>
        <Text>iHeartHealth</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.pedometer}>
        <Steps />
      </View>
    </NativeBaseProvider>
  );

}
