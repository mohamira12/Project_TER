import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, View, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/logo.png';
import { SET_USER } from '../../context/actions/userAction';


import { doc, getDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { firebaseAuth, firestoreDB } from '../../config/firebase.config';
export default function SplashScreen() {
    
  const dispatch=useDispatch();
  const  navigation=useNavigation();
  const {height} = useWindowDimensions();
  useLayoutEffect(() => {
    checkLoggedUser();
  }, []);
  const checkLoggedUser =async()=>{
    firebaseAuth.onAuthStateChanged((UserCredential)=>{
        console.log("UserCredential:",UserCredential?.uid);
        if(UserCredential?.uid){
            getDoc(doc(firestoreDB, "users", UserCredential?.uid)).then((docSnap) => {
                console.log("Document exist:", docSnap.exists());
                if (docSnap.exists()) {
                  console.log("User data:", docSnap.data());
                  dispatch(SET_USER( docSnap.data()));
                  setTimeout(()=>{
                    navigation.replace('HomeScreen');
                },2000);
                }
              });
          
        }else{
            navigation.replace('SignIn');
          }

    });

  };
  return (
    <View style={styles.root}>
     <Image source={Logo} style={[styles.logo, { height: height * 0.5 }]} resizeMode='contain' />
     <ActivityIndicator  size={"large" } color={"#43C651"}></ActivityIndicator>
        
     </View>
  );
}

const styles=StyleSheet.create({
    root:{
      alignContent:"center",
      padding:100,
      
    },
    logo:{
      width:'70%',
      maxWidth:300,
      maxHeight:200,
    
      alignSelf:"center",
      alignContent:"center",
     
     
    }
    
  });