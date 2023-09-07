import { Image, ScrollView, StyleSheet, Text, TextInput, View, Platform } from 'react-native'
import React from 'react'
import Images from '../ImagesGenertor/ImagesGenerator'
import { Colors } from '../assets/Colors/Colors'

const Messages = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: '#ffff', marginTop: 20, padding: 20 }}>
        <View style={styles.headerView}>
          <Image source={Images.BACK_ICON} style={{ tintColor: 'black' }} />
          <Image source={Images.grl} style={styles.img} />
          <View style={{ paddingStart: 10 }}>
            <Text style={styles.name}>Johny Jeol</Text>
            <Text style={{ fontSize: 12 }}>Active Now</Text>
          </View>
        </View>

        <View style={{ flex: 1, marginTop: '110%' }}>
          <Text style={{ textAlign: 'center' }}>Aug 14, 2023</Text>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Image source={Images.grl} style={styles.image} />
            <View style={styles.userHi}>
              <Text style={styles.hi}>Hi</Text>
              <Text style={{ paddingStart: 8, fontSize: 10, }}>1:28 PM</Text>
            </View>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <View style={styles.userAns}>
              <Text style={{ color: '#ffff', fontSize: 17 }}>How are You?</Text>
              <Text style={{ color: '#ffff' }}>1:28 PM</Text>
            </View>
          </View>
          <View style={{ marginTop: '29%',flexDirection:'row',alignItems:'center' }}>
            <Image source={Images.attach} style={{height:25,width:25,marginRight:15}} />
            <TextInput
              placeholder='Write something... '
              onChange={onChangeText}
              value={text}
            />
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default Messages

const styles = StyleSheet.create({

  headerView: {
    flexDirection: "row",
    alignItems: 'center',
    marginTop: Platform.OS === 'ios', 30: 0

  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  hi: {
    paddingStart: 10,
    paddingTop: 6,
    color: 'black'
  },
  img: {
    marginStart: 6,
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  name: {
    color: 'black',
    fontSize: 15,
    fontWeight: '600'
  },
  userHi: {
    height: 47,
    width: 60,
    borderRadius: 13,
    backgroundColor: '#d6d5d2',
    marginStart: 10,

  },
  userAns: {
    backgroundColor: Colors.Primary.pink,
    width: 150,
    padding: 10,
    borderRadius: 10,
    alignItems: 'flex-end',

  }
})