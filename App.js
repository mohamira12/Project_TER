import React from 'react';
import { SafeAreaView, StyleSheet, ToastAndroid } from 'react-native';
import SignIn from './src/screens/SignIn';
export default function App() {
  const showToast = () =>{
    console.log("Toast cleacked")
    ToastAndroid.show(
      "you cleaked this Toast",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    )
    }
  return (
    <SafeAreaView style={styles.container}>
    
      
      <SignIn />
    

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent:'center',
    justifyContent:'center',
    flex: 1,
    backgroundColor: '#F9FBFC'
    }
  });
