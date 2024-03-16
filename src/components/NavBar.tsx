import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

export default function NavBar() {
  return (
    <View className="flex flex-row justify-between mt-3 items-center">
      <View className="flex flex-row gap-2 items-center justify-center w-auto bg-blue-950 px-3 py-2 rounded-full">
        <IconMaterial
          name="person"
          size={20}
          color="#000"
          className="bg-white rounded-full p-1"
        />
        <Text className="color-white text-center">Hi, Fran</Text>
      </View>
      <Icon name="bell" size={25} color="rgb(23 37 84)" />
    </View>
  );
}
