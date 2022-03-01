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

const Item = ({ title, onPress }) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons size={25} name="ios-arrow-forward" />
    </TouchableOpacity>
);

function ShopScreen({ navigation }) {
    const renderItem = ({ item, index }) => {
        return (
            <Item key={index} title={item.name} onPress={() => { shop = item.id; navigation.navigate('Price List', { name: 'Price List' }) }} />
        )
    };

    return (
        <View style={{ width: '100%', flex: 1 }}>
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

    const renderItem = ({ item, index }) => (
        <TouchableOpacity style={styles.item} onPress={() => { item = item; navigation.navigate('Edit', { name: 'Edit Screen', data: item, }) }}>
            <Text style={styles.prodname}>{item.item}</Text>
            <Text style={styles.prodprice}>{item.price}</Text>
            <Text style={styles.prodstock}>{item.stock}</Text>
        </TouchableOpacity>
    )

    return (
        <View>
            <View style={{ marginVertical: 10, flexDirection: "row", justifyContent: "space-around" }}>
                <TouchableOpacity style={{ flex: 0.4 }}>
                    <Ionicons name="ios-send" size={30} color="#61e64c" style={{ textAlign: "center"}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0.4 }} onPress={ () => {navigation.navigate('Add', { name: 'Edit Screen' })} }>
                    <Ionicons name="ios-add-circle-outline" size={30} color="#4cc2e6" style={{ textAlign: "center"}} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

import EditScreen from '../components/EditScreenInfo';

export default function RecordScreen({ path }: { path: string }) {
    return (
        <RecordStack.Navigator>
            <RecordStack.Screen name="Shops" component={ShopScreen} />
            <RecordStack.Screen name="Add" component={EditScreen} />
            <RecordStack.Screen name="Price List" component={PriceListScreen} />
            <RecordStack.Screen name="Edit" component={EditScreen} />
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
        fontSize: 12,
        textAlign: 'left',
    },
    prodstock: {
        fontSize: 12,
    },
    addButton: {
        backgroundColor: '#5afc03',
        padding: 15,
        marginVertical: 5,
        color: "#191a19", 
    }
});