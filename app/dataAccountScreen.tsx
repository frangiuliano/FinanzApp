import { auth } from "@/services/database/firebase";
import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DataAccountScreen() {
  const [nombre, setNombre] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text className="text-lg font-bold">Mi perfil</Text>
        <Text className="text-base">Actualizá tus datos de contacto</Text>
      </View>
      <View>
        <Text>Nombres</Text>
        <TextInput
          className="bg-transparent w-3/5 border-b border-gray-600"
          label="Nombre"
          placeholder="Ingresá tu nombre"
          underlineColor="#FFF"
          activeUnderlineColor="#2563eb"
          value={nombre}
          onChangeText={setNombre}
        />
      </View>
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
