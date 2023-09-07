import { Image, StyleSheet, Text, Switch, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Images from '../ImagesGenertor/ImagesGenerator';
import Button from '../Components/Button';
import { Colors } from '../assets/Colors/Colors';


import { Oval, Triangle, Trapezoid, Pentagon, Hexagon, Octagon } from 'react-native-shape';

const PremiumScreen = ({ navigation }) => {

    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    return (
        <>
            <View style={{ flex: 1 }}>
                <TouchableOpacity>
                    <Image source={Images.background} />
                </TouchableOpacity>
                <View style={styles.topHead}>
                    <View style={styles.modalView}>
                        <View style={styles.header}>
                            <Text style={styles.modalText}>Pricing</Text>
                            <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 20 }}>
                                <Text style={{ marginRight: 10 }}>Bill yearly</Text>
                                <Switch
                                    trackColor={{ false: '#767577', true: '#991877' }}
                                    thumbColor={notificationsEnabled ? '#fff' : '#fff'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={(newValue) => setNotificationsEnabled(newValue)}
                                    value={notificationsEnabled}
                                />
                                <Text style={{ marginLeft: 10 }}>Bill monthly</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20, marginLeft: 30 }}>
                            <Text style={styles.Text}>Premium Plan</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.modal}>$25</Text>
                                <Text style={styles.text}> /monthly</Text>
                            </View>

                        </View>
                        <View style={styles.view}>
                            <Image source={Images.tick} style={styles.bottom} />
                            <Text style={{ paddingStart: 15 }}>Unlimited swipes</Text>
                        </View>
                        <View style={styles.view}>
                            <Image source={Images.tick} style={styles.bottom} />
                            <Text style={{ paddingStart: 15 }}>Message directly </Text>
                        </View>
                        <View style={styles.view}>
                            <Image source={Images.tick} style={styles.bottom} />
                            <Text style={{ paddingStart: 15 }}>Swipe around the world</Text>
                        </View>
                        <View style={styles.view}>
                            <Image source={Images.tick} style={styles.bottom} />
                            <Text style={{ paddingStart: 15 }}>See who like you</Text>
                        </View>
                        <View style={styles.view}>
                            <Image source={Images.tick} style={styles.bottom} />
                            <Text style={{ paddingStart: 15 }}>Access to all seekers options</Text>
                        </View>
                        <View style={{ marginTop: '15%' }}>
                            <Button
                                onPress={() => navigation.navigate('Payment')}
                                btnText={'Subscribe Now'}
                            />
                        </View>
                        {/* <View style={{ alignItems: 'center' }}>
                            <Oval color="red" scale={8} />

                        </View> */}

                        {/* //Square, Rectangle, Circle, Oval, Triangle, Trapezoid, Pentagon, Hexagon & Octagon. */}


                    </View>
                </View>
            </View>
        </>
    )
}

export default PremiumScreen

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',

        paddingHorizontal: 22,
        alignItems: 'center',
        paddingTop: 20
    },
    bottom: {
        height: 20,
        width: 20,
        tintColor: Colors.Primary.pink
    },
    view: {
        flexDirection: 'row',
        paddingStart: 30,
        paddingVertical: 7
    },
    closeIcon: {
        justifyContent: 'flex-end'
    },
    text: {
        fontSize: 15,
        color: 'gray',

    },
    topHead: {
        backgroundColor: '#fff',
        height: 700,
        width: '100%',
        marginTop: '50%',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        position: 'absolute'
    },
    modalText: {
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold'
    },
    modal: {
        fontSize: 45,
        color: 'black',
        fontWeight: '600',
        fontWeight: 'bold'
    },
    Text: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        // margin:20
    },
    Textmid: {
        fontSize: 17,
        color: 'gray',
        fontWeight: '600'
    },
    rowContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    line: {
        height: 0.5, width: '100%',
        backgroundColor: 'gray',
        marginTop: 24
    },
})
