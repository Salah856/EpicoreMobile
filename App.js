import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import splitLink from './apolloSetup'; 

const client = new ApolloClient({
  splitLink,
  cache: new InMemoryCache()
});


import FoodItems from './Screens/FoodItems';
import FoodItem from './Screens/FoodItem';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <ApolloProvider client={client}>
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
   </ApolloProvider>
  );
}


