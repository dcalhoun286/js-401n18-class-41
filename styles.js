import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    flex: 1,
    backgroundColor: '#888',
    borderWidth: 1,
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    maxHeight: '10%',
    elevation: 1,
  },
  pedometer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'yellow',
    padding: 25,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    height: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    lineHeight: Platform.OS === 'ios' ? 34 : 'normal',
  }
})

export default styles;
