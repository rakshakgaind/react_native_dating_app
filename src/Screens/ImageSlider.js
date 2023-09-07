import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Colors } from '../assets/Colors/Colors';
import Images from '../ImagesGenertor/ImagesGenerator'

const { width } = Dimensions.get('window');
const ImageSlider = () => {

    const cards = [
        { id: 23, image: require('../assets/Images/new.jpg') },
        { id: 24, image: require('../assets/Images/new1.jpg') },
        { id: 0, image: require('../assets/Images/grl9.jpg') },
        { id: 1, image: require('../assets/Images/grl.jpeg') },
        { id: 2, image: require('../assets/Images/grl1.jpg') },
        { id: 3, image: require('../assets/Images/grl2.jpg') },
        { id: 4, image: require('../assets/Images/grl3.jpg') },
        { id: 5, image: require('../assets/Images/grl4.jpg') },
        { id: 6, image: require('../assets/Images/grl5.jpg') },
        { id: 7, image: require('../assets/Images/grl6.jpg') },
        { id: 8, image: require('../assets/Images/grl7.jpg') },
        { id: 9, image: require('../assets/Images/grl8.jpg') },
        { id: 10, image: require('../assets/Images/grl9.jpg') },
        { id: 11, image: require('../assets/Images/grl.jpeg') },
        { id: 12, image: require('../assets/Images/grl1.jpg') },
        { id: 13, image: require('../assets/Images/grl2.jpg') },
        { id: 14, image: require('../assets/Images/grl3.jpg') },
        { id: 15, image: require('../assets/Images/grl4.jpg') },
        { id: 16, image: require('../assets/Images/grl5.jpg') },
        { id: 17, image: require('../assets/Images/grl6.jpg') },
        { id: 18, image: require('../assets/Images/grl7.jpg') },
        { id: 19, image: require('../assets/Images/grl8.jpg') },
        { id: 20, image: require('../assets/Images/grl9.jpg') },
        { id: 21, image: require('../assets/Images/new.jpg') },
        { id: 22, image: require('../assets/Images/new1.jpg') },
    ];

    return (
        <>
            <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={styles.container}>
                    <Swiper
                        cards={cards}
                        renderCard={(card) => (
                            <View style={styles.card}>
                                <Image source={card.image} style={styles.cardImage} />
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.cardText}>Emma William</Text>
                                    <View style={styles.loc}>

                                        <Image source={Images.loc} style={{ height: 16, width: 16, tintColor: '#fff', marginRight: 4 }} />
                                        <Text style={[styles.locText,]}>0 km away</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                        onSwipedLeft={(cardIndex) => console.log('Swiped left on card:', cardIndex)}
                        onSwipedRight={(cardIndex) => console.log('Swiped right on card:', cardIndex)}
                        cardIndex={0}
                        backgroundColor="transparent"
                        stackSize={2}
                    />
                </View>
                <View style={{ height: 720, alignItems: 'flex-end', flexDirection: 'row', }}>
                    <View style={{ alignItems: 'center', paddingHorizontal: 40 }}></View>
                    <TouchableOpacity style={styles.close}>
                        <Image source={Images.close} style={styles.closeimg} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.close}>
                        <Image source={Images.star} style={styles.img} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.close}>
                        <Image source={Images.heart} style={styles.heart} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeimg: {
        height: 19,
        width: 19,
        tintColor: '#d61337'
    },
    heart: {
        height: 27,
        width: 27,
        tintColor: 'purple'
    },
    img: {
        height: 25,
        width: 25,
        tintColor: '#0eb1e3'
    },
    line: {
        height: 0.5, width: '100%',
        backgroundColor: 'gray',
        marginTop: 24
    },
    centeredView: {
        flex: 1,

    },
    rowContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 22,
        alignItems: 'center',
        paddingTop: 20
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
    closeIcon: {
        justifyContent: 'flex-end'
    },
    modalView: {

    },
    bottomSheet: {
        borderTopRightRadius: 100,
    },
    card: {
        width: width - 40, // Adjust card width based on screen width
        height: width * 1.3, // Adjust card height based on screen width
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        backgroundColor: 'white',
        overflow: 'hidden', // Ensure that image doesn't overflow the card
    },
    cardText: {
        position: 'absolute',
        bottom: 0,
        textAlign: 'center',

        marginBottom: 30,
        color: 'white', // Text color
        fontSize: 18, // Text size
        fontWeight: 'bold', // Text weight
    },
    locText: {

        color: 'white', // Text color
        fontSize: 15, // Text size
        fontWeight: 'bold', // Text weight
    },
    loc: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 10,
    },
    close: {
        height: 65,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        width: 65, borderWidth: 0.7,
        borderColor: Colors.Primary.Grey,
        marginHorizontal: 10,
        marginBottom: 30
    },
    cardImage: {
        flex: 1,
        width: null, // Allow the image to take the full width of the card
        height: null, // Allow the image to take the full height of the card
        resizeMode: 'cover', // Maintain aspect ratio and cover the entire card
        borderRadius: 10,
    },
});
export default ImageSlider;
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
