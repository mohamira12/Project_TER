import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { firebaseAuth } from "../../config/firebase.config";
import { SET_USER_NULL } from "../../context/actions/userAction";
  
const ProfileScreen = () => {
    const navigation = useNavigation();
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const handleLogout = async () => {
        await firebaseAuth.signOut().then(() => {
          dispatch(SET_USER_NULL());
          navigation.replace("SignIn");
        });
      };
      return (
        <SafeAreaView style={{ flex: 1 }}>
          {/* icons */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons name="chevron-left" size={32} color={"#555"} />
            </TouchableOpacity>
    
            <TouchableOpacity>
              <Entypo name="dots-three-vertical" size={24} color="#555" />
            </TouchableOpacity>
          </View>
          {/* profile */}
          <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={{ borderWidth: 2, borderColor: "primary", padding: 10, borderRadius: 50 }}>
          <Image
            source={{ uri: user?.profilePicture }}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
        </View>
        <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: 10 }}>
          {user?.Username}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "bold", color: "primaryText" }}>
          {user?.providerData.email}
        </Text>
      </View>
        {/* icons sections */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', paddingVertical: 20 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: 25, backgroundColor: '#d3d3d3' }}>
                <MaterialIcons name="messenger-outline" size={24} color={"#555"} />
            </TouchableOpacity>
            <Text style={{ fontSize: 14, color: 'primaryText', paddingTop: 10 }}>Message</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: 25, backgroundColor: '#d3d3d3' }}>
                <Ionicons name="videocam-outline" size={24} color="#555" />
            </TouchableOpacity>
            <Text style={{ fontSize: 14, color: 'primaryText', paddingTop: 10 }}>Video Call</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: 25, backgroundColor: '#d3d3d3' }}>
                <Ionicons name="call-outline" size={24} color={"#555"} />
            </TouchableOpacity>
            <Text style={{ fontSize: 14, color: 'primaryText', paddingTop: 10 }}>Call</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: 25, backgroundColor: '#d3d3d3' }}>
                <Entypo name="dots-three-horizontal" size={24} color="#555" />
            </TouchableOpacity>
            <Text style={{ fontSize: 14, color: 'primaryText', paddingTop: 10 }}>More</Text>
            </View>
        </View>
         {/* medias shared */}
          {/* ... */}

         {/* settings options */}
         {/* ... */}
        {/* logout */}
      <TouchableOpacity
        onPress={handleLogout}
        style={{ flexDirection: "row", borderRadius: 25, backgroundColor: '#d3d3d3',justifyContent: "center", padding: 10 }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", paddingHorizontal: 10 ,color:'green'}}>
          Logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;
