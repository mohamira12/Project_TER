import { Amplify } from 'aws-amplify';
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

export default App;