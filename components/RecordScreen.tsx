import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function RecordScreen ({path} : {path: string}) {
  return (
    <View>
      <Text>This is records</Text>
    </View>
  );
}