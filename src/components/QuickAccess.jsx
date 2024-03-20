import {View, Text, Pressable, ScrollView} from 'react-native';
import React from 'react';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const quickAccessOptions = [
  {
    key: 1,
    icon: 'attach-money',
    title: 'Añadir gasto',
    description: 'Tocá acá para agregar un gasto',
    navigation: 'SpendForm',
  },
  {
    key: 2,
    icon: 'add-card',
    title: 'Añadir tarjeta',
    description: 'Tocá acá para agregar una tarjeta',
  },
  {
    key: 3,
    icon: 'add-card',
    title: 'Añadir tarjeta',
    description: 'Tocá acá para agregar una tarjeta',
  },
  {
    key: 4,
    icon: 'add-card',
    title: 'Añadir tarjeta',
    description: 'Tocá acá para agregar una tarjeta',
  },
];

export default function QuickAccess() {
  const navigation = useNavigation();

  return (
    <View>
      <Text className="font-bold text-lg color-black">Accesos rápidos</Text>
      <ScrollView horizontal={true} className="w-full mt-4">
        {quickAccessOptions.map(option => (
          <Pressable
            key={option.key}
            onPress={() => navigation.navigate(option.navigation)}
            className="mr-2 w-40 items-center gap-2 p-3 bg-neutral-100 border border-gray-200 rounded-xl">
            <View className="bg-blue-200 px-2 py-1 rounded-full items-center justify-center">
              <IconMaterial name={option.icon} size={20} color="black" />
            </View>
            <Text className="text-sm font-bold">{option.title}</Text>
            <Text className="text-xs text-center">{option.description}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
