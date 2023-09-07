import { StyleSheet, Image, Text, View, Platform, TouchableOpacity } from 'react-native'
import React from 'react'

import Images from '../ImagesGenertor/ImagesGenerator'
import { Colors } from '../assets/Colors/Colors'
export const LoginC = ({
    headerText,
    midText,
    navigation,
    onPress
}) => (
    <View style={styles.top}>
        <TouchableOpacity onPress={onPress}>
            <Image source={Images.BACK_ICON} style={{ tintColor: 'black' }} />
        </TouchableOpacity>
        <Text style={styles.text}>{headerText}</Text>
        <Text style={styles.midtext}>{midText}</Text>
    </View>
)



const styles = StyleSheet.create({

    text: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 6,
        color: Colors.Primary.black
    },
    top: {
        margin:  20,
        marginTop:Platform.OS === 'ios'? 50: 40
    },

    midtext: {
        color: Colors.Primary.Grey,
        fontSize: 16,
        marginLeft: 7,
        marginVertical: 10
    }

})