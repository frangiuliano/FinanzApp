import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import SpendForm from './src/screens/SpendForm';
import QuickAccess from './src/components/QuickAccess';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SpendForm" component={SpendForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
