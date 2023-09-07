import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { LoginC } from '../Components/LoginC';
import PnkButton from '../Components/PnkButton';
import { Colors } from '../assets/Colors/Colors';

const Login = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LoginC
        onPress={() => navigation.goBack()}
        headerText={'Log In'}
        midText={'Enter your phone number to Log In'}
      />
      <PnkButton btnText={'Next'}
        onPress={() => navigation.navigate('Verification')}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        style={styles.log}>
        <Text style={styles.account}>Don't have an account yet?
          <Text style={styles.join}> Join Now</Text></Text>
      </TouchableOpacity>
      <View style={styles.text}>
        <Text style={{ color: 'gray', fontWeight: '400' }}>By creating an account you agree to our</Text>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>
          Terms & Conditions <Text style={{ color: 'gray', fontWeight: '400' }}>and
            <Text style={{ color: 'black', fontWeight: 'bold' }}> Privacy policy
              <Text style={{ color: 'gray', fontWeight: '400' }}> of Legendbae</Text></Text></Text></Text>
      </View>
    </View>
  )
}

export default Login;
const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    bottom: 0, marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  log: {
    alignItems: 'center',
    marginTop: '9%'
  },
  join: {
    color: '#991877',
    fontWeight: 'bold'
  },
  account: {
    color: Colors.Primary.Grey,
    fontSize: 15
  },
})