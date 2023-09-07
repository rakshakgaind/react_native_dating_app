import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../assets/Colors/Colors'

const Drinking = ({ navigation }) => {
    const Data = [
        'Non Drinker',
        'Social Drinker',
        'Heavy Drinker',
    ]
    const Smoke = [
        'Non Smoker',
        'Ligh Smoker',
        'Heavy Smoker',
    ]
    const Eat = [
        'Vegan',
        'Vegetarian',
        'Non Vegetarian',
    ]
    return (
        <View style={styles.header}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.text}>Previous</Text>
                </TouchableOpacity>
                <Text style={styles.num}>8/8</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.text}>Skip</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.prog}>
                <View style={styles.Progress}>
                </View>
            </View>
            <Text style={styles.educationText}>Drinking</Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}>
                {Data.map((item, index) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Profile')}
                        style={styles.background}>
                        <Text key={index} style={styles.item} >{item}</Text>
                    </TouchableOpacity>

                ))}
                <Text style={styles.educationText}>Smoking</Text>
                {Smoke.map((item, index) => (
                    <TouchableOpacity
                        style={styles.background}>
                        <Text key={index} style={styles.item} >{item}</Text>
                    </TouchableOpacity>

                ))}
                <Text style={styles.educationText}>Eating</Text>
                {Eat.map((item, index) => (
                    <TouchableOpacity
                        style={styles.background}>
                        <Text key={index} style={styles.Text} >{item}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default Drinking

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
        height: 4, width: '100%', borderRadius: 3,
        backgroundColor: Colors.Primary.pink
    },
    next: {
        color: Colors.Primary.Grey,
        fontWeight: 'bold',
        fontSize: 17
    }

})