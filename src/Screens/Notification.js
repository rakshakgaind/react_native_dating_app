import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Images from '../ImagesGenertor/ImagesGenerator'

const Notification = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Image source={Images.BACK_ICON} style={{ tintColor: 'black', }} />
        </TouchableOpacity>

        <Text style={styles.headerText}>Seekers</Text>
      </View>

      <View style={styles.View}>
        <View style={styles.imgView}>
          <TouchableOpacity style={styles.roundbot}>
            <Image source={Images.advice} style={styles.img} />
          </TouchableOpacity>
          <Text style={styles.text}>I need advice</Text>
        </View>
        <View style={styles.imgView}>
          <TouchableOpacity style={styles.roundmid}>
            <Image source={Images.date} style={styles.img} />
          </TouchableOpacity>
          <Text style={styles.text}>Be my date</Text>
        </View>
        <View style={styles.imgView}>
          <TouchableOpacity style={styles.round}>
            <Image source={Images.breakfast} style={styles.img} />
          </TouchableOpacity>
          <Text style={styles.text}>Breakfast date</Text>
        </View>
      </View>


      <View style={styles.View}>
        <View style={styles.imgView}>
          <TouchableOpacity style={styles.round}>
            <Image source={Images.chat} style={styles.img} />
          </TouchableOpacity>
          <Text style={styles.text}>Chat buddy</Text>
        </View>
        <View style={styles.imgView}>
          <TouchableOpacity style={styles.roundmid}>
            <Image source={Images.latte} style={styles.img} />
          </TouchableOpacity>
          <Text style={styles.text}>Coffee dates</Text>
        </View>
        <View style={styles.imgView}>
          <TouchableOpacity style={styles.round}>
            <Image source={Images.diner} style={styles.img} />
          </TouchableOpacity>
          <Text style={styles.text}>Dinner date</Text>
        </View>
      </View>


      <View style={styles.View}>
        <View style={styles.imgView}>
          <TouchableOpacity style={styles.round}>
            <Image source={Images.drink} style={styles.img} />
          </TouchableOpacity>
          <Text style={styles.text}>Drink date</Text>
        </View>
        <View style={styles.imgView}>
          <TouchableOpacity style={styles.roundbot}>
            <Image source={Images.date} style={styles.img} />
          </TouchableOpacity>
          <Text style={styles.text}>Hookups</Text>
        </View>
        <View style={styles.imgView}>
          <TouchableOpacity style={styles.roundbot}>
            <Image source={Images.language} style={styles.img} />
          </TouchableOpacity>
          <Text style={styles.text}>Language </Text>
        </View>
      </View>

      <View style={styles.View}>
        <View style={styles.imgView}>
          <TouchableOpacity style={styles.roundbot}>
            <Image source={Images.diner} style={styles.img} />
          </TouchableOpacity>
          <Text style={styles.text}>Lunch</Text>
        </View>
        <View style={styles.imgView}>
          <TouchableOpacity style={styles.roundmid}>
            <Image source={Images.movie} style={styles.img} />
          </TouchableOpacity>
          <Text style={styles.text}>Movie date</Text>
        </View>
        <View style={styles.imgView}>
          <TouchableOpacity style={styles.round}>
            <Image source={Images.swaping} style={styles.img} />
          </TouchableOpacity>
          <Text style={styles.text}>Swaping</Text>
        </View>
      </View>
      <View style={styles.View}>
        <View style={styles.imgView}>
          <TouchableOpacity style={styles.round}>
            <Image source={Images.dress} style={styles.img} />
          </TouchableOpacity>
          <Text style={styles.text}>Party Dress</Text>
        </View>
        <View style={styles.imgView}>
          <TouchableOpacity style={styles.roundmid}>
            <Image source={Images.sports} style={styles.img} />
          </TouchableOpacity>
          <Text style={styles.text}>Sports dates</Text>
        </View>
        <View style={styles.imgView}>
          <TouchableOpacity style={styles.round}>
            <Image source={Images.study} style={styles.img} />
          </TouchableOpacity>
          <Text style={styles.text}>Study date</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Notification

const styles = StyleSheet.create({
  img: { height: 55, width: 55 },
  headerText: {
    marginStart: ' 34%',
    fontSize: 18,
    fontWeight: 'bold',
    color: "black"
  },
  View: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  text: {
    marginTop: 16,
    fontSize: 17,
    color: 'black'
  },
  imgView: {
    alignItems: 'center',
  },
  top: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingVertical: 12,
    alignItems: "center",
    paddingStart: 16
  },
  round: {
    height: 80,
    width: 80,
    borderWidth: 0.5,
    borderColor: '#e3d5e0',
    borderRadius: 100,
    backgroundColor: '#e3d5e0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  roundmid: {
    height: 80,
    width: 80,
    borderWidth: 0.5,
    borderColor: '#dfe6e4',
    borderRadius: 80,
    backgroundColor: '#dfe6e4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  roundbot: {
    height: 80,
    width: 80,
    borderWidth: 0.5,
    borderColor: '#e6d8d9',
    borderRadius: 80,
    backgroundColor: '#e6d8d9',
    alignItems: 'center',
    justifyContent: 'center'
  }


  //#dfe6e4 #e6d8d9
})