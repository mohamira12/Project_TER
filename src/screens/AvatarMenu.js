// AvatarMenu.js

import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';

const AvatarMenu = ({ isAvatarMenu, avatars, handleAvatarPress, screenWidth, screenHeight }) => {
  if (!isAvatarMenu) {
    return null;
  }

  return (
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
  );
};

export default AvatarMenu;