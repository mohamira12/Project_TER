import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';


import { useSelector } from 'react-redux';
import { firestoreDB } from '../../config/firebase.config';


export default function AddToChatScreen() {
    const navigation=useNavigation();
    const user = useSelector(state => state.user.user);
    console.log("logged user", user?._id);
    const [addChatText,setAddChatText]=useState("");
    const createNewChat =async()=>{
     let id= `${Date.now()}`;
     const _doc={
        _id: id,
        Username: user,
        chatName:addChatText,
        Messages: [],
      };
      if(addChatText!=""){
        setDoc(doc(firestoreDB,"chats",id),_doc).then(()=> {
            setAddChatText("")
            navigation.replace("HomeScreen")
        }).catch((err)=>{
            alert("Error creating chat",err);
        })
      }
     
    };
return (
    <View style={{ flex: 1, backgroundColor: "#43C651", }}>
        <View style={{ width: '100%', height: '20%', paddingVertical: 4, paddingHorizontal: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    {/* go back */}
                    <TouchableOpacity  onPress={() => navigation.goBack()} >
                        <MaterialIcons name='chevron-left' size={24} color='white' />
                    </TouchableOpacity>
                    {/*middle */}
                    {/*last section */}
                    <View style={{marginLeft:302}}>
                      <TouchableOpacity  onPress={() => { console.log('Profile picture clicked'); navigation.navigate("ProfileScreen")}}>
                        <Image source={{ uri : user?.profilePicture}} style={styles.logo} resizeMode='contain' />
                      </TouchableOpacity>
                    </View>
            </View>

        </View>
        <View  style={styles.container}>
             <View style={{ width: '100%', paddingHorizontal: 16, paddingVertical: 16}}>
                <View style={styles.chatli} >
                  {/*icons */}
                  <Ionicons name='chatbubble' size={24} color="#777" ></Ionicons>

                  {/*textInput */}
                  <TextInput
                   name='chatbubble' 
                  size={24} 
                  color="#777" 
                  placeholder='Create a chat'
                  style={{ flex: 1, marginLeft: 8 }} 
                  value={addChatText}
                  onChangeText={(text) => setAddChatText(text)}

                  ></TextInput>
                  {/*icon*/}
                  <TouchableOpacity  onPress={createNewChat}>
                    <FontAwesome name='send' size={24} color="#777" ></FontAwesome>
                  </TouchableOpacity>

                </View>
         
             </View>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 24,
        borderRadius: 50,
        marginTop: -30,
      },
    logo: {
      width: 60, 
      height: 60,
     
     
    },
    chatli: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        marginHorizontal: 12,
      },
    scrollView: {
      width: '100%', // w-full
      paddingHorizontal: 16, // px-4
      paddingTop: 16, // pt-4
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
  