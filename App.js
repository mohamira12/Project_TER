import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './src/navigation';
export default function App() {

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
