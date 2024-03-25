import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import CostomButton from '../../components/CostomButton/CostomButton';
import Costominput from '../../components/Custominput/Custominput';
export default function ForgotPassword() {
  const {height} = useWindowDimensions();
  const  [Username,setUsername]=useState('');
  const onBackSignInPressed=() => {
    console.warn("Back to Sign In");
    navigation.navigate('SignIn');
  };
  const onSendPressed=() => {
    console.warn("Send");
    navigation.navigate('NewPassword');
  };
  const  navigation=useNavigation();
  return (
    <ScrollView style={styles.root}>
    <View style={styles.root} >
     <Text style={styles.title} >Reset your password</Text>
     <Text >Username*</Text>
      <Costominput 
      placeholder={"Username"}
      value={Username}
      setValue={setUsername}
     
      />
      
      <CostomButton onPress={onSendPressed} text="Send" />
     <CostomButton onPress={onBackSignInPressed} text="Back to Sign In" type="TERTIARY" />
      
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