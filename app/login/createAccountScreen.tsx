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
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/services/database/firebase";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";

function CreateAccountScreen() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text className="text-xl font-bold mt-5 text-gray-700">FinanzApp!</Text>
      <Text className="text-3xl font-bold mt-5 text-gray-700">
        Crea tu cuenta
      </Text>
      <Text className="tracking-wider text-gray-700 mt-3">
        Crea tu cuenta ingresando un email y una contraseña
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
      </View>
      <View className="flex w-full items-center gap-y-3 mt-5">
        <TouchableOpacity
          className="flex w-full bg-black p-2 rounded-md items-center"
          onPress={() => handleCreateUser()}
        >
          <Text className="text-white font-bold text-base">Crear cuenta</Text>
        </TouchableOpacity>
        <View className="flex flex-row gap-x-2">
          <Text>¿Ya tenes cuenta?</Text>
          <Text
            className="text-blue-500 font-bold"
            onPress={() => navigation.navigate("login/loginScreen")}
          >
            Ingresa aca
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CreateAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
  },
});
