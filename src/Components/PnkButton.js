import { View, Text, TouchableOpacity, StyleSheet, TextInput, Modal, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import Images from '../ImagesGenertor/ImagesGenerator';

const countriesData = [
    { name: 'United States', callingCode: '+1', image: Images.a },
    { name: 'United Kingdom', callingCode: '+44', image: Images.b },
    { name: 'Afghanistan', callingCode: '+93', image: Images.c },
    { name: 'Brazil', callingCode: '+55', image: Images.d },
    { name: 'Canada', callingCode: '+1', image: Images.e },
    { name: 'China', callingCode: '+86', image: Images.f },
    { name: 'Finland', callingCode: '+358', image: Images.g },
    { name: 'France', callingCode: '+33', image: Images.h },
    { name: 'Germany', callingCode: '+49', image: Images.i },
    { name: 'India', callingCode: '+91', image: Images.india },
    { name: 'Iran', callingCode: '+98', image: Images.j },
    { name: 'Israel', callingCode: '+972', image: Images.k },
    { name: 'Japan', callingCode: '+81', image: Images.l },
    { name: 'Malaysia', callingCode: '+60', image: Images.m },
    { name: 'Maldives', callingCode: '+960', image: Images.n },
    { name: 'Mexico', callingCode: '+52', image: Images.o },
    { name: 'Nepal', callingCode: '+977', image: Images.p },
];

const PnkButton = ({ btnText, onPress }) => {

    const [countryCode, setCountryCode] = useState('+1');
    const [modalVisible, setModalVisible] = useState(false);


    const showCountryPicker = () => {
        setModalVisible(true);
    };
    const handleCountrySelect = (country) => {
        setCountryCode(country.callingCode);
        setModalVisible(false);
    };

    return (

        <View style={{ padding: 20, marginTop: 40 }}>
            <View style={styles.inputView}>
                <TouchableOpacity onPress={showCountryPicker} style={styles.codeView}>
                    <Text style={styles.code}>{countryCode}</Text>
                    <Image source={Images.down} style={{ height: 16, width: 16 }} />
                </TouchableOpacity>
                <TextInput
                    placeholder='Phone Number'
                    style={styles.input}
                    keyboardType='numeric'
                />
            </View>
            <TouchableOpacity
                onPress={onPress}
                style={styles.button}>
                <Text style={styles.btn}>{btnText}</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{ flex: 1, marginTop: 40 }}>
                    <FlatList
                        data={countriesData}
                        keyExtractor={(item) => item.cca2}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleCountrySelect(item)}>
                                <View style={styles.flatlist}>
                                    <Image source={item.image} style={{ height: 25, width: 25 }} />
                                    <Text style={{ paddingStart: 20, color: 'black' }}>{item.callingCode}</Text>
                                    <Text style={{ paddingStart: 20, color: 'black' }}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </Modal>
        </View>
    )

}
export default PnkButton

const styles = StyleSheet.create({
    inputView: {
        borderWidth: 1.5,
        borderRadius: 100,
        height: 55,
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#e0dcdf'
    },
    flatlist: {
        flexDirection: 'row',
        backgroundColor: '#e0dcdf',
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        padding: 20
    },

    codeView: {
        backgroundColor: '#e0dcdf',
        height: 56,
        flexDirection: 'row',
        borderWidth: 1.5,
        width: '19%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        borderColor: '#e0dcdf'
    },
    code: {
        color: 'black',
    },
    input: {
        padding: 15,
    },
    btn: {
        padding: 15,
        color: '#fff',
        fontSize: 17,
        textAlign: 'center',

    },
    button: {
        height: 55,
        marginTop: 30,
        width: '100%',
        backgroundColor: '#991877',
        borderRadius: 100,
    }
})