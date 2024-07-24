import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { getDolares, getDolarTarjeta } from "@/services/dolarServices";

const buttons = [
  { id: 1, name: "Information" },
  { id: 2, name: "Settings" },
  { id: 3, name: "Investment" },
  { id: 4, name: "Expenditure" },
];

export default function Sarasa() {
  const [buttonSelected, setButtonSelected] = useState(1);
  const { dolarTarjeta } = useSelector((state: RootState) => state.utils);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getDolarTarjeta());
  }, [dispatch]);

  const onClickButton = (id: number) => {
    setButtonSelected(id);
  };

  return (
    <View className="w-auto h-2/2 bg-blue-600 p-3 rounded-xl">
      <View className="flex flex-row justify-center gap-1 px-2">
        {buttons.map((button) => {
          const isSelected = button.id === buttonSelected;
          return (
            <Pressable
              key={button.id}
              className={`${
                isSelected ? "bg-white" : "bg-blue-800"
              } py-1.5 rounded-md w-1/4`}
              onPress={() => onClickButton(button.id)}
            >
              <Text
                className={`${
                  isSelected ? "text-blue-800" : "text-white"
                } text-[11px] text-center`}
              >
                {button.name}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <View className="flex flex-col my-1">
        <Text className="font-light text-sm text-white my-2">Your balance</Text>
        <Text className="font-extrabold text-4xl text-white">$26,400.00</Text>
      </View>
      <View className="flex flex-row my-2">
        <Text className="bg-blue-800 px-3 py-1 rounded-full text-white mr-2">
          Dólar tarjeta
        </Text>
        <Text className="bg-blue-900 text-green-500 px-3 py-1 rounded-full">
          ${dolarTarjeta ? dolarTarjeta.venta : ""}
        </Text>
      </View>
    </View>
  );
}
