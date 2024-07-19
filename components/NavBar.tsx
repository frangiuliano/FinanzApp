import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function NavBar() {
  return (
    <View className="flex flex-row justify-between mt-3 items-center">
      <View className="flex flex-row items-center w-auto h-auto bg-[#172554] px-4 py-3 rounded-full">
        <Ionicons name="person" size={17} color="white" />
        <Text className="color-white text-center ml-2">Hola, Fran</Text>
      </View>
      <MaterialCommunityIcons name="bell" size={24} color="rgb(23 37 84)" />
    </View>
  );
}
