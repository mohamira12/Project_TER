
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import CostomButton from '../../components/CostomButton/CostomButton';
import Costominput from '../../components/Custominput/Custominput';
export default function ConfirmEmail() {
  const {height} = useWindowDimensions();
  const  [Username,setUsername]=useState('');
  const  [Email,setEmail]=useState('');
  const  [code,setcode]=useState('');

  const onResendcodePressed=() => {
    console.warn("Resend code");
  };
  const onBackSignUpPressed=() => {
    console.warn("Back to Sign in");
  };
  const onConfirmPressed=() => {
    console.warn("Confirm");
  };

  return (
    <ScrollView style={styles.root}>
    <View style={styles.root} >
     <Text style={styles.title} >Confirm your Email</Text>
      
      <Costominput 
      placeholder={"Entre your confirmation code "}
      value={code}
      setValue={setcode}
     
      />
      <CostomButton onPress={onConfirmPressed} text="Confirm" />
      <CostomButton onPress={onResendcodePressed} text="Resend code"  bgColor="#E7EAF4" fgColor="#4765A9"/>
      <CostomButton onPress={onBackSignUpPressed} text="Back to Sign in" type="TERTIARY" />
      
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