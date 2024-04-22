import {
    Entypo,
    FontAwesome,
    FontAwesome5,
    MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
    addDoc,
    collection,
    doc,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
} from "firebase/firestore";
import React, { useLayoutEffect, useRef, useState } from "react";
import {
    ActivityIndicator,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { useSelector } from "react-redux";
import { firestoreDB } from "../../config/firebase.config";
  
  const ChatScreen = ({ route }) => {
    const { room } = route.params;
    console.log("room:",room);
    const navigation = useNavigation();
    const [isLoading, setisLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState(null);
  
    const user = useSelector((state) => state.user.user);
  
    const sendAMessage = async () => {
      const timeStamp = serverTimestamp();
      let id = `${Date.now()}`;
      const _doc = {
        _id: id,
        roomId: room._id,
        timeStamp: timeStamp,
        message: message,
        user: user,
      };
  
      setMessage("");
      await addDoc(
        collection(doc(firestoreDB, "chats", room._id), "messages"),
        _doc
      )
        .then(() => {})
        .catch((err) => alert(err));
    };
  
    useLayoutEffect(() => {
      const msgQuery = query(

        collection(firestoreDB, "chats", room?._id, "messages"),
        orderBy("timeStamp", "asc")
      );
      console.log("room?._id", room?._id);
      console.log("room?.user", room?.user);

      const unsubscribe = onSnapshot(msgQuery, (querySnapShot) => {
        const updatedMessages = querySnapShot.docs.map((doc) => doc.data());
        setMessages(updatedMessages);
        setisLoading(false);
      });
  
      return unsubscribe;
    }, []);
    const textInputRef=useRef(null);
    const handleKeybordOpen= ()=>{
        textInputRef.current.focus();
    };
    return (
      <View style={{ flex: 1, backgroundColor: "#43C651", }}>
        {/* top */}
        <View style={{ width: '100%', height: '12%', paddingVertical: 4, paddingHorizontal: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',width: '100%',paddingHorizontal: 9,paddingVertical:20,}}>
            {/* go back */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons name="chevron-left" size={32} color={"#fbfbfb"} />
            </TouchableOpacity>
  
            {/*  profile */}
            <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center',marginHorizontal: 3,}}>
              <View style={{ width: 48,  height: 48, borderRadius: 24,borderWidth: 1,borderColor: 'white',alignItems: 'center',justifyContent: 'center',}} >
                  <FontAwesome5 name="users" size={24} color="#fbfbfb" />
              </View>
  
            <View style={{ justifyContent: 'space-between',}} >
                    <Text style={styles.chatName}>
                        {room.chatName.length > 16
                        ? `${room.chatName.slice(0, 16)}..`
                        : room.chatName}
                    </Text>
                    <Text style={styles.status}>
                        online
                    </Text>
            </View> 
            </View>
  
            {/* icons */}
            <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center', marginHorizontal: 6}}>
              <TouchableOpacity style={{ marginHorizontal: 10}}>
                <FontAwesome5 name="video" size={24} color="#fbfbfb" />
              </TouchableOpacity>
  
              <TouchableOpacity style={{ marginHorizontal: 10}}>
                <FontAwesome name="phone" size={24} color="#fbfbfb" />
              </TouchableOpacity>
  
              <TouchableOpacity style={{ marginHorizontal: 10}}>
                <Entypo name="dots-three-vertical" size={24} color="#fbfbfb" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
  
        {/* bottom section */}
        <View style={styles.bottomSection}>
           <KeyboardAvoidingView  style={{flex: 1}}  behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={180} >
            <>
              <ScrollView>
                {isLoading ? (
                  <>
                    <View style={styles.loadingContainer}>
                      <ActivityIndicator size={"large"} color={"#43C651"} />
                    </View>
                  </>
                ) : (
                  <>
                    {messages?.map((msg) =>
                      msg?.user.providerData?.email ===
                      user.providerData.email ? (
                        <>
                          <View style={{ margin: 4,}} key={msg._id}>
                           <View style={{  paddingHorizontal: 4,paddingVertical: 2,borderTopLeftRadius: 20,borderTopRightRadius: 20,borderBottomLeftRadius: 20, backgroundColor: 'green', width: 'auto',position: 'relative', alignSelf: "flex-end" }} >
                              <Text style={styles.messageText}>{msg.message}</Text>
                            </View>
  
                            <View style={{ alignSelf: "flex-end" }}>
                                {msg?.timeStamp?.seconds && (
                                    <Text style={styles.timeStamp}>
                                    {new Date(
                                        parseInt(msg?.timeStamp?.seconds) * 1000
                                    ).toLocaleTimeString("en-US", {
                                        hour: "numeric",
                                        minute: "numeric",
                                        hour12: true,
                                    })}
                                    </Text>
                                )}
                                </View>
                          </View>
                        </>
                      ) : (
                        <>
                        <View
                            key={msg._id} style={{ alignSelf: "flex-start" }}
                            >
                            <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center', marginHorizontal: 2,}}>
                              {/* image */}
                              
                              <Image
                                style={styles.profilePic}
                                resizeMode="cover"
                                source={{ uri: msg?.user?.profilePicture }}
                              />
                              <View style={{ margin: 4,}} >
                           <View style={{  paddingHorizontal: 4,paddingVertical: 2,borderTopLeftRadius: 20,borderTopRightRadius: 20,borderBottomLeftRadius: 20, backgroundColor: 'green', width: 'auto',position: 'relative', alignSelf: "flex-start" }} >
                              <Text style={styles.messageText}>{msg.message}</Text>
                            </View>
  
                            <View style={{ alignSelf: "flex-end" }}>
                                {msg?.timeStamp?.seconds && (
                                    <Text style={styles.timeStamp}>
                                    {new Date(
                                        parseInt(msg?.timeStamp?.seconds) * 1000
                                    ).toLocaleTimeString("en-US", {
                                        hour: "numeric",
                                        minute: "numeric",
                                        hour12: true,
                                    })}
                                    </Text>
                                )}
                                </View>
                          </View>
                            </View>
                          </View>
                        </>
                      )
                    )}
                  </>
                )}
              </ScrollView>
  
              <View style={{ width: '100%',flexDirection: 'row', alignItems: 'center',justifyContent: 'center',paddingHorizontal: 32,}}>
                <View style={{ backgroundColor: 'gray',borderRadius: 20,paddingHorizontal: 16,flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between',paddingVertical: 8,}}>
                  <TouchableOpacity onPress={handleKeybordOpen} >
                    <Entypo name="emoji-happy" size={24} color="#555" />
                  </TouchableOpacity>
  
                  <TextInput style={{flex: 1,height: 32,fontSize: 16,color: 'black',fontWeight: 'bold', }}
                    placeholder="Type here.."
                    
  ref={textInputRef}
                    placeholderTextColor={"#999"}
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                  />
                  <TouchableOpacity>
                    <Entypo name="mic" size={24} color="#43C651" />
                  </TouchableOpacity>
                </View>
  
                {/* send icon */}
  
                <TouchableOpacity style={{paddingLeft: 16,}} onPress={sendAMessage}>
                  <FontAwesome name="send" size={24} color="#555" />
                </TouchableOpacity>
              </View>
            </>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: 'primary',
      padding: 4,
      paddingBottom: 6,
      flex: 0.25,
    },
    messageText: {
        fontSize: 16, // base size
        fontWeight: 'bold', // semibold
        color: 'black',
      },
    profilePic: {
        width: 48, // 12 * 4, car React Native utilise des unités logiques et non des pixels
        height: 48, // 12 * 4
        borderRadius: 24, // 12 * 4 / 2 pour obtenir un cercle complet
      },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 3,
      },
      iconContainer: {
        width: 48, // 12 * 4, car React Native utilise des unités logiques et non des pixels
        height: 48, // 12 * 4
        borderRadius: 24, // la moitié de la largeur et de la hauteur pour obtenir un cercle complet
        borderWidth: 1,
        borderColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      messageStart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 2,
        margin: 4, // 1 * 4, car React Native utilise des unités logiques et non des pixels
      },
      chatName: {
        color: 'white',
        fontSize: 16,
        marginHorizontal: 40,
        fontWeight: 'bold',
        textTransform: 'capitalize',
      },
      status: {
        color: 'white',
        marginHorizontal: 40,
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'capitalize',
      },
      bottomSection: {
        width: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 4,
        paddingVertical: 6,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        flex: 1,
        marginTop: -10,
      },
      loadingContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      messageText: {
        fontSize: 16, // base size
        fontWeight: 'bold', // semibold
        color: 'white',
      },
      timeStamp: {
        fontSize: 12, // 12px
        color: 'black',
        fontWeight: 'bold',
      },
    // ... autres styles ...
  });
  export default ChatScreen;
  