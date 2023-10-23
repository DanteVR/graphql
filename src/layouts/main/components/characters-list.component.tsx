import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Item } from '../components/item.component';
import { Character } from '../../../schemas/character.schema';

interface ListProps {
  characters: Character[];
}

export const CharactersList = ({ characters }: ListProps) => {
  const renderItem: ListRenderItem<Character> = useCallback(
    ({ item }) => <Item character={item} />,
    [],
  );

  return (
    <FlatList
      numColumns={2}
      data={characters}
      renderItem={renderItem}
      keyExtractor={character => character.id.toString()}
    />
  );
};
