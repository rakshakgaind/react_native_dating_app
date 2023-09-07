import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Images from '../ImagesGenertor/ImagesGenerator'

const Payment = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#ebf0ec', marginTop: 20 }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ color: 'lightblue', fontSize: 17 }}>Cancel</Text>
                </TouchableOpacity>

                <Text style={{ color: 'black', fontSize: 17 }}>Add a Card</Text>
                <Text style={{ color: 'gray', fontSize: 17 }}>Done</Text>
            </View>
            <View style={{ alignItems: 'center', marginVertical: 60, }}>
                <Image source={Images.card} style={{ height: 140, width: '60%' }} />
            </View>
            <Text style={styles.card}>Card</Text>

            <View style={styles.view}>
                <Image source={Images.card} style={{ height: 25, width: 30 }} />
                <TextInput
                    placeholder='      4242 4242 4242        MM/YY         CVC'
                    keyboardType="numeric"
                />
            </View>
            <Text style={styles.bill}>
                Billing Address</Text>
            <Text style={styles.emma}>Emma willam</Text>
            <Text style={[styles.emma, { marginTop: 2 }]}>Canary Place</Text>
            <Text style={[styles.emma, { marginTop: 2 }]}>3</Text>
            <Text style={[styles.emma, { marginTop: 2 }]}>31217</Text>
            <Text style={[styles.emma, { marginTop: 2 }]}>Macon</Text>
            <Text style={[styles.emma, { marginTop: 2 }]}>State/Province/Region</Text>
            <Text style={[styles.emma, { marginTop: 2 }]}>Country</Text>
        </ScrollView>
    )
}

export default Payment

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        backgroundColor: '#ffff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    card: {
        color: 'gray',
        fontSize: 17,
        paddingStart: 20,
        paddingVertical: 10,
    },
    emma: {
        padding: 10,
        backgroundColor: '#fff',
        fontSize: 16
    },
    bill: {
        color: 'gray',
        fontSize: 17,
        paddingStart: 20,
        marginTop: 20,
        paddingVertical: 10,
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffff',
        paddingHorizontal: 20,
    },
})