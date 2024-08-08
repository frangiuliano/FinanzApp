// import { Stack } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SpendForm from "./spendForm";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import DolarScreen from "./dolarScreen";
import LoginScreen from "./login/loginScreen";
import PreLoginScreen from "./login/preLoginScreen";
import CreateAccountScreen from "./login/createAccountScreen";
import AuthLoadingScreen from "./authLoadingScreen";
import TabNavigator from "../navigation/TabsNavigationRoot";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="authLoadingScreen" component={AuthLoadingScreen} />
        <Stack.Screen name="login/preLoginScreen" component={PreLoginScreen} />
        <Stack.Screen name="login/loginScreen" component={LoginScreen} />
        <Stack.Screen
          name="login/createAccountScreen"
          component={CreateAccountScreen}
        />
        <Stack.Screen name="home" component={TabNavigator} />
        <Stack.Screen name="spendForm" component={SpendForm} />
        <Stack.Screen name="dolarScreen" component={DolarScreen} />
      </Stack.Navigator>
    </Provider>
  );
}
