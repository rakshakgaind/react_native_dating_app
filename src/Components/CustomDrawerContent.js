import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Images from '../ImagesGenertor/ImagesGenerator'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
    return (
        <>
            <View style={{ flex: 1, marginStart: 20, marginTop: Platform.OS === 'ios' ? 40 : 10 }}>
                <View style={styles.image}>
                    <Image source={Images.grl} style={{ height: 90, width: 90, borderRadius: 100 }} />
                </View>
                <Text style={styles.name}>Emma willam,  34</Text>
                <View style={styles.profile}>
                    <Text style={{ color: '#fff' }}> My Profile</Text>
                </View>
                <DrawerContentScrollView {...props}
                >
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>
            </View>
        </>
    )
}

export default CustomDrawerContent

const styles = StyleSheet.create({

    image: {
        height: 90,
        width: 90,
        borderWidth: 0.5,
        borderRadius: 100,
        marginTop: 35,
        marginStart: 10
    },

    navText: { marginVertical: 11, fontSize: 16, color: "black" },
    name: {
        fontSize: 18,
        marginVertical: 15,
        marginStart: 10,
        fontWeight: '600', color: 'black'
    },
    profile: {
        height: 40, width: 125,
        borderWidth: 1,
        borderRadius: 30,
        marginStart: 10,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    }
})