import {View, Text, Button, Pressable} from 'react-native';
import React from 'react';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../redux/slices/counterSlice';
import {useDispatch, useSelector} from 'react-redux';

export default function ResumeCardHome() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  handleIncrement = () => {
    dispatch(increment());
  };

  handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <View className="p-3 bg-blue-800 gap-3 rounded-2xl">
      <View className="flex flex-row gap-2 justify-center">
        <Pressable
          onPress={handleIncrement}
          className="bg-blue-900 px-3 py-1 rounded-md ">
          <Text className="text-sm color-white">Información</Text>
        </Pressable>
        <Pressable
          onPress={handleDecrement}
          className="bg-blue-900 px-3 py-1 rounded-md ">
          <Text className="text-sm color-white">Ahorros</Text>
        </Pressable>
        <Pressable className="bg-blue-900 px-3 py-1 rounded-md ">
          <Text className="text-sm color-white">Inversiones</Text>
        </Pressable>
      </View>
      <View className="flex gap-2">
        <Text className="color-white text-sm">Tu balance - Mes actual</Text>
        <Text className="color-white text-4xl font-bold">${count}</Text>
      </View>
      <View className="flex gap-2 bg-slate-100 rounded-lg justify-center items-center py-2">
        <Text className="color-blue-900 text-sm">Tu balance - Próximo mes</Text>
        <Text className="color-blue-900 text-4xl font-bold">${count}</Text>
      </View>
    </View>
  );
}
