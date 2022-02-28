import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Button, SectionList, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import { Text, View } from '../components/Themed';

const OptionStack = createStackNavigator();
var options = [
    {
        id: 1,
        navigation: 'Record',
        name: 'Shops'
    },
    {
        id: 2,
        navigation: 'Inventory',
        name:'Inventory',
    }, 
    {
        id: 3,
        navigation: 'POS',
        name: 'POS'
    },
    {
        id: 4,
        navigation: 'Branches',
        name:'Branches'
    }
];
var option = 1;

const Item = ({ title, onPress }) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons size={25} name="ios-arrow-forward" />
    </TouchableOpacity>
);

function OptionScreen({ navigation }) {
    const renderItem = ({ item, index }) => {
        return (
            <Item key={index} title={item.name} onPress={() => { option = item.id; navigation.navigate(item.navigation, {name:`${item.name} Screen`})}} />
        )
    };

    return (
        <View style={{ width: '100%', flex: 1 }}>
            <FlatList
                data={options}
                renderItem={renderItem}
            />
        </View>
    );
};

import RecordScreen from '../components/RecordScreen';

export default function TabTwoScreen() {
    return (
        <OptionStack.Navigator initialRouteName='Option'>
            <OptionStack.Screen name="Option" component={OptionScreen} options={{headerShown:false,}} />
            <OptionStack.Screen name="Record" component={RecordScreen} options={{headerShown:false,}} />
            {/* <OptionScreen/> */}
        </OptionStack.Navigator>
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
    item: {
        backgroundColor: '#88c3f4',
        padding: 20,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
