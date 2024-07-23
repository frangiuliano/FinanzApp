import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Checkbox, RadioButton } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import transformDate from "@/utils/transformDate";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import {
  addSpend,
  getCategories,
  getCuotas,
  getMetodosDePago,
  getMoneda,
} from "@/services/formServices";
import { Gasto } from "@/interfaces/formInterfaces";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { Link } from "expo-router";

export default function NativeForm() {
  const today = new Date();

  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "DD/MM/YYYY"
  );

  const [nombreGasto, setNombreGasto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [metodoDePago, setMetodoDePago] = useState("");
  const [cuota, setCuota] = useState(false);
  const [cantidadCuotas, setCantidadCuotas] = useState(1);
  const [moneda, setMoneda] = useState("ARS");
  const [valor, setValor] = useState("");
  const [gastoFijo, setGastoFijo] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState(startDate);

  const dispatch: AppDispatch = useDispatch();

  const { categorias, cantidadDeCuotas, monedas, metodosDePago } = useSelector(
    (state: RootState) => state.form
  );

  useEffect(() => {
    getCategories(dispatch);
    getCuotas(dispatch);
    getMoneda(dispatch);
    getMetodosDePago(dispatch);
  }, [dispatch]);

  const handleSubmit = (spend: Gasto) => {
    dispatch(addSpend(spend));
  };

  const handleOnPress = () => {
    setOpenCalendar(!openCalendar);
  };

  const handleChange = (propDate: string) => {
    const fechaFinal = transformDate(propDate);
    setDate(fechaFinal);
  };

  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <SafeAreaView style={styles.container}>
      <View className="mx-2 h-screen">
        <View className="flex flex-row justify-between mt-3">
          <TouchableOpacity>
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href="/">
              <FontAwesome6 name="house-chimney" size={24} color="black" />
            </Link>
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
              {monedas.map((moneda) => {
                return (
                  <Picker.Item
                    key={moneda.id}
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
            {categorias.map((categoria) => {
              return (
                <Picker.Item
                  key={categoria.id}
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
            {metodosDePago.map((metodo) => {
              return (
                <Picker.Item
                  key={metodo.id}
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
            {cantidadDeCuotas.map((cuotas) => {
              return (
                <Picker.Item
                  key={cuotas.id}
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
            color="#2563eb"
            status={gastoFijo === true ? "checked" : "unchecked"}
            onPress={() => setGastoFijo(!gastoFijo)}
          />
        </View>

        <View className="flex flex-row w-screen gap-2 items-center">
          <Text className="text-base">Fecha del gasto</Text>
          <View className="flex flex-row gap-2 w-1/2">
            <TouchableOpacity onPress={handleOnPress} className="w-full">
              <View className="flex flex-row border-b border-gray-500 p-2 w-full justify-between">
                <Text>{date}</Text>
                <AntDesign name="calendar" size={20} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Modal animationType="slide" transparent={true} visible={openCalendar}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <DatePicker
                mode="calendar"
                minimunDate={today}
                selected={date}
                onDateChange={handleChange}
              />

              <View className="flex flex-row gap-4">
                <TouchableOpacity
                  onPress={handleOnPress}
                  className=" bg-gray-400 w-1/3 py-2 items-center rounded-md mt-3"
                >
                  <Text>Cerrar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleOnPress}
                  className=" bg-blue-600 w-1/3 py-2 items-center rounded-md mt-3"
                >
                  <Text>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
