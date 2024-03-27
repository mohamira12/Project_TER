import { Amplify } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import config from './src/aws-exports';
import Navigation from './src/navigation';

Amplify.configure(config);
const  App=()=> {
  //Auth.signOut();
  return (
    <SafeAreaView style={styles.container}>
    
     <Navigation></Navigation>

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
const SignUpConfig={
  header:"Welcome to the SignUp",
  hideAllDefaults: true,
 
 signUpFields:[
      {
        label:'Full Name',
        key:'name',
        required:true,
        displayOrder:1,
        type:"string",
      },
      {
        label:'Email',
        key:'email',
        required:true,
        displayOrder:2,
        type:"string",

      },
      {
        label:'Username',
        key:'username',
        required:true,
        displayOrder:3,
        type:"string",
      }
      ,
      {
        label:'Password',
        key:'password',
        required:true,
        displayOrder:4,
        type:"password",
      },
     
       
    ],
  
};
export default withAuthenticator(App,{ signUpConfig: SignUpConfig});