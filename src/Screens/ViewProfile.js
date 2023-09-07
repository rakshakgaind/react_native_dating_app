import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef } from 'react';
import Images from '../ImagesGenertor/ImagesGenerator'
import RBSheet from "react-native-raw-bottom-sheet";
import Button from '../Components/Button';
import { Colors } from '../assets/Colors/Colors';
const ViewProfile = ({ navigation }) => {
    const closeRef = useRef();
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity>
                <Image source={Images.grl} style={{ height: '80%', width: '100%' }} />
            </TouchableOpacity>
            <View style={styles.topHead}>
                <ScrollView style={styles.modalView}>
                    <View style={styles.header}>
                        <Text style={styles.modalText}>Johan Jeol, 34</Text>
                    </View>
                    <View style={styles.line}>
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <View style={styles.rowContent}>
                            <View>
                                <Text style={styles.modal}>All Photos(0)</Text>
                                <Image source={Images.grl} style={{ height: 100, width: 100, marginTop: 20, borderRadius: 10 }} />
                            </View>

                            <Text style={styles.Text}>See All</Text>
                        </View>
                        <_TextWithLine
                            leftText={'Height'}
                            rightText={"5'9''"}
                        />
                        <_TextWithLine
                            leftText={'Body type'}
                            rightText={'Average'}
                        />
                        <_TextWithLine
                            leftText={'Gender'}
                            rightText={'Woman'}
                        />
                        <View style={styles.line}>
                        </View>
                    </View>
                    <Button
                        onPress={() => navigation.navigate('PremiumScreen')}
                        btnText={'Upgrade to premium'}
                    />
                </ScrollView>
            </View>

        </View>
    )
}

export default ViewProfile

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 22,
        alignItems: 'center',
        paddingTop: 20
    },
    closeIcon: {
        justifyContent: 'flex-end'
    },
    modalText: {
        fontSize: 22,
        color: 'black',
        fontWeight: '600'
    },
    modal: {
        fontSize: 18,
        color: 'black',
        fontWeight: '600'
    },
    Text: {
        fontSize: 17,
        color: Colors.Primary.pink,
        fontWeight: '600'
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
    topHead: {
        backgroundColor: '#fff',
        height: 400,
        width: '100%',
        marginTop: '90%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        position: 'absolute'
    },
})



export const _TextWithLine = ({
    leftText,
    rightText
}) => {
    return (
        <>
            <View style={styles.line}>
            </View>
            <View style={styles.rowContent}>
                <Text style={styles.modal}>{leftText}</Text>
                <Text style={styles.Textmid}>{rightText}</Text>
            </View>
        </>
    )
}