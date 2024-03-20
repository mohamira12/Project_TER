
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import CostomButton from '../../components/CostomButton/CostomButton';
import Costominput from '../../components/Custominput/Custominput';
export default function SignUp() {
  const {height} = useWindowDimensions();
  const  [Username,setUsername]=useState('');
  const  [Email,setEmail]=useState('');
  const  [PasswordConf,setPasswordConf]=useState('');
  const  [Password,setPassword]=useState('');
  const onSignupPressed=() => {
    console.warn("Sign up");
  };
  const onForgotPasswordPressed=() => {
    console.warn("Forgot password");
  };
  const onSignInFacebookPressed=() => {
    console.warn("Sign in with facebook");
  };
  const onSignInGooglePressed=() => {
    console.warn("Sign in with google");
  };
  const onSignUpPressed=() => {
    console.warn("Sign up");
  };
  return (
    <ScrollView style={styles.root}>
    <View style={styles.root} >
     <Text style={styles.title} >Create an account</Text>
      <Costominput 
      placeholder={"Username"}
      value={Username}
      setValue={setUsername}
     
      />
      <Costominput 
      placeholder={"Email"}
      value={Email}
      setValue={setEmail}
     
      />
     <Costominput
      placeholder={"Password"} 
      value={Password}
      setValue={setPassword}
      secureTextEntry
      />
      <Costominput
      placeholder={"Repeat Password "} 
      value={PasswordConf}
      setValue={setPasswordConf}
      secureTextEntry
      />
      <CostomButton onPress={onSignUpPressed} text="Register" />
      <Text >
          By Registering ,you confirm that you accept our {' '}
          <Text style={styles.link}>Terms of Use</Text> and 
          <Text style={styles.link}> Privacy Policy</Text>
      </Text>
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
  ,
  title:{
    fontSize:24,
    fontWeight:"bold",
    color:"#488566",
    margin:10,
  },
  text:{
    color:'gray',
    marginVertical:10,
  },
  link:{
    color:"#FDB075"

  }
});