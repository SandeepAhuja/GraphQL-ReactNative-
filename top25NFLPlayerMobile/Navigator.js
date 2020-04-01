//import react since your  importing your components
import React from 'react';

import Home from './Home';
import PlayersList from './PlayersList';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const  Navigator =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PlayersList" component={PlayersList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;