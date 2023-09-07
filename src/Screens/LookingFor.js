import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../assets/Colors/Colors'

const LookingFor = ({ navigation }) => {
    const Data = [
        'Dating',
        'Friendship',
        'Chat Buddy',
        'High Buddy',
        'Sugar Daddy',
        'Sugar Mumma',
        'Sugar Baby',
        'Hookups',
        'Friends with benifits'
    ]
    return (
        <>
            <View style={styles.top}>
                <View style={styles.topText}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.text}>Previous</Text>
                    </TouchableOpacity>
                    <Text style={styles.num}>6<Text style={styles.next}>/8</Text></Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Religion')}>
                        <Text style={styles.text}>Skip</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.prog}>
                    <View style={styles.Progress}>
                    </View>
                </View>
                <Text style={styles.educationText}>I'm Looking For</Text>
                <ScrollView
                    showsVerticalScrollIndicator={false}

                    style={{ flex: 1 }}>
                    {Data.map((item, index) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Religion')}
                            style={styles.background}>
                            <Text key={index} style={{ color: Colors.Primary.Grey, fontWeight: 'bold' }} >{item}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </>
    )
}

export default LookingFor

const styles = StyleSheet.create({
    text: {
        color: Colors.Primary.pink,
        fontWeight: 'bold',
        fontSize: 15
    },
    topText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    top: {
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
        height: 4, width: '75%', borderRadius: 3,
        backgroundColor: Colors.Primary.pink
    },
    next: {
        color: Colors.Primary.Grey,
        fontWeight: 'bold',
        fontSize: 17
    }

})