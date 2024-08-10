import { auth } from "@/services/database/firebase";
import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";

export default function MyAccountScreen() {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("login/preLoginScreen");
      })
      .catch((error) => {
        console.log("errorHandleSignOut", error);
      });
  };

  const [nombre, setNombre] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text className="text-lg font-bold">Mi cuenta</Text>
      </View>
      <TouchableOpacity
        className="flex flex-row justify-between border border-gray-400 rounded-md p-2"
        onPress={() => navigation.navigate("dataAccountScreen")}
      >
        <Text>Mis datos</Text>
        <MaterialIcons name="arrow-forward-ios" size={15} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        className="flex flex-row justify-between border border-gray-400 rounded-md p-2"
        onPress={() => handleSignOut()}
      >
        <Text>Cerrar sesión</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
    gap: 10,
    position: "relative",
  },
});
