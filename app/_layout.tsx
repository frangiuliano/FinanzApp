// import { Stack } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import index from "./index";
import home from "./home";
import SpendForm from "./spendForm";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" component={index} />
      <Stack.Screen name="home" component={home} />
      <Stack.Screen name="spendForm" component={SpendForm} />
    </Stack.Navigator>
  );
}
