import React from 'react';
import Main from './components/Main';
import FullInfo from './components/FullInfo';

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
          options={{
            title: 'Main Page',
            headerStyle: {
              backgroundColor: 'yellow',
              height: 70,
            },
            headerTitleStyle: {
              fontWeight: 'light',
            },
          }}
        />
        <Stack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{
            title: 'Article Page',
            headerStyle: {
              backgroundColor: '#00FFFF',
              height: 70,
            },
            headerTitleStyle: {
              fontWeight: '400',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
