import React from 'react';
import { Loading } from '../../components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppNavigatorParamList } from '../../navigation/app.navigator';
import { useQuery } from '@apollo/client';
import { CharactersList } from './components/characters-list.component';
import { RETRIEVE_CHARACTERS } from '../../graphql/character.query';

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

  return <CharactersList data={data.characters.results} />;
};
