import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Checkbox, RadioButton } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import sarasa from "../services/database/firebase";
import firebase from "../services/database/firebase";

interface Categoria {
  key: number;
  label: string;
  value: string;
}

const categoriaOptions: Categoria[] = [
  {
    key: 1,
    label: "Categoría",
    value: "",
  },
  {
    key: 2,
    label: "Supermercado",
    value: "supermercado",
  },
  {
    key: 3,
    label: "Carnicería",
    value: "carniceria",
  },
  {
    key: 4,
    label: "Gasto extra",
    value: "gastoExtra",
  },
  {
    key: 5,
    label: "Gasto fijo",
    value: "gastoFijo",
  },
  {
    key: 6,
    label: "Mascota",
    value: "mascota",
  },
];

interface CantidadDeCuotas {
  key: number;
  label: string;
  value: number;
}

const cantidadDeCuotasOptions: CantidadDeCuotas[] = [
  {
    key: 1,
    label: "Cantidad de cuotas",
    value: 1,
  },
  {
    key: 2,
    label: "3",
    value: 3,
  },
  {
    key: 3,
    label: "6",
    value: 6,
  },
  {
    key: 4,
    label: "12",
    value: 12,
  },
];

interface Moneda {
  key: number;
  label: string;
  value: string;
}

const monedaOptions: Moneda[] = [
  {
    key: 1,
    label: "ARS",
    value: "ARS",
  },
  {
    key: 2,
    label: "USD",
    value: "USD",
  },
];

interface MetodoDePago {
  key: number;
  label: string;
  value: string;
}

const metodoDePagoOptions: MetodoDePago[] = [
  {
    key: 1,
    label: "Método de pago",
    value: "",
  },
  {
    key: 2,
    label: "Efectivo",
    value: "efectivo",
  },
  {
    key: 3,
    label: "Tarjeta de débito",
    value: "TD",
  },
  {
    key: 4,
    label: "Tarjeta de crédito",
    value: "TC",
  },
];

export default function NativeForm() {
  const [nombreGasto, setNombreGasto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [metodoDePago, setMetodoDePago] = useState("");
  const [cuota, setCuota] = useState(false);
  const [cantidadCuotas, setCantidadCuotas] = useState(1);
  const [moneda, setMoneda] = useState("ARS");
  const [valor, setValor] = useState("");
  const [gastoFijo, setGastoFijo] = useState(false);

  const handleSubmit = () => {
    firebase
      .firestore()
      .collection("gastos")
      .add({
        nombreGasto: nombreGasto,
        categoria: categoria,
        metodoDePago: metodoDePago,
        cuota: cuota,
        cantidadCuotas: cantidadCuotas,
        moneda: moneda,
        valor: valor,
        gastoFijo: gastoFijo,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View className="mx-2 h-screen">
        <View className="flex flex-row justify-between mt-3">
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome6 name="house-chimney" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-center mt-3">
          <Text className="text-lg">Formulario de gastos</Text>
        </View>
        <TextInput
          className="bg-transparent mt-5 border-b border-gray-600"
          label="Nombre del gasto"
          placeholder="Carrefour, Fravega, etc"
          underlineColor="#FFF"
          activeUnderlineColor="#2563eb"
          value={nombreGasto}
          onChangeText={setNombreGasto}
        />

        <View className="flex flex-row mt-5 justify-between">
          <View
            style={{
              width: "37%",
              borderBottomWidth: 1,
              borderColor: "#6b7280",
            }}
          >
            <Picker
              selectedValue={moneda}
              onValueChange={(itemValue) => setMoneda(itemValue)}
            >
              {monedaOptions.map((moneda) => {
                return (
                  <Picker.Item
                    key={moneda.key}
                    label={moneda.label}
                    value={moneda.value}
                  />
                );
              })}
            </Picker>
          </View>
          <TextInput
            className="bg-transparent w-3/5 border-b border-gray-600"
            label="Valor"
            placeholder="100.000"
            underlineColor="#FFF"
            activeUnderlineColor="#2563eb"
            value={valor}
            onChangeText={setValor}
          />
        </View>

        <View className="mt-5 border-b border-gray-500">
          <Picker
            selectedValue={categoria}
            onValueChange={(itemValue) => setCategoria(itemValue)}
          >
            {categoriaOptions.map((categoria) => {
              return (
                <Picker.Item
                  key={categoria.key}
                  label={categoria.label}
                  value={categoria.value}
                />
              );
            })}
          </Picker>
        </View>

        <View className="mt-5 border-b border-gray-500">
          <Picker
            selectedValue={metodoDePago}
            onValueChange={(value) => setMetodoDePago(value)}
          >
            {metodoDePagoOptions.map((metodo) => {
              return (
                <Picker.Item
                  key={metodo.key}
                  label={metodo.label}
                  value={metodo.value}
                />
              );
            })}
          </Picker>
        </View>

        <View
          className={`flex flex-row items-center mt-5 ${
            metodoDePago === "efectivo" || "" ? "hidden" : "block"
          }`}
        >
          <Text className="text-base">Cuotas</Text>
          <View className="flex flex-row gap-2">
            <View className="flex flex-row items-center">
              <RadioButton
                disabled={metodoDePago !== "TC" ? true : false}
                color="#2563eb"
                value="no"
                status={cuota === false ? "checked" : "unchecked"}
                onPress={() => setCuota(false)}
              />
              <Text>No</Text>
            </View>
            <View className="flex flex-row items-center">
              <RadioButton
                disabled={metodoDePago !== "TC" ? true : false}
                color="#2563eb"
                value="si"
                status={cuota === true ? "checked" : "unchecked"}
                onPress={() => setCuota(true)}
              />
              <Text>Si</Text>
            </View>
          </View>
        </View>

        <View
          className={`mt-5 border-b border-gray-500 ${
            cuota === false ? "hidden" : "block"
          }`}
        >
          <Picker
            enabled={cuota === false ? false : true}
            selectedValue={cantidadCuotas}
            onValueChange={(itemValue) => setCantidadCuotas(itemValue)}
          >
            {cantidadDeCuotasOptions.map((cuotas) => {
              return (
                <Picker.Item
                  key={cuotas.key}
                  label={cuotas.label}
                  value={cuotas.value}
                />
              );
            })}
          </Picker>
        </View>

        <View className="flex flex-row items-center my-5">
          <Text className="text-base">Gasto fijo</Text>
          <Checkbox
            status={gastoFijo === true ? "checked" : "unchecked"}
            onPress={() => setGastoFijo(!gastoFijo)}
          />
        </View>

        <TouchableOpacity
          className="flex w-full bg-blue-600 p-2 rounded-md items-center mt-3 bottom-3 absolute"
          onPress={handleSubmit}
        >
          <Text className="text-white">Submit</Text>
        </TouchableOpacity>
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
