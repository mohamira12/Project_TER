import { AntDesign, Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
export default function Costominput({value, onChangeText, placeholder, secureTextEntry, Design, showEyeIcon, onEyeIconPress, isEmail}) {
  const [isValid, setIsValid] = useState(true);

  const validateInput = (text) => {
    if (isEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValid(emailRegex.test(text));
    }
    onChangeText(text);
  }

  return (
    <View style={{...styles.container, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderColor: isValid ? '#e8e8e8' : 'red'}}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <AntDesign name={Design} size={20} color="black" />
        <TextInput 
          style={styles.input} 
          value={value}
          placeholder={placeholder}
          onChangeText={validateInput}
          secureTextEntry={secureTextEntry}
          autoCapitalize='none'
        />
      </View>
      {showEyeIcon && 
        <TouchableOpacity onPress={onEyeIconPress}>
          <Entypo name="eye" size={20} color="black" />
        </TouchableOpacity>
      }
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:'white',
    width:'100%',
    height:50,
    justifyContent:'flex-start',
    borderColor:'#e8e8e8',
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal:10,
    marginVertical:5,
  },
  input:{},

});
