import React from "react";
import { Text, View } from "react-native";

function DolarCard({ dolar }) {
  return (
    <View className="flex flex-col py-2 px-5 gap-y-2 bg-white rounded-2xl">
      <Text className="text-lg font-bold">
        {dolar.nombre === "Contado con liquidación" ? "CCL" : dolar.nombre}
      </Text>
      <View className="flex flex-row gap-x-3 mb-2">
        <View>
          <Text>Compra</Text>
          <Text>{dolar.compra}</Text>
        </View>
        <View>
          <Text>Venta</Text>
          <Text>{dolar.venta}</Text>
        </View>
      </View>
    </View>
  );
}

export default DolarCard;
