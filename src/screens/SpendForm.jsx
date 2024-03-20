import React from 'react';
import {Button, Text, TextInput, View, ScrollView} from 'react-native';
import {Formik} from 'formik';
import SelectList from 'react-native-dropdown-select-list';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function SpendForm() {
  const data = [
    {
      id: 1,
      value: 'Visa Fran',
    },
    {
      id: 2,
      value: 'Mastercard Fran',
    },
    {
      id: 3,
      value: 'Visa Pau',
    },
    {
      id: 4,
      value: 'Mastercard Pau',
    },
  ];

  return (
    <Formik
      initialValues={{email: ''}}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View className="flex gap-2 m-4">
          <View className="flex gap-2">
            <Text className="text-lg font-medium">Importe</Text>
            <TextInput
              placeholder="Ingresá el importe"
              defaultValue="$0"
              inputMode="numeric"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
          </View>
          <View className="flex gap-4">
            <Text className="text-lg font-medium">Método de pago</Text>
            <View className="flex flex-row gap-8 justify-center">
              <View className="justify-items-center">
                <FontAwesome5 name="money-bill" size={30} />
                <Text className="text-sm">Efectivo</Text>
                <BouncyCheckbox size={15} />
              </View>
              <View className="justify-items-center">
                <FontAwesome5 name="money-check-alt" size={30} />
                <Text className="text-sm">Débito</Text>
                <BouncyCheckbox size={15} />
              </View>
              <View className="justify-items-center">
                <FontAwesome5 name="money-check" size={30} />
                <Text className="text-sm">Crédito</Text>
                <BouncyCheckbox size={15} />
              </View>
            </View>
          </View>
          <View className="flex gap-2">
            <Text className="text-lg font-medium">Tarjeta</Text>
            <ScrollView horizontal={true}>
              <View className="flex gap-1 ounded-lg h-36 w-52 shadow-sm bg-slate-800 rounded-lg p-4 mr-2">
                <View>
                  <Text className="color-white">Banco Ciudad</Text>
                </View>
                <View>
                  <Text className="bg-slate-700 rounded-md color-white p-1.5 w-20 text-sm text-center">
                    ****1234
                  </Text>
                </View>
                <View className="flex flex-row justify-between items-baseline">
                  <Text className="color-white font-bold text-sm">FRANCO</Text>
                  <FontAwesome name="cc-visa" size={40} color="white" />
                </View>
              </View>
              <View className="flex gap-1 ounded-lg h-36 w-52 shadow-sm bg-slate-800 rounded-lg p-4 mr-2">
                <View>
                  <Text className="color-white">Banco Ciudad</Text>
                </View>
                <View>
                  <Text className="bg-slate-700 rounded-md color-white p-1.5 w-20 text-sm text-center">
                    ****1234
                  </Text>
                </View>
                <View className="flex flex-row justify-between items-baseline">
                  <Text className="color-white font-bold text-sm">FRANCO</Text>
                  <FontAwesome name="cc-mastercard" size={40} color="white" />
                </View>
              </View>
              <View className="flex gap-1 ounded-lg h-36 w-52 shadow-sm bg-slate-800 rounded-lg p-4 mr-2">
                <View>
                  <Text className="color-white">Banco Ciudad</Text>
                </View>
                <View>
                  <Text className="bg-slate-700 rounded-md color-white p-1.5 w-20 text-sm text-center">
                    ****1234
                  </Text>
                </View>
                <View className="flex flex-row justify-between items-baseline">
                  <Text className="color-white font-bold text-sm">FRANCO</Text>
                  <FontAwesome name="cc-visa" size={40} color="white" />
                </View>
              </View>
              <View className="flex gap-1 ounded-lg h-36 w-52 shadow-sm bg-slate-800 rounded-lg p-4">
                <View>
                  <Text className="color-white">Banco Ciudad</Text>
                </View>
                <View>
                  <Text className="bg-slate-700 rounded-md color-white p-1.5 w-20 text-sm text-center">
                    ****1234
                  </Text>
                </View>
                <View className="flex flex-row justify-between items-baseline">
                  <Text className="color-white font-bold text-sm">FRANCO</Text>
                  <FontAwesome name="cc-visa" size={40} color="white" />
                </View>
              </View>
            </ScrollView>
          </View>
          <View className="flex gap-2">
            <Text className="text-lg font-medium">Cuotas DESPLEGABLE</Text>
            <TextInput
              placeholder="Ingrese la cantidad de cuotas con la que abonó"
              inputMode="numeric"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              className="border rounded-md"
            />
          </View>
          <View className="flex gap-2">
            <Text className="text-lg font-medium">Nombre del comercio</Text>
            <TextInput
              placeholder="Ingrese el nombre del comercio"
              inputMode="text"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              className="border rounded-md"
            />
          </View>
          <View className="flex gap-2">
            <Text className="text-lg font-medium">Categoría DESPLEGABLE</Text>
            <TextInput
              placeholder="Elija la tarjeta con la que pagó"
              inputMode="text"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              className="border rounded-md"
            />
          </View>
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
}
