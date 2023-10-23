import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../scenes/main/main.component';
import { DetailScreen } from '../scenes/detail/detail.component';

const Stack = createNativeStackNavigator();

export type AppNavigatorParamList = {
  Main: undefined;
  Detail: undefined;
};

export const AppNavigator = (): React.ReactElement => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
