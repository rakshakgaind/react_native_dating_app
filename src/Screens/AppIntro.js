import { StyleSheet, Text, View, FlatList, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../assets/Colors/Colors'

const AppIntro = ({ navigation }) => {
    const Data = [
        'None',
        'High School',
        'College',
        'Bachelor Degree',
        'Postgraduate',
        'Master',
        'Phd/Doctorate',
        'Postdoctoral'
    ]
    const [clickedItems, setClickedItems] = useState(Array(Data.length).fill(false));

    const handleItemClick = (index) => {
        const updatedClickedItems = [...clickedItems];
        updatedClickedItems[index] = !updatedClickedItems[index];
        setClickedItems(updatedClickedItems);
        navigation.navigate('Marital');
    };

    return (
        <View style={styles.top}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Text style={styles.text}>Previous</Text>
                </TouchableOpacity>
             
                <Text style={styles.num}>4<Text style={styles.next}>/8</Text></Text>
                <TouchableOpacity onPress={() => navigation.navigate('Marital')}>
                    <Text style={styles.text}>Skip</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.prog}>
                <View style={styles.Progress}>
                </View>
            </View>
            <Text style={styles.educationText}>What's Your Education?</Text>
            {Data.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => handleItemClick(index)}
                    style={[
                        styles.background,
                        { borderColor: clickedItems[index] ? Colors.Primary.pink : Colors.Primary.Grey },
                    ]}
                >
                    <Text style={{ color: Colors.Primary.Grey, fontWeight: 'bold' }}>{item}</Text>
                </TouchableOpacity>

            ))}
        </View>
    )
}

export default AppIntro

const styles = StyleSheet.create({
    text: {
        color: Colors.Primary.pink,
        fontWeight: 'bold',
        fontSize: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    educationText: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 30,
        color: Colors.Primary.black
    },
    top: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 50 : 30,
        margin: 20
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
        height: 4, width: '35%', borderRadius: 3,
        backgroundColor: Colors.Primary.pink
    },
    next: {
        color: Colors.Primary.Grey,
        fontWeight: 'bold',
        fontSize: 17
    }

})