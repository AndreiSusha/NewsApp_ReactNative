import React from 'react';
import Main from './components/Main';
import Contacts from './components/Contacts';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Main Page' }}
        />
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{ title: 'Contact information' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
