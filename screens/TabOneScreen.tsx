import React, { useState, useEffect } from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';

export default function TabOneScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [count, setCount] = useState();

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    });

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={{ height: '100%' }}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={styles.camera}
                />
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View>
            <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                <Button title={'Add Manually'} color='#4cc2e6' onPress={() => { alert('Shit') }}/>
                <Button title={'Multiple'} color='#f7731b' onPress={() => { alert('multiple of the item') }}/>
            </View>
        </View>
    );
}

// export default function TabOneScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Reader</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    camera: {
        ...StyleSheet.absoluteFillObject,
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
    textInput: {
        height: 40, paddingHorizontal: 10, marginHorizontal: 10, flex: 1,
        borderColor: "white", borderStyle: "solid", borderWidth: 2, borderRadius: 10,
        color: "white"
    }
});
