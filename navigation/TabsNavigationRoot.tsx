import DolarScreen from "@/app/dolarScreen";
import Home from "@/app/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SpendForm from "@/app/spendForm";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="SpendForm" component={SpendForm} />
      <Tab.Screen name="DolarScreen" component={DolarScreen} />
    </Tab.Navigator>
  );
}
