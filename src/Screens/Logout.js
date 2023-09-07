import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react';
import Images from '../ImagesGenertor/ImagesGenerator'
import Button from '../Components/Button'
import { Colors } from '../assets/Colors/Colors'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

// FacebookSDK.sdkInitialize();
const Logout = ({ navigation }) => {
  useEffect(() => {

    GoogleSignin.configure({
      webClientId: 'YOUR_WEB_CLIENT_ID',
      offlineAccess: false,
    });
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Google Sign-In Success:', userInfo);

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Google Sign-In Cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Google Sign-In is already in progress');
      } else {
        console.error('Google Sign-In Error:', error);
      }
    }
  };
  // const handleFacebookLogin = async () => {
  //     try {
  //       const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  //       if (result.isCancelled) {
  //         console.log('Facebook login canceled');
  //       } else {
  //         const data = await AccessToken.getCurrentAccessToken();
  //         if (data) {
  //           const { accessToken } = data;
  //           // You can use the accessToken to make API calls or perform other actions
  //           console.log('Facebook login successful with access token:', accessToken);
  //         }
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  return (
    <View style={{ flex: 1, }}>
      <View style={{ flex: 0.7, marginTop: 35 }}>
        <View style={{ alignItems: "center" }}>
          <Image source={Images.logo} style={{ height: 95, width: 165 }} />
          <Text style={styles.chat}  >Chat. Date. Invite</Text>
        </View>
      </View>
      <View style={{ flex: 0.8 }}>
        <Button
          onPress={() => navigation.navigate('SignUp')}
          btnText={'Create New Account'} />
        <Button
          onPress={() => navigation.navigate('Login')}
          style={styles.btn}
          btnText={'Login'}
          textStyle={styles.text}
        />
        <Text style={{ textAlign: 'center', marginTop: 35 }} >------ Or Login with ------</Text>
      </View>
      <View style={{ flex: 1.2, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity
          style={styles.img}>
          <Image source={Images.fb} style={{ height: 45, width: 35 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleGoogleSignIn}
          style={styles.img}>
          <Image source={Images.google} style={{ height: 40, width: 40 }} />
        </TouchableOpacity>
        <View style={styles.textt}>
          <Text style={{}}>By creating an account you agree to our</Text>
          <Text>Terms & Conditions and Privacy policy of Legendbae</Text>
        </View>
      </View>

    </View>
  )
}

export default Logout

const styles = StyleSheet.create({

  btn: {
    backgroundColor: '#fff',
    borderColor: Colors.Primary.pink,
    borderWidth: 1,
  },
  chat: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
    marginTop: '13%'
  },
  textt: {
    position: 'absolute',
    bottom: 0, marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  text: {
    color: Colors.Primary.pink
  },
  img: {
    height: 65, borderRadius: 35,
    width: 65, borderWidth: 0.5,
    borderColor: Colors.Primary.Grey,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 25
  },
})