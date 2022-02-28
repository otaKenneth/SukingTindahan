import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, SectionList, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import shops, { initialShop } from '../hooks/getShops';
import getItems from '../hooks/getItems';
const Shops = shops();
var shop = initialShop;
var items = [];

const RecordStack = createStackNavigator();

const Item = ({title, onPress}) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
    <Ionicons size={25} name="ios-arrow-forward"/>
  </TouchableOpacity>
);

function ShopScreen({ navigation }) {
  const renderItem = ({item, index}) => { return (
    <Item key={index} title={item.name} onPress={ () => { shop = item.id; navigation.navigate('PriceList', {name: 'Price List'})} } />
  )};

  return (
    <View style={{width: '100%', flex: 1}}>
      <FlatList
        data={Shops}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

function PriceListScreen({ navigation }) {
  items = getItems(shop);

  const renderItem = ({item, index}) => (
    <View key={index} style={styles.item}>
      <Text style={styles.prodname}>{item.item}</Text>
      <Text style={styles.prodprice}>{item.price}</Text>
    </View>
  )
  
  return (
    <View style={{width: '100%', flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10}}>
        <Button title="Send" color="blue" />
        <Button title="Add" color="green" />
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default function RecordScreen ({path} : {path: string}) {
  return (
    <RecordStack.Navigator>
      <RecordStack.Screen name="Shops" component={ShopScreen} />
      <RecordStack.Screen name="PriceList" component={PriceListScreen} />
    </RecordStack.Navigator>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#88c3f4',
    padding: 20,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
  },
  prodname: {
    fontSize: 18, fontWeight: '800'
  },
  prodprice: {
    fontSize: 12
  }
});