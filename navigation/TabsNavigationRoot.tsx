import DolarScreen from "@/app/dolarScreen";
import Home from "@/app/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import myAccountScreen from "@/app/myAccountScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="DolarScreen"
        component={DolarScreen}
        options={{
          tabBarLabel: "Valor dólar",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="attach-money" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={myAccountScreen}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
