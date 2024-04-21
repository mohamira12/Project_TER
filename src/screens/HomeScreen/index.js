import { default as React } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/images/logo.png';


export default function Index() {
  const navigation = useNavigation();
  const user = useSelector(state => state.user.user);
  console.log("logged user", user?._id);
  const [isLoading,setLoading]=useState(false);
  return (
    <View style={{flex:1}}>
      <SafeAreaView>
        <View style={styles.container}>
          <Image source={Logo} style={styles.logo} resizeMode='contain' />
          <TouchableOpacity>
            <Image source={{ uri : user?.profilePicture}} style={styles.logo} resizeMode='contain' />
          </TouchableOpacity>
        </View>
        {/*scrolling area */}
        <ScrollView  style={styles.scrollView}>
            {/* msg title*/}
            <View style={styles.msgTitleContainer}>
              <Text style={{fontSize: 20, fontWeight: 'bold',marginTop:110}}>Messages</Text>
              <TouchableOpacity  onPress={() => navigation.navigate("AddToChatScreen")}>
                <Ionicons name='chatbox' size={28} color="#555" style={{marginTop: 110}}></Ionicons>
              </TouchableOpacity>
            </View>
            {isLoading ? (
              <>
              <View >
              <ActivityIndicator  size={"large" } color={"#43C651"}></ActivityIndicator>
      
              </View>
              </>
            ) : (
              <>
              <MessageCard></MessageCard>
              <MessageCard></MessageCard>
              <MessageCard></MessageCard>
              <MessageCard></MessageCard>
              <MessageCard></MessageCard>
              <MessageCard></MessageCard>
              <MessageCard></MessageCard>
              <MessageCard></MessageCard>
              <MessageCard></MessageCard>
              <MessageCard></MessageCard>
              <MessageCard></MessageCard>
              <MessageCard></MessageCard><MessageCard></MessageCard>
              <MessageCard></MessageCard>
              <MessageCard></MessageCard>
              <MessageCard></MessageCard>
              <MessageCard></MessageCard>
              <MessageCard></MessageCard>
              </>
            ) }
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
const MessageCard=()=>{
  return (
    <TouchableOpacity style={styles.MessLis}>
       {/*imgs */}
       <View  style={styles.iconContainer}>
        <FontAwesome5 name="users" size={24} color="#555" ></FontAwesome5>
       </View>
       {/*content */}
       
          <View style={styles.msgContentContainer}>
          <Text style={styles.msgTitle}>Message title</Text>
          <Text style={styles.msgContent }>Hello, I'm Lenovo</Text>
        </View>
          
       {/*time */}
         <Text style={{color: '#555', fontSize: 12, marginRight: 25}}>12:00</Text>
       {/*unread */}
        <View style={styles.unreadContainer}>
          <Text style={styles.unreadText}>Unread</Text>
           </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
     
  },
  logo: {
    width: 60, 
    height: 60,
   
  },
  scrollView: {
    width: '100%', // w-full
   
    
    // pt-4
  },
  msgTitleContainer: {
    
    width: '100%', // w-full
    flexDirection: 'row', // flex-row
    alignItems: 'center', // items-center
    justifyContent: 'space-between', // justify-between
    paddingHorizontal: 8, // px-2
  },
  MessLis: {
    width: '100%', // w-full
    flexDirection: 'row', // flex-row
    alignItems: 'center', // items-center
    justifyContent: 'flex-start', // justify-start
    paddingVertical: 8, // py-2 (en supposant que 1 unité est égale à 4 pixels)
  },
  iconContainer: {
    width: 64, // w-16 (en supposant que 1 unité est égale à 4 pixels)
    height: 64, // h-16
    borderRadius: 32, // rounded-full (la moitié de la largeur et de la hauteur pour obtenir un cercle complet)
    flexDirection: 'row', // flex
    alignItems: 'center', // items-center
    justifyContent: 'center', // justify-center
    borderWidth: 2, // border-2
    borderColor: 'green', // border-green (remplacez 'green' par la couleur que vous voulez)
    padding: 4, // p-1
  },
  msgContentContainer: {
    flex: 1, // flex-1
    flexDirection: 'colum', // flex
    alignItems: 'flex-start', // items-start
    justifyContent: 'space-between', // justify-center
    marginLeft: 16, // ml-4 (en supposant que 1 unité est égale à 4 pixels)
  },
  msgTitle: {
    fontSize: 16, // text-base (en supposant que 'base' est égale à 16 pixels)
    fontWeight: 'bold', // font-semibold
    textTransform: 'capitalize',
    color: '#333',
  },
  msgContent: {
    color: '#333', // text-primaryText (remplacez 'primaryText' par la couleur que vous voulez)
    fontSize: 14, // text-sm (en supposant que 'sm' est égale à 14 pixels)
  },
});
