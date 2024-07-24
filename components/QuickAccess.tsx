import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Link } from "expo-router";

interface QuickAccessOption {
  key: number;
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  description: string;
  navigation?: string;
}

const quickAccessOptions: QuickAccessOption[] = [
  {
    key: 1,
    icon: "attach-money",
    title: "Añadir gasto",
    description: "Tocá acá para agregar un gasto",
    navigation: "spendForm",
  },
  {
    key: 2,
    icon: "chart-line",
    title: "Valor dólares",
    description: "Tocá acá para ver el valor del dólar",
    navigation: "dolarScreen",
  },
  {
    key: 3,
    icon: "add-card",
    title: "Añadir tarjeta",
    description: "Tocá acá para agregar una tarjeta",
    navigation: "spendForm",
  },
  {
    key: 4,
    icon: "add-card",
    title: "Añadir tarjeta",
    description: "Tocá acá para agregar una tarjeta",
    navigation: "spendForm",
  },
];

export default function QuickAccess() {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View>
      <Text className="font-bold text-lg color-black">Accesos rápidos</Text>
      <ScrollView horizontal={true} className="flex gap-2 w-full mt-1">
        {quickAccessOptions.map((option) => (
          <Link key={option.key} href={option.navigation ?? "/"}>
            <Pressable
              onPress={() => {
                if (option.navigation) {
                  navigation.navigate(option.navigation);
                }
              }}
              className="w-40 items-center gap-2 p-3 bg-neutral-100 border border-gray-200 rounded-xl"
            >
              <View className="bg-blue-200 px-2 py-1 rounded-full items-center justify-center">
                {option.icon === "chart-line" ? (
                  <FontAwesome6 name={option.icon} size={20} color="black" />
                ) : (
                  <MaterialIcons name={option.icon} size={20} color="black" />
                )}
              </View>
              <Text className="text-sm font-bold">{option.title}</Text>
              <Text className="text-xs text-center">{option.description}</Text>
            </Pressable>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
}
