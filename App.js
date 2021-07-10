import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Animated } from 'react-native';
import { NativeBaseProvider, Box, Row } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

// import { Card } from 'react-native-paper';
import Steps from './pedometer.js';
import styles from './styles.js';

export default function App () {

  return (
    <NativeBaseProvider>
      <View style={styles.title}>
        <Text style={{fontSize: 35, fontWeight: 'bold'}}>iHeartHealth</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.pedometer}>
        <Steps />
      </View>
    </NativeBaseProvider>
  );

}
