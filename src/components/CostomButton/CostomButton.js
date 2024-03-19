import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function CostomButton({onPress,text,type="PRIMARY",bgColor,fgColor}) {
  return (
   
    <Pressable 
     onPress={onPress}
     style={[styles.container,
     styles[`container_${type}`],
     bgColor ? {backgroundColor : bgColor}:{}
     ]}>
      <Text
       style={[
        styles.text,
        styles[`text_${type}`],
        fgColor? {color : fgColor}:{}
        ]}>{text}</Text>
    </Pressable>
     
  );
}
const styles=StyleSheet.create({
  container:{
   width:'100%',
   height:50,
   padding:15,
   marginVertical:5,
   borderRadius:5,
   alignItems:'center'
  },
  container_PRIMARY:{
    backgroundColor:'#387144',
  },
  container_TERTIARY:{},
  text:{
    color:'white',
    fontWeight:'bold',
  },
  text_TERTIARY:{
    color:'gray'
    }
  
});
