import { Auth } from 'aws-amplify';
import React from 'react';
import { Text, View } from 'react-native';
export default function index() {
  const signOut=()=>{
    console.log('signOut');
    Auth.signOut();
  }
  return (
    <View style={{flex:1}}>
      <Text style={{fontSize: 24,alignSelf: 'center',marginTop:50}}> 
       
          Welcome to Home!
      </Text>
      <Text  onPress={signOut} style={{width:'100%' ,textAlign:'center', color:'red',marginTop:'auto',marginVertical:20,fontSize:20,}}>SignOut</Text>
     </View>
  );
}
