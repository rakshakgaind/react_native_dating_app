import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../assets/Colors/Colors'

const Personality = ({ navigation }) => {
    const Data = [
        'Straight',
        'Gay',
        'Lesbian',
        'Bisexual',
        'Trans',
        'Others'
    ]
    const Smoke = [
        'Funny',
        'Romantic',
        'Open-minded',
    ]

    return (
        <View style={styles.header}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.text}>Previous</Text>
                </TouchableOpacity>
                <Text style={styles.num}>3<Text style={{color:'gray'}}>/8</Text></Text>
                <TouchableOpacity onPress={() => navigation.navigate('AppIntro')}>
                    <Text style={styles.text}>Skip</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.prog}>
                <View style={styles.Progress}>
                </View>
            </View>
            <Text style={styles.educationText}>Sexuality</Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}>
                {Data.map((item, index) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AppIntro')}
                        style={styles.background}>
                        <Text key={index} style={styles.item} >{item}</Text>
                    </TouchableOpacity>

                ))}
                <Text style={styles.educationText}>Personality</Text>
                {Smoke.map((item, index) => (
                    <TouchableOpacity
                        style={styles.background}>
                        <Text key={index} style={styles.item} >{item}</Text>
                    </TouchableOpacity>

                ))}


            </ScrollView>
        </View>
    )
}

export default Personality

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
    Text: {
        color: Colors.Primary.Grey,
        fontWeight: 'bold'
    },
    item: {
        color: Colors.Primary.Grey,
        fontWeight: 'bold'
    },
    educationText: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 30,
        color: Colors.Primary.black
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        height: 4, width: '30%', borderRadius: 3,
        backgroundColor: Colors.Primary.pink
    },
    next: {
        color: Colors.Primary.Grey,
        fontWeight: 'bold',
        fontSize: 17
    }

})