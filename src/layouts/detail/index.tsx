import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { AppNavigatorParamList } from '../../navigation/app.navigator';
import { Info } from './components/info.component';

type DetailScreenNavigationProp = NativeStackNavigationProp<
  AppNavigatorParamList,
  'Detail'
>;

type DetailScreenRouteProp = RouteProp<AppNavigatorParamList, 'Detail'>;

export type DetailScreenProps = {
  navigation: DetailScreenNavigationProp;
  route: DetailScreenRouteProp;
};

export default ({
  route: { params },
}: DetailScreenProps): React.ReactElement => {
  return <Info character={params} />;
};
