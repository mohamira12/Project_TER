import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ForgotPassword from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import NewPassword from '../screens/NewPasswordScreen';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUpScreen';

const stack=createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      
      <stack.Navigator screenOptions={{headerShown:false}}>
      <stack.Screen name="SignIn" component={SignIn}></stack.Screen>
      <stack.Screen name="SignUp" component={SignUp}></stack.Screen>
      <stack.Screen name="ForgotPassword" component={ForgotPassword}></stack.Screen>
      <stack.Screen name="NewPassword" component={NewPassword}></stack.Screen>
      <stack.Screen name="HomeScreen" component={HomeScreen}></stack.Screen>
       </stack.Navigator>
     
    </NavigationContainer>
  );
}
