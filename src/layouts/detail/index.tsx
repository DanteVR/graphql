import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RouteProp } from '@react-navigation/native';
import { AppNavigatorParamList } from '../../navigation/app.navigator';
import { Text } from 'react-native';

type RouteScreenNavigationProp = NativeStackNavigationProp<
  AppNavigatorParamList,
  'Detail'
>;

// type DetailScreenRouteProp = RouteProp<AppNavigatorParamList, 'Detail'>;

export type DetailScreenProps = {
  navigation: RouteScreenNavigationProp;
  // route: DetailScreenRouteProp;
};

export default (_: DetailScreenProps): React.ReactElement => {
  return <Text>Detail</Text>;
};
