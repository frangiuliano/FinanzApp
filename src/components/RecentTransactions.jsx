import {View, Text, Pressable} from 'react-native';
import React from 'react';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

export default function RecentTransactions() {
  return (
    <View>
      <View className="flex flex-row justify-between">
        <Text className="font-bold text-lg color-black">
          Transacciones recientes
        </Text>
        <Pressable className="bg-blue-200 px-3 py-1 rounded-full">
          <Text className="text-sm color-blue-700 font-semibold">
            Ver todas
          </Text>
        </Pressable>
      </View>
      <View className="mt-4 mx-3">
        <View className="flex flex-row gap-4">
          <View className="bg-blue-200 px-2 py-1 rounded-full items-center justify-center">
            <IconMaterial name="credit-card" size={20} color="rgb(23 37 84)" />
          </View>
          <View>
            <Text className="text-sm font-bold">
              Transacción del 15 de Marzo de 2024
            </Text>
            <Text className="text-xs">$5000 - Farmacity</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
