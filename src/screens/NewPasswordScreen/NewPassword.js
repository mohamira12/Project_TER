
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import CostomButton from '../../components/CostomButton/CostomButton';
import Costominput from '../../components/Custominput/Custominput';
export default function NewPassword() {
  const {height} = useWindowDimensions();
  const [code,setcode]=useState('');
  const [newpassword,setnewpassword]=useState('');
  const onBackSignInPressed=() => {
    console.warn("Back to Sign In");
  };
  const onSubmitPressed=() => {
    console.warn("Submit");
  };
  return (
    <ScrollView style={styles.root}>
    <View style={styles.root} >
     <Text style={styles.title} >Reset your password</Text>
     <Text >Username*</Text>
      <Costominput 
      placeholder={"code"}
      value={code}
      setValue={setcode}
     
      />
      <Costominput 
      placeholder={"Entre your new password"}
      value={newpassword}
      setValue={setnewpassword}
     
      />
      
      <CostomButton onPress={onSubmitPressed} text="Submit" />
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