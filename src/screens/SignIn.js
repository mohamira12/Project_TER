
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Image, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import Logo from '../../assets/images/logo.png';
import CostomButton from '../components/CostomButton/CostomButton';
import Costominput from '../components/Custominput';
import { firebaseAuth, firestoreDB } from '../config/firebase.config';
export default function SignIn() {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Username ,setUsername]=useState("");
  const {height} = useWindowDimensions();
  const { control, getValues, formState : {errors} } = useForm();
  const onSignInPressed = async() => {
    const values = getValues();
    const { Username, Password } = values;
    console.log("Sign in");
      if(Username!="" && Password!=""){
        await signInWithEmailAndPassword(firebaseAuth, Username, Password).then(UserCredential=> {
          if(UserCredential){
            console.log("User Id:",UserCredential.user.uid);
            getDoc(doc(firestoreDB, "users", UserCredential.user.uid)).then((docSnap) => {
              if (docSnap.exists()) {
                console.log("User data:", docSnap.data());

              }
            });
           // navigation.navigate('HomeScreen');
          }
        }).catch((error) => {
          console.log("Error:",error.message);
        }
        );
      }
      
  };
  const onForgotPasswordPressed=() => {
    console.warn("Forgot password");
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed=() => {
    navigation.navigate('SignUp');
  };
  const  navigation=useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleEyeIconPress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <ScrollView style={styles.root}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode='contain' />
        <Controller
  control={control}
  rules={{ 
    required: 'Username is required',
    minLength: { value: 5, message: 'Username must have at least 5 characters' }
  }}
  render={({ field: { onChange, onBlur, value } }) => (
    <Costominput
      placeholder={"Username"}
      onBlur={onBlur}
      Design={"user"}
      onChangeText={onChange}
      value={value}
    />
  )}
  name="Username"
/>
        <Controller
          control={control}
          rules={{ required: 'Password is required' ,  minLength: { value: 8, message: 'Password must have at least 8 characters' } }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Costominput
              placeholder={"Password"}
              onBlur={onBlur}
              Design={"lock"}
              onChangeText={onChange}
              value={value}
              secureTextEntry={!isPasswordVisible}
              showEyeIcon={true}
              onEyeIconPress={handleEyeIconPress}
       
       
            />
          )}
          name="Password"
        />
       
        <CostomButton text="Sign In" onPress={onSignInPressed} />
        <CostomButton onPress={onForgotPasswordPressed} text="Forgot Password?" type="TERTIARY" />
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
  
});