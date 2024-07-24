// import { Stack } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import index from "./index";
import home from "./home";
import SpendForm from "./spendForm";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import DolarScreen from "./dolarScreen";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" component={index} />
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="spendForm" component={SpendForm} />
        <Stack.Screen name="dolarScreen" component={DolarScreen} />
      </Stack.Navigator>
    </Provider>
  );
}
