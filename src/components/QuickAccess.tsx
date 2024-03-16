import {View, Text, Pressable} from 'react-native';
import React from 'react';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

export default function QuickAccess() {
  return (
    <View>
      <Text className="font-bold text-lg color-black">Accesos rápidos</Text>
      <View className="flex flex-row gap-2 w-full mt-4">
        <Pressable className="w-2/6 items-center gap-2 p-3 bg-neutral-100 border border-gray-200 rounded-xl">
          <View className="bg-blue-200 px-2 py-1 rounded-full items-center justify-center">
            <IconMaterial name="attach-money" size={20} color="black" />
          </View>
          <Text className="text-sm font-bold">Añadir gasto</Text>
          <Text className="text-xs text-center">
            Tocá acá para agregar un gasto
          </Text>
        </Pressable>
        <Pressable className="w-2/6 items-center gap-2 p-3 bg-neutral-100 border border-gray-200 rounded-xl">
          <View className="bg-blue-200 px-2 py-1 rounded-full items-center justify-center">
            <IconMaterial name="add-card" size={20} color="black" />
          </View>
          <Text className="text-sm font-bold">Añadir tarjeta</Text>
          <Text className="text-xs text-center">
            Tocá acá para agregar una tarjeta
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
