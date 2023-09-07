import { Image, StyleSheet, Switch, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Images from '../ImagesGenertor/ImagesGenerator'

const Settings = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [pauseMatchesEnabled, setPauseMatchesEnabled] = useState(false);
  const [matchSoundEnabled, setMatchSoundEnabled] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Image source={Images.BACK_ICON} style={{ tintColor: 'black', }} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <TouchableOpacity style={styles.DividerContent}>
        <Text style={styles.text}>Account Settings</Text>
        <Image source={Images.right} style={styles.img} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.DividerContent}>
        <Text style={styles.text}>Notifications</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#991877' }}
          thumbColor={notificationsEnabled ? '#fff' : '#fff'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(newValue) => setNotificationsEnabled(newValue)}
          value={notificationsEnabled}
        />
      </TouchableOpacity>
      <View style={styles.DividerContent}>
        <Text style={styles.text}>Pause Matches</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#991877' }}
          thumbColor={pauseMatchesEnabled ? '#fff' : '#fff'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(onValue) => setPauseMatchesEnabled(onValue)}
          value={pauseMatchesEnabled}
        />
      </View>
      <View style={styles.DividerContent}>
        <Text style={styles.text}>Match Sound</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#991877' }}
          thumbColor={matchSoundEnabled ? '#fff' : '#fff'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(onValue) => setMatchSoundEnabled(onValue)}
          value={matchSoundEnabled}
        />
      </View>
      <TouchableOpacity style={styles.DividerContent}>
        <Text style={styles.text}>Rate this App</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.DividerContent}>
        <Text style={styles.text}>Share this App</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Auth')}
        style={styles.DividerContent}>
        <Text style={[styles.text, { color: '#991877', fontWeight: '500' }]}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  img: {
    height: 20,
    width: 20,
    tintColor: 'gray'
  },
  headerText: {
    marginStart: ' 37%',
    fontSize: 18,
    fontWeight: 'bold',
    color: "black"
  },
  text: {
    fontSize: 16
  },
  header: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingVertical: 12,
    alignItems: "center",
    paddingStart: 16,
    backgroundColor: '#fff'
  },

  DividerContent: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  }
})