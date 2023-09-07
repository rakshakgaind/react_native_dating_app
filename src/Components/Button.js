import { View, Text, TouchableOpacity, StyleSheet, TextInput, Modal, FlatList, Image } from 'react-native';
import React, { useState } from 'react';

const Button = ({ btnText,onPress,style,textStyle }) => {

    return (
        <View style={{ paddingHorizontal:20}}>
            <TouchableOpacity
            onPress={onPress}
            style={[styles.button,style ]}>
                <Text style={[styles.btn, textStyle]}>{btnText}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Button

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
        // borderColor:Colors.Primary.Grey ,
        borderRadius: 100,
    }
})