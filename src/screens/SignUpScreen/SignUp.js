import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import CostomButton from '../../components/CostomButton/CostomButton';
import Costominput from '../../components/Custominput/Custominput';
import { firebaseAuth, firestoreDB } from '../../config/firebase.config';
import { avatars } from '../../utils/support';
export default function SignUp() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [avatar, setAvatar]=useState(avatars[0]?.image.asset.url)
  const handleEyeIconPress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const {height} = useWindowDimensions();
  const  [Username,setUsername]=useState("");
  const  [Email,setEmail]=useState("");
  const  [PasswordConf,setPasswordConf]=useState('');
  const  [Password,setPassword]=useState('');
  const screenHeight=Math.round(Dimensions.get("window").height);
  const screenWidth=Math.round(Dimensions.get("window").width);
  const onSignupPressed=async() => {
    console.warn("Sign up"); 
    console.log(Username,Email,Password,PasswordConf); 
    console.log(Email!="" && Email.includes("@") && Email.includes(".com") && Password!="" && PasswordConf!="" && Password==PasswordConf);
    if(Email!="" && Email.includes("@") && Email.includes(".com") && Password!="" && PasswordConf!="" && Password==PasswordConf){
          await createUserWithEmailAndPassword(firebaseAuth,Email,Password)
      .then(UserCredential=>{
       
       const data ={
        _id: UserCredential.user.uid,
        Username: Username,
        profilePicture: avatar,
        providerData:UserCredential.user.providerData[0],
        
       }
       setDoc(doc(firestoreDB, "users", UserCredential.user.uid), data).then(() => {
        navigation.navigate('SignIn');
      
       })
      })
      .catch(error => {
        console.error(error);
      });
    }
   
  };
  const onForgotPasswordPressed=() => {
    console.warn("Forgot password");
    navigation.navigate('ForgotPassword');
  };
  const onSignInFacebookPressed=() => {
    console.warn("Sign in with facebook");
  };
  const onSignInGooglePressed=() => {
    console.warn("Sign in with google");
  };
  const onSigninPressed=() => {
    console.warn("Sign up");
    navigation.navigate('SignIn');
  };
  const [isAvatarMenu,setAvatarMenu]=useState(false); 
  const  navigation=useNavigation();
  const handleAvatarPress = (avatar) => {
 
    setAvatar(avatar?.image.asset.url);
     setAvatarMenu(false);
    // Vous pouvez ajouter plus de logique ici pour gérer le tap sur chaque avatar
  };
  return(
    <ScrollView style={styles.root}>
    <View style={styles.root} >
   {isAvatarMenu && (
    <>
      <View style={{width: screenWidth, height: screenHeight}}>
          
          <FlatList 
            data={avatars}
            keyExtractor={(item, index) => 'avatar-' + index}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleAvatarPress(item)}>
                <Image source={{uri: item?.image.asset.url}} style={{width: 100, height: 100}} />
              </TouchableOpacity>
            )}
          />
  
      </View> 
      </>)}
    <Text style={styles.title} >Create an account</Text>
    <View style={styles.avatarParentContainer}>
      <TouchableOpacity  onPress={() => setAvatarMenu(true)} style={styles.avatarContainer}>
        <Image source={{uri:avatar}} style={styles.avatarImage} resizeMode='contain' />
        <View style={styles.editIcon}>
          <AntDesign name="edit" size={18} color="green" />
        </View>
      </TouchableOpacity>
    </View>
    
      <Costominput 
      placeholder={"Username"}
      Design={"user"}
      value={Username}
      onChangeText={setUsername}
     
      />
      <Costominput 
      placeholder={"Email"}
      Design={"mail"}
      value={Email}
      onChangeText={setEmail}
      isEmail={true}
     
      />
     <Costominput
      placeholder={"Password"} 
      value={Password}
      Design={"lock"}
      onChangeText={setPassword}
      secureTextEntry={!isPasswordVisible}
      showEyeIcon={true}
      onEyeIconPress={handleEyeIconPress}
       
      />
      <Costominput
      placeholder={"Repeat Password "} 
      value={PasswordConf}
      Design={"lock"}
      onChangeText={setPasswordConf}
      secureTextEntry={!isPasswordVisible}
      showEyeIcon={true}
      onEyeIconPress={handleEyeIconPress}
       
      />
      <CostomButton onPress={onSignupPressed} text="Register" />
      <Text >
          By Registering ,you confirm that you accept our {' '}
          <Text style={styles.link}>Terms of Use</Text> and 
          <Text style={styles.link}> Privacy Policy</Text>
      </Text>
      <CostomButton onPress={onSigninPressed} text="Don't have an account? Create One" type="TERTIARY" />
      
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

  },
  avatarParentContainer: {
    alignItems: 'center', // centrer horizontalement
    justifyContent: 'center', // centrer verticalement
  },
  avatarContainer: {
    width: 80, // ou la taille que vous voulez
    height: 80, // ou la taille que vous voulez
    padding: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'green', // ou la couleur que vous voulez
    alignItems: 'center', // centrer horizontalement
 
    justifyContent: 'center', // centrer verticalement
  },
   avatarImage: {
    width: '100%',
    height: '100%',
   
  },
   editIcon: {
    position: 'absolute', // positionner absolument
    top: 0, // en haut de l'image
    right: 0, // à droite de l'image
  },
});