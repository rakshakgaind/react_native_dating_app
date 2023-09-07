import { View, Text, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import React, { useState, useRef } from 'react';
import Images from '../ImagesGenertor/ImagesGenerator';
import RBSheet from "react-native-raw-bottom-sheet";
import Button from './Button';


const CustomHeader = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const closeRef = useRef();

    return (
        <>
            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: 22,
                alignItems: 'center',
                backgroundColor:'#fff',
                paddingTop: Platform.OS === 'ios' ? 40 : 35,
            }}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Image source={Images.drawer} style={{ height: 30, width: 25 }} />
                </TouchableOpacity>
                <Text style={{ color: 'black', fontSize: 18 }}>Discover</Text>
                <TouchableOpacity onPress={() => closeRef.current.open()}>
                    <Image source={Images.filter} style={{ height: 22, width: 22 }} />
                </TouchableOpacity>
            </View>
            <RBSheet
                customStyles={{
                    container: {
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20
                    }
                }}
                ref={closeRef}
                height={650}  >
                <View style={styles.modalView}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.closeIcon}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Image source={Images.close} style={{ height: 15, width: 15 }} />
                        </TouchableOpacity>
                        <Text style={styles.modalText}>Filter</Text>
                        <Text style={styles.Text}>Reset</Text>
                    </View>
                    <View style={styles.line}>
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <View style={styles.rowContent}>
                            <Text style={styles.modalText}>Distance</Text>
                            <Text style={styles.Text}>800mi</Text>
                        </View>
                        <_TextWithLine
                            leftText={'Intersted in'}
                            rightText={'800mi'}
                        />
                        <_TextWithLine
                            leftText={'Show me'}
                            rightText={'800mi'}
                        />
                        <_TextWithLine
                            leftText={'Age'}
                            rightText={'800mi'}
                        />
                        <View style={styles.line}>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: '50%' }}>
                    <Button
                        onPress={() => navigation.navigate('ViewProfile')}
                        btnText={'Done'}
                    />
                </View>
            </RBSheet>
        </>
    );
};
export default CustomHeader

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 22,
        alignItems: 'center',
        paddingTop: 20
    },
    closeIcon: {
        justifyContent: 'flex-end'
    },
    modalText: {
        fontSize: 17,
        color: 'black',
        fontWeight: '600'
    },
    Text: {
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


export const _TextWithLine = ({
    leftText,
    rightText
}) => {
    return (
        <>
            <View style={styles.line}>
            </View>
            <View style={styles.rowContent}>
                <Text style={styles.modalText}>{leftText}</Text>
                <Text style={styles.Text}>{rightText}</Text>
            </View>
        </>
    )
}
