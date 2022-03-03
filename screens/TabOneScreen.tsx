import React, { useState, useEffect } from 'react';
import { Alert, Button, Modal, Pressable, ScrollView, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { Text, View } from '../components/Themed';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function TabOneScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [count, setCount] = useState();
    const [scannedData, setData] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    });

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setData(data)
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={{ height: '100%', justifyContent: 'center' }}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={styles.camera}
                />
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={ () => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{justifyContent: 'center', flex: 1,}}>
                    <View style={styles.modalView}>
                        <View style={{height: '80%', width: '100%', backgroundColor: 'white'}}>
                            <Text style={{color: '#000'}}>Item Code: {scannedData}</Text>
                            <Text style={{color: '#000'}}>Item Name: Petroleum Jelly</Text>
                            <TextInput
                              style={styles.textInput}
                              placeholder='1'
                              keyboardType='number-pad'
                            />
                        </View>
                        <View style={{ width: '100%', backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Pressable
                              style={{...styles.buttonStyle, backgroundColor: '#e82615', flex: 0.4 }}
                              onPress={() => { setModalVisible(!modalVisible) }}
                            >
                                <Text style={{color: '#fff', textAlign: 'center'}}>Close</Text>
                            </Pressable>
                            <Pressable
                              style={{...styles.buttonStyle, backgroundColor: '#345', flex: 0.4 }}
                              onPress={() => { setModalVisible(!modalVisible) }}
                            >
                                <Text style={{color: '#fff', textAlign: 'center'}}>Submit</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={{ position: 'absolute', bottom: 0, width: '100%', paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity style={{ ...styles.buttonStyle, backgroundColor: '#4cc2e6' }}
                  onPress={ () => { setModalVisible(true); }}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 21, textAlign: 'center'}}>Add Manually</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.buttonStyle, backgroundColor: '#f7731b' }}
                  onPress={ () => { setModalVisible(true); }}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 21, textAlign: 'center'}}>Multiply</Text>
                </TouchableOpacity>
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
    buttonStyle: {
        paddingVertical: 15, paddingHorizontal: 20,
        borderRadius: 15,
    },
    textInput: {
        height: 40, paddingHorizontal: 10, marginVertical: 20,
        borderColor: "black", borderStyle: "solid", borderWidth: 2, borderRadius: 10,
        textAlign: 'right'
    },
    modalView: {
        height: '30%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
});
