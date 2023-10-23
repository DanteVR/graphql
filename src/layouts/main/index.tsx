import React from 'react';
import { Loading } from '../../components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppNavigatorParamList } from '../../navigation/app.navigator';
import { useQuery } from '@apollo/client';
import { CharactersList } from './components/characters-list.component';
import { RETRIEVE_CHARACTERS } from '../../graphql/character.query';
import { Characters } from '../../schemas/character.schema';

export type MainScreenNavigationProp = NativeStackNavigationProp<
  AppNavigatorParamList,
  'Main'
>;

export type MainScreenProps = {
  navigation: MainScreenNavigationProp;
};

export default (_: MainScreenProps): React.ReactElement => {
  const { data, loading } = useQuery<Characters>(RETRIEVE_CHARACTERS);

  if (loading) {
    return <Loading />;
  }

  return <CharactersList characters={data?.characters.results!} />;
};
