import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { AppNavigatorParamList } from '../../navigation/app.navigator';
import { useQuery } from '@apollo/client';
import { RETRIEVE_CHARACTERS } from '../../graphql/character.query';
import { Loading } from '../../components';

type MainScreenNavigationProp = NativeStackNavigationProp<
  AppNavigatorParamList,
  'Main'
>;

export type MainScreenProps = {
  navigation: MainScreenNavigationProp;
};

export default (_: MainScreenProps) => {
  const { data, loading } = useQuery(RETRIEVE_CHARACTERS);

  if (loading) {
    return <Loading />;
  }

  return <Text>{JSON.stringify(data)}</Text>;
};
