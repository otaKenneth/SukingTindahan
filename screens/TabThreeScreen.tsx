import * as React from 'react';
import { StyleSheet } from 'react-native';

import RecordScreen from '../components/RecordScreen';
import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {
  return (
    <RecordScreen path="/screens/TabThreeScreen.js" />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
