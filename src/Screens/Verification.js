import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import PnkButton from '../Components/Button'
import Images from '../ImagesGenertor/ImagesGenerator'
import { Colors } from '../assets/Colors/Colors'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const Verification = ({ navigation }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const CELL_COUNT = 6;

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}>
                <Image source={Images.BACK_ICON} style={styles.top} />
            </TouchableOpacity>
            <Text style={styles.text}>Enter verification code</Text>
            <Text style={styles.mid}>We sent an <Text style={{fontWeight:'bold',color:'black'}}>SMS <Text style={styles.mid}>
             with a code to verify your</Text></Text>   </Text>
            <Text style={styles.midtext}>phone number</Text>
            <Text style={styles.num}>+91 7865434241</Text>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                )}
            />
            <PnkButton onPress={() => navigation.navigate('Personality')}
                btnText={'Next'}
            />
            <Text style={styles.code}>I did't get Code</Text>
        </View>
    )
}

export default Verification

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 30
    },
    codeFieldRoot: {
        marginTop: 30,
        marginHorizontal: 25
    },
    cell: {
        width: 45,
        height: 45,
        lineHeight: 38,
        fontSize: 24,
        alignItems:'center',
        paddingTop:2,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
    },
     top: {
        margin:  20,
        tintColor:'black',
        marginTop:Platform.OS === 'ios'? 50: 40
    },
    focusCell: {
        borderColor: Colors.Primary.getCellOnLayoutHandler,
   
    },

    text: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: "center",
        color: Colors.Primary.black
    },
    midtext: {
        color: Colors.Primary.Grey,
        fontSize: 16,
        textAlign: 'center',

    },
    mid: {
        color: Colors.Primary.Grey,
        fontSize: 16,
        textAlign: 'center',
        marginTop: 25

    },
    num: {
        color: Colors.Primary.black,
        fontSize: 17,
        textAlign: 'center',
        marginTop: 25
    },
    code: {
        color: '#991877',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20
    }
})