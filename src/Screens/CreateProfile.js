import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import Button from '../Components/Button'
import Images from '../ImagesGenertor/ImagesGenerator'
import { Colors } from '../assets/Colors/Colors';

const CreateProfile = ({ navigation }) => {

    return (
        <>

            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.view}>
                        <Image source={Images.grl} style={styles.img} />
                    </TouchableOpacity>
                    <Text style={styles.name}>Jeney Helson</Text>
                </View>
                <View style={styles.midview}>
                    <Image source={Images.done} style={styles.image} />
                    <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Congratulations!</Text>
                    <Text style={{ fontSize: 15, marginVertical: 15 }}>You have successfully completed your profile</Text>
                </View>
                <View style={styles.btn}>
                    <Button
                        onPress={() => navigation.navigate('Root')}
                        btnText={'Discover Now'} />
                </View>
            </View>
        </>
    )
}

export default CreateProfile

const styles = StyleSheet.create({
    header: {
        flex: 1.3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    view: {
        height: 130,
        width: 130,
        borderWidth: 1,
        borderRadius: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 68,
        width: 68,
        tintColor: Colors.Primary.pink
    },
    name: {
        marginTop: 15,
        fontSize: 22,
        fontWeight: 'bold'
    },
    btn: {
        flex: 0.7,
        justifyContent: 'flex-end',
        paddingBottom: 50
    },
    img: {
        height: 130,
        width: 130,
        borderRadius: 70
    },
    midview: {
        flex: 0.7,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 60
    },
})