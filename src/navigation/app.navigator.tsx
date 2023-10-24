import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainScreen } from '../scenes/main/main.component';
import { DetailScreen } from '../scenes/detail/detail.component';
import { Character } from '../schemas/character.schema';
import { pallette } from '../utils/constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export type AppNavigatorParamList = {
  Main: undefined;
  Detail: Character;
};

export const AppNavigator = (): React.ReactElement => {
  const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: pallette.primary,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            title: 'Rick and Morty Gallery',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ presentation: 'transparentModal', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
