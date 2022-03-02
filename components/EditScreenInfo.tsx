import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditScreenInfo({ path }: { path: string }, { item }: { item: object }) {
    const [itemName, setText] = useState();
    const [itemPrice, setPrice] = useState();
    const [itemCount, setCount] = useState();
    
    return (
        <ScrollView>
            <View>
                <View style={styles.container}>
                    <Text style={{padding: 10, fontSize: 18, flex: 0.5}}>Item Name:</Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={newName => setText(newName)}
                    defaultValue={itemName}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={{padding: 10, fontSize: 18, flex: 0.5}}>Item Price:</Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={newPrice => setPrice(newPrice)}
                    defaultValue={itemPrice}
                    keyboardType="number-pad"
                    />
                </View>
                <View style={styles.container}>
                    <Text style={{padding: 10, fontSize: 18, flex: 0.5}}>Stock:</Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={newCount => setCount(newCount)}
                    defaultValue={itemCount}
                    keyboardType="number-pad"
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15, flexDirection: 'row', flexWrap: "wrap"
    },
    textInput: {
        height: 40, paddingHorizontal: 10, marginHorizontal: 10, flex: 1,
        borderColor: "white", borderStyle: "solid", borderWidth: 2, borderRadius: 10,
        color: "white"
    }
});
