import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/database/firebase";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";

function LoginScreen() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate("home");
        console.log("userCredential", userCredential);
        console.log("user", user);
      })
      .catch((error) => {
        console.log("error", error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text className="text-xl font-bold mt-5 text-gray-700">FinanzApp!</Text>
      <Text className="text-3xl font-bold mt-5 text-gray-700">
        Logueate con tu cuenta
      </Text>
      <Text className="tracking-wider text-gray-700 mt-3">
        Ingresá tu email y contraseña para loguearte con tu cuenta
      </Text>
      <View className="mt-5">
        <Text>Email</Text>
        <TextInput
          mode="outlined"
          className="bg-transparent mt-2"
          placeholder="Tu email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View className="flex mt-5">
        <Text>Contraseña</Text>
        <TextInput
          mode="outlined"
          className="bg-transparent mt-1"
          label="Contraseña"
          placeholder="Tu contraseña"
          value={password}
          onChangeText={setPassword}
        />
        <Text className="self-end text-blue-500 font-bold mt-2">
          ¿Olvidaste tu contraseña?
        </Text>
      </View>
      <View className="flex w-full items-center gap-y-3 mt-5">
        <TouchableOpacity
          className="flex w-full bg-black p-2 rounded-md items-center"
          onPress={() => handleOnSubmit()}
        >
          <Text className="text-white font-bold text-base">Entrar</Text>
        </TouchableOpacity>
        <View className="flex flex-row gap-x-2">
          <Text>¿No tenes cuenta?</Text>
          <Text
            className="text-blue-500 font-bold"
            onPress={() => navigation.navigate("login/createAccountScreen")}
          >
            Crea tu cuenta acá
          </Text>
        </View>
      </View>
      <View>
        <View className="flex flex-row items-center my-5">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-3 text-gray-500">O iniciá sesión con</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>
        <View></View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
  },
});
