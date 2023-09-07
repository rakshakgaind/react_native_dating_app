import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import Verification from '../Screens/Verification';
import AppIntro from '../Screens/AppIntro';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaritalStatus from '../Screens/MaritalStatus';
import LookingFor from '../Screens/LookingFor';
import Religion from '../Screens/Religion';
import Drinking from '../Screens/Drinking';
import Auth from '../Screens/Auth';
import CreateProfile from '../Screens/CreateProfile';
import ImageSlider from '../Screens/ImageSlider';
import CustomHeader from '../Components/CustomHeader';
import CustomDrawerContent from '../Components/CustomDrawerContent';
import Settings from '../Screens/Settings';
import Notification from '../Screens/Notification';
import Messages from '../Screens/Messages';
import Logout from '../Screens/Logout';
import ViewProfile from '../Screens/ViewProfile';
import PremiumScreen from '../Screens/PremiumScreen';
import Payment from '../Screens/Payment';
import Personality from '../Screens/Personality';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ route, navigation }) => ({
        headerShown: !['Settings', 'Seekers', 'Messages', 'Logout'].includes(route.name),

        header: ({ navigation }) => <CustomHeader navigation={navigation} />
      })}
    >
      <Drawer.Screen name="Discover" component={ImageSlider} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Seekers" component={Notification} />
      <Drawer.Screen name="Messages" component={Messages} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}


const StackNavigation = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  } else {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#fff' },
        }}
        initialRouteName="Auth" >
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="AppIntro" component={AppIntro} />
        <Stack.Screen name="Marital" component={MaritalStatus} />
        <Stack.Screen name="Looking" component={LookingFor} />
        <Stack.Screen name="Religion" component={Religion} />
        <Stack.Screen name="Drinking" component={Drinking} />
        <Stack.Screen name="Profile" component={CreateProfile} />
        <Stack.Screen name="ViewProfile" component={ViewProfile} />
        <Stack.Screen name="PremiumScreen" component={PremiumScreen} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Personality" component={Personality} />
      </Stack.Navigator>
    );
  }
};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;


