import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function Costominput({value,setValue,placeholder,secureTextEntry}) {
  return (
    <View style={styles.container}>
     <TextInput 
      style={styles.input} 
      value={value}
      placeholder={placeholder}
      onChangeText={setValue}
      secureTextEntry={secureTextEntry}
     />
     </View>
  );

}
const styles=StyleSheet.create({
  container:{
    backgroundColor:'white',
    width:'100%',
    height:50,
    justifyContent:'center',
    borderColor:'#e8e8e8',
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal:10,
    marginVertical:5,
  },
  input:{},

});
