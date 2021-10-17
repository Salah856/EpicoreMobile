import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FoodItems from './Screens/FoodItems';
import FoodItem from './Screens/FoodItem';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
          <Stack.Screen 
            name="Food Items"
            component={FoodItems}
            options={{ title: 'Foods' }}
          />
          <Stack.Screen
            name="FoodItem"
            component={FoodItem}
          />
     </Stack.Navigator>
   </NavigationContainer>
  );
}


