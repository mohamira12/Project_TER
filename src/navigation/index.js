import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import Store from '../context/store';
import AddToChatScreen from '../screens/AddToChatScreen';
import ChatScreen from '../screens/ChatScreen';
import ForgotPassword from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import NewPassword from '../screens/NewPasswordScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUpScreen';
import SplashScreen from '../screens/SplashScreen';
const stack=createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Provider  store={Store}>
      <stack.Navigator screenOptions={{headerShown:false}}>
      <stack.Screen name="SignIn" component={SignIn}></stack.Screen>
      <stack.Screen name="SignUp" component={SignUp}></stack.Screen>
      <stack.Screen name="ForgotPassword" component={ForgotPassword}></stack.Screen>
      <stack.Screen name="NewPassword" component={NewPassword}></stack.Screen>
      <stack.Screen name="HomeScreen" component={HomeScreen}></stack.Screen>
      <stack.Screen name="SplashScreen" component={SplashScreen}></stack.Screen>
      <stack.Screen name="AddToChatScreen" component={AddToChatScreen}></stack.Screen>
      <stack.Screen name="ChatScreen" component={ChatScreen}></stack.Screen>
      <stack.Screen name="ProfileScreen" component={ProfileScreen}></stack.Screen>
       </stack.Navigator>
       </Provider>
    </NavigationContainer>
  );
}
