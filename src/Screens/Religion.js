import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../assets/Colors/Colors';

const Religion = ({ navigation }) => {

    const Data = [
        'Christian',
        'Muslim',
        'Hindu',
        'Atheist',
        'Sikh',
        'Buddhist',
        'Others',
    ]

    return (
        <View style={styles.header}>
            <View style={styles.top}>
                <Text style={styles.text}>Previous</Text>
                <Text style={styles.num}>7<Text style={styles.next}>/8</Text></Text>
                <Text style={styles.text}>Skip</Text>
            </View>
            <View style={styles.prog}>
                <View style={styles.Progress}>
                </View>
            </View>
            <Text style={styles.educationText}>Religion</Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}>
                {Data.map((item, index) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Drinking')}
                        style={styles.background}>
                        <Text key={index} style={styles.item} >{item}</Text>
                    </TouchableOpacity>

                ))}
            </ScrollView>
        </View>
    )
}

export default Religion

const styles = StyleSheet.create({
    text: {
        color: Colors.Primary.pink,
        fontWeight: 'bold',
        fontSize: 15
    },
    header: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 50 : 30,
        margin: 20
    },
    educationText: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 30,
        color: Colors.Primary.black
    },
    item: {
        color: Colors.Primary.Grey,
        fontWeight: 'bold'
    },
    background: {
        borderWidth: 1,
        padding: 20,
        marginBottom: 20,
        borderColor: Colors.Primary.Grey,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 100
    },
    prog: {
        height: 4, width: '100%',
        borderRadius: 3,
        backgroundColor: Colors.Primary.Grey,
        marginVertical: 30
    },
    num: {
        color: Colors.Primary.black,
        fontWeight: 'bold',
        fontSize: 17
    },
    Progress: {
        height: 4,
        width: '88%',
        borderRadius: 3,
        backgroundColor: Colors.Primary.pink
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    next: {
        color: Colors.Primary.Grey,
        fontWeight: 'bold',
        fontSize: 17
    }

})