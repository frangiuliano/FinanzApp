import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";

function PreLoginScreen() {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <SafeAreaView style={styles.container}>
      <Text className="text-3xl font-bold mt-5 text-gray-700">
        Controlá tus finanzas con FinanzApp!
      </Text>
      <View className="flex gap-y-3 mt-5">
        <Text className="tracking-wider text-gray-700">
          Simplifica la gestión de tus gastos y ahorros. Accede a tus datos
          desde cualquier dispositivo, en cualquier momento, y sincroniza tus
          cuentas fácilmente.
        </Text>
        <Text className="tracking-wider text-gray-700">
          Tus datos están seguros: utilizamos las últimas tecnologías en
          encriptación para proteger tu información.
        </Text>
      </View>
      <View className="flex h-full">
        <LottieView
          source={require("../../assets/LogginScreenAnimation.json")}
          style={{ width: "100%", height: "50%" }}
          autoPlay
          loop={false}
        />
      </View>

      <View className="flex w-full absolute left-5 bottom-5 items-center gap-y-3">
        <TouchableOpacity
          className="flex w-full bg-black p-2 rounded-md items-center"
          onPress={() => navigation.navigate("login/createAccountScreen")}
        >
          <Text className="text-white font-bold text-base">Empezar</Text>
        </TouchableOpacity>
        <View className="flex flex-row gap-x-2">
          <Text>¿Ya tenes cuenta?</Text>
          <Text
            onPress={() => navigation.navigate("login/loginScreen")}
            className="text-blue-500 font-bold"
          >
            Logueate acá
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default PreLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
  },
});
