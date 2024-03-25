
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import Logo from '../../assets/images/logo.png';
import CostomButton from '../components/CostomButton/CostomButton';
import Costominput from '../components/Custominput';
export default function SignIn() {
  const {height} = useWindowDimensions();
  const  [Username,setUsername]=useState('');
  const  [Password,setPassword]=useState('');
  const onSignInPressed=() => {
    console.warn("Sign in");
    navigation.navigate('HomeScreen');
  };
  const onForgotPasswordPressed=() => {
    console.warn("Forgot password");
    navigation.navigate('ForgotPassword');
  };
  const onSignInFacebookPressed=() => {
    console.warn("Sign in with facebook");
  };
  const onSignInGooglePressed=() => {
    console.warn("Sign in with google");
  };
  const onSignUpPressed=() => {
    console.warn("Sign up");
    navigation.navigate('SignUp');
  };
  const  navigation=useNavigation();
  return (
    <ScrollView style={styles.root}>
    <View style={styles.root} >
     <Image source={Logo} style={[styles.logo, {height:height* 0.3}]} resizeMode='contain'   />
     <Costominput 
      placeholder={"Username"}
      value={Username}
      setValue={setUsername}
     
      />
     <Costominput
      placeholder={"Password"} 
      value={Password}
      setValue={setPassword}
      secureTextEntry
      />
      <CostomButton onPress={onSignInPressed} text="Sign In" />
      <CostomButton onPress={onForgotPasswordPressed} text="Forgot Password" type="TERTIARY" />
      <CostomButton onPress={onSignInFacebookPressed} text="Sign In with Facebook"  bgColor="#E7EAF4" fgColor="#4765A9"/>
      <CostomButton onPress={onSignInGooglePressed} text="Sign In with Google" bgColor="#E7EAF4" fgColor="#DD4D44"/>
      <CostomButton onPress={onSignUpPressed} text="Don't have an account? Create One" type="TERTIARY" />
      
     </View>
     </ScrollView>
  );
}
const styles=StyleSheet.create({
  root:{
    alignContent:"center",
    padding:20,
    
  },
  logo:{
    width:'70%',
    maxWidth:300,
    maxHeight:200,
    alignSelf:"center"
   
   
  }
  
});